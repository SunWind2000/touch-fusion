import { RECOGNIZER_TYPE } from '@/recognizer';
import { hasParentNode } from '@/utils';
import { COMPUTE_INTERVAL, INPUT_STATE } from './constants';
import { InputUtil } from './util';

import type { Manager } from '@/manager';
import type { IManagerSession } from '@/manager';
import type { InputData, SimpleInputData, Point2D } from './types';

/**
 * 输入事件处理器.获取各个输入事件的数据,并做统一处理.
 * @param manager 
 * @param eventType 
 * @param eventData 
 */
export const inputHandler = (
  manager: Manager,
  eventType: INPUT_STATE,
  eventData: InputData
) => {
  const pointersLen = eventData.pointers!.length;
  const changedPointersLen = eventData.changedPointers!.length;
  const isFirst = (eventType & INPUT_STATE.Start) &&
    (pointersLen - changedPointersLen === 0);
  const isFinal = (eventType & (INPUT_STATE.End | INPUT_STATE.Cancel)) &&
    (pointersLen - changedPointersLen === 0);

  eventData.isFirst = !!isFirst;
  eventData.isFinal = !!isFinal;

  if (eventData.isFirst) {
    manager.clearSession();
  }

  eventData.eventType = eventType;

  _computeInputData(manager, eventData);

  // manager.options.preventDefault为true时,阻止默认事件
  if  (manager.options.preventDefault) {
    eventData.srcEvent!.preventDefault();
  }
  // manager.options.stopPropagation为true时,阻止事件冒泡
  if (manager.options.stopPropagation) {
    eventData.srcEvent!.stopPropagation();
  }
  // manager,options.stopImmediatePropagation为true时,阻止事件立即停止
  if (manager.options.stopImmediatePropagation) {
    eventData.srcEvent!.stopImmediatePropagation();
  }

  manager.emit(RECOGNIZER_TYPE.Secret, eventData);
  manager.recognize(eventData);
  manager.session.prevInput = eventData;
};

const _computeInputData = (manager: Manager, inputData: InputData) => {
  const session = manager.session;
  const pointersLen = inputData.pointers!.length;

  // store the first input to calculate the distance and direction
  if (!session.firstInput) {
    session.firstInput = _simpleCloneInputData(inputData);
  }

  // to compute scale and rotation we need to store the multiple touches
  if (pointersLen > 1 && !session.firstMultiple) {
    session.firstMultiple = _simpleCloneInputData(inputData);
  } else if (pointersLen === 1) {
    session.firstMultiple = null;
  }

  const { firstInput, firstMultiple } = session;
  const offsetCenter = firstMultiple
    ? firstMultiple.center!
    : firstInput!.center!;

  const inputPoints: Point2D[] = [];
  inputData.pointers?.forEach((item) => {
    inputPoints.push({
      x: Math.round(item.clientX),
      y: Math.round(item.clientY)
    });
  });
  const center = inputData.center = InputUtil.getCenter(inputPoints);
  inputData.timestamp = Date.now();
  inputData.deltaTime = inputData.timestamp - firstInput!.timestamp!;
  inputData.angle = InputUtil.getAngle(offsetCenter, center);
  inputData.distance = InputUtil.getDistance(offsetCenter, center);

  _computeDeltaXY(session, inputData);
  inputData.offsetDirection = InputUtil.getDirection(inputData.deltaX!, inputData.deltaY!);

  const overallVelocity = InputUtil.getVelocity(inputData.deltaTime, inputData.deltaX!, inputData.deltaY!);
  inputData.overallVelocityX = overallVelocity.x;
  inputData.overallVelocityY = overallVelocity.y;
  inputData.overallVelocity = Math.abs(overallVelocity.x) > Math.abs(overallVelocity.y)
    ? overallVelocity.x
    : overallVelocity.y;
  
  inputData.scale = firstMultiple ? InputUtil.getScale(firstMultiple.pointers, inputPoints) : 1;
  inputData.rotation = firstMultiple ? InputUtil.getRotation(firstMultiple.pointers, inputPoints) : 0;

  inputData.maxPointers = !session.prevInput
    ? inputData.pointers!.length
    : Math.max(inputData.pointers!.length, session.prevInput.maxPointers!);

  const target = manager.element;
  if (hasParentNode(inputData.srcEvent!.target as HTMLElement, target)) {
    inputData.target = inputData.srcEvent!.target as HTMLElement;
  } else {
    inputData.target = target;
  }

  _computeIntervalInputData(session, inputData);
};

const _simpleCloneInputData = (inputData: InputData): SimpleInputData => {
  const pointers = [];
  for (let i = 0; i < inputData.pointers!.length; i++) {
    pointers.push({
      x: Math.round(inputData.pointers![i].clientX),
      y: Math.round(inputData.pointers![i].clientY)
    });
  }

  return {
    pointers,
    timestamp: Date.now(),
    center: InputUtil.getCenter(pointers),
    deltaX: inputData.deltaX || 0,
    deltaY: inputData.deltaY || 0
  };
};

const _computeDeltaXY = (session: IManagerSession, inputData: InputData) => {
  const center = inputData.center!;
  let offset = session.offsetDelta || { x: 0, y: 0 };
  let prevDelta = session.prevDelta || { x: 0, y: 0 };
  const prevInput = session.prevInput || { center: center };

  if (inputData.eventType === INPUT_STATE.Start || inputData.eventType === INPUT_STATE.End) {
    prevDelta = session.prevDelta = {
      x: prevInput.deltaX || 0,
      y: prevInput.deltaY || 0
    };

    offset = session.offsetDelta = {
      x: center.x,
      y: center.y
    };
  }

  inputData.deltaX = prevDelta.x + (center.x - offset.x);
  inputData.deltaY = prevDelta.y + (center.y - offset.y);
};

const _computeIntervalInputData = (session: IManagerSession, inputData: InputData) => {
  const last = session.lastInterval || inputData;
  const deltaTime = inputData.timestamp! - last.timestamp!;
  let velocity;
  let velocityX;
  let velocityY;
  let direction;

  if (
    inputData.eventType !== INPUT_STATE.Cancel &&
    (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)
  ) {
    const deltaX = inputData.deltaX! - last.deltaX!;
    const deltaY = inputData.deltaY! - last.deltaY!;
    const v = InputUtil.getVelocity(deltaTime, deltaX, deltaY);
    velocityX = v.x;
    velocityY = v.y;
    velocity = Math.abs(v.x) > Math.abs(v.y) ? v.x : v.y;
    direction = InputUtil.getDirection(deltaX, deltaY);

    session.lastInterval = inputData;
  } else {
    velocityX = last.velocityX!;
    velocityY = last.velocityY!;
    velocity = last.overallVelocity!;
    direction = last.direction!;
  }

  inputData.velocityX = velocityX;
  inputData.velocityY = velocityY;
  inputData.velocity = velocity;
  inputData.direction = direction;
};
