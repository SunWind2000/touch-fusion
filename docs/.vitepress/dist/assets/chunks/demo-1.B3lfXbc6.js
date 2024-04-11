import{E as J}from"./theme.BZ7fGXj1.js";import{d as Q,h as ee,l as te,o as ne,c as ie}from"./framework.DRO9vf8U.js";var f=(t=>(t[t.Stop=1]="Stop",t[t.ForceStop=2]="ForceStop",t))(f||{}),_=(t=>(t[t.None=1]="None",t[t.Left=2]="Left",t[t.Right=4]="Right",t[t.Up=8]="Up",t[t.Down=16]="Down",t[t.Horizontal=6]="Horizontal",t[t.Vertical=24]="Vertical",t[t.All=30]="All",t))(_||{});const D=6,N=24;var r=(t=>(t[t.Start=1]="Start",t[t.Move=2]="Move",t[t.End=4]="End",t[t.Cancel=8]="Cancel",t))(r||{}),m=(t=>(t.Touch="touch",t.Mouse="mouse",t.Pen="pen",t.Kinect="kinect",t))(m||{});const F=25,L=/mobile|tablet|ip(ad|hone|od)|android/i,b="ontouchstart"in window||navigator.maxTouchPoints>0,Y="PointerEvent"in window,U=b&&L.test(navigator.userAgent);var a=(t=>(t[t.Possible=1]="Possible",t[t.Began=2]="Began",t[t.Changed=4]="Changed",t[t.Ended=8]="Ended",t[t.Canceled=16]="Canceled",t[t.Failed=32]="Failed",t))(a||{}),y=(t=>(t.Secret="touch-fusion.input",t.Unknown="unknown",t.Swipe="swipe",t.Pan="pan",t.Pinch="pinch",t.Rotate="rotate",t.Press="press",t.Tap="tap",t))(y||{}),X=(t=>(t.COMPUTE="compute",t.AUTO="auto",t.MANIPULATION="manipulation",t.NONE="none",t.PAN_X="pan-x",t.PAN_Y="pan-y",t))(X||{});const se=["none","pan-x","pan-y","auto","manipulation","compute"],W={domEvents:!1,touchActions:["compute"],enable:!0,preventDefault:!1,stopPropagation:!1,stopImmediatePropagation:!1,inputTarget:null,cssProps:{userSelect:"none",touchAction:"none"}},oe=Object.freeze(Object.defineProperty({__proto__:null,ACTIONS:se,COMPUTE_INTERVAL:F,DEFAULT_OPTIONS:W,DIRECTION:_,DIRECTION_HORIZONTAL:D,DIRECTION_VERTICAL:N,INPUT_STATE:r,INPUT_TYPE:m,MOBILE_REGEX:L,RECOGNIZER_STATE:a,RECOGNIZER_TYPE:y,STOP_TYPE:f,SUPPORT_ONLY_TOUCH:U,SUPPORT_POINTER_EVENTS:Y,SUPPORT_TOUCH:b,TOUCH_ACTION:X},Symbol.toStringTag,{value:"Module"})),re=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));class C extends Error{constructor(e){super(e),this.name="TouchFusionError",Error.captureStackTrace&&Error.captureStackTrace(this,C)}}const ae=t=>{throw new C(t)},ce=t=>{console.warn(`[TouchFusionWarning]: ${t}`)},q=t=>typeof t=="boolean",he=t=>typeof t=="number",x=t=>typeof t=="string",B=t=>typeof t=="function",H=t=>t===null||Object.prototype.toString.call(t)==="[object Array]"?!1:typeof t=="object",d=t=>Array.isArray(t),le=t=>t instanceof Element,ue=t=>t instanceof HTMLElement,pe=t=>t instanceof TouchEvent,de=t=>t instanceof MouseEvent,ge=t=>t instanceof PointerEvent,_e=t=>t instanceof TouchList,me=t=>t!==void 0,ve=t=>t===void 0,fe=t=>t===null,ye=t=>t==null,j=t=>`${t}-${Date.now()}-${Math.floor(Math.random()*1e5)}`,T=(t,e,n)=>{if(!(!H(t)&&!d(t)))if(d(t))t.forEach(e,n);else for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t)},v=(t,e,n)=>!d(t)||!B(n[e])?!1:(T(t,n[e],n),!0),k=(t,e,n=!1)=>{const i=[],s=[];for(let o=0;o<t.length;o++){const c=e?t[o][e]:t[o];s.indexOf(c)===-1&&i.push(t[o]),s[o]=c}return n&&(e?i.sort((o,c)=>o[e]>c[e]?1:-1):i.sort()),i},E=(t,e,n)=>{T(e,i=>{x(i)&&t.addEventListener(i,n,!1)})},P=(t,e,n)=>{T(e,i=>{x(i)&&t.removeEventListener(i,n,!1)})},I=(t,e)=>{for(;t;){if(t===e)return!0;t=t.parentNode}return!1},V=(t,e)=>function(...n){return t.apply(e,n)},Te=Object.freeze(Object.defineProperty({__proto__:null,addEventListener:E,bindFn:V,each:T,generateId:j,hasParentNode:I,invokeArrayArg:v,isArray:d,isBoolean:q,isDefined:me,isElement:le,isFunction:B,isHTMLElement:ue,isMouseEvent:de,isNil:ye,isNull:fe,isNumber:he,isObject:H,isPointerEvent:ge,isString:x,isTouchEvent:pe,isTouchList:_e,isUndefined:ve,removeEventListener:P,throwError:ae,throwWarning:ce,uniqueArray:k},Symbol.toStringTag,{value:"Module"}));let R=class{constructor(t){this._type=y.Unknown,this._options={...t},this._id=j(this.type),this._manager=null,this._options.enable=this._options.enable??!0,this._state=a.Possible,this.simultaneous={},this.requireFails=[]}get type(){return this._type}get id(){return this._id}get state(){return this._state}get options(){return this._options}get hasRequireFailures(){return this.requireFails.length>0}set state(t){this._state=t}set manager(t){this._manager=t}set(t){var e;this._options={...this._options,...t},(e=this._manager)==null||e.touchAction.update()}canRecognizeWith(t){return!!this.simultaneous[t.id]}recognizeWith(t){if(d(t)&&v(t,"recognizeWidth",this))return this;const e=this.getRecognizerByNameIfManager(t,this);return e&&!this.simultaneous[e.id]&&(this.simultaneous[e.id]=e,e.recognizeWith(this)),this}dropRecognizeWith(t){if(d(t)&&v(t,"recognizeWidth",this))return this;const e=this.getRecognizerByNameIfManager(t,this);return e&&delete this.simultaneous[e.id],this}requireFailure(t){if(d(t)&&v(t,"requireFailure",this))return this;const e=this.getRecognizerByNameIfManager(t,this);return e&&!this.requireFails.includes(e)&&(this.requireFails.push(e),e.requireFailure(this)),this}dropRequireFailure(t){if(d(t)&&v(t,"dropRequireFailure",this))return this;const e=this.getRecognizerByNameIfManager(t,this);if(e){const n=this.requireFails.indexOf(e);n>-1&&this.requireFails.splice(n,1)}return this}emit(t){(e=>{var n;(n=this._manager)==null||n.emit(e,t)})(this._type)}tryEmit(t){this.canEmit()&&this.emit(t),this._state=a.Failed}canEmit(){for(const t of this.requireFails)if(t._state!==a.Ended&&t._state!==a.Possible)return!1;return!0}recognize(t){const e={...t};this._options.enable||(this.reset(),this._state=a.Failed),this._state&(a.Ended|a.Canceled|a.Failed)&&(this._state=a.Possible),this._state=this.process(e),this._state&(a.Began|a.Changed|a.Ended|a.Canceled)&&this.tryEmit(e)}getRecognizerByNameIfManager(t,e){return e.manager?e.manager.get(t.type):t}};class Ee extends R{constructor(e){super(e)}attrTest(e){var n;const{pointers:i}=this.options;return i===0||((n=e.pointers)==null?void 0:n.length)===i}reset(){this.state=a.Possible}process(e){const{eventType:n}=e,i=this.state&(a.Began|a.Changed),s=this.attrTest(e);return i&&(n&r.Cancel||!s)?a.Canceled:i||s?n&r.End?a.Ended:this.state&a.Began?a.Changed:a.Began:a.Failed}}const G=class Z extends R{constructor(e={}){super({...Z.defaults,...e}),this._timer=null,this._isRecognized=!1,this._type=y.Press}getTouchAction(){return["auto"]}process(e){const n=e.pointers.length===this.options.pointers,i=e.distance<this.options.threshold,s=e.deltaTime>this.options.time;if(!i||!n||e.eventType&(r.End|r.Cancel)&&!s)this.reset();else if(e.eventType&r.Start)this.reset(),this._timer=setTimeout(()=>{this.state=a.Ended,this._isRecognized=!0,this.tryEmit(e)},this.options.time);else if(e.eventType&r.End)return a.Ended;return a.Failed}reset(){this._timer&&clearTimeout(this._timer),this._timer=null}emit(e){this._isRecognized&&(this._isRecognized=!1,e.deltaTime=Date.now()-e.timestamp,e.timestamp=Date.now(),super.emit(e))}};G.defaults={threshold:9,pointers:1,time:251};let Pe=G;const Me=Object.freeze(Object.defineProperty({__proto__:null,AttrRecognizer:Ee,PressRecognizer:Pe,Recognizer:R},Symbol.toStringTag,{value:"Module"}));class Se{constructor(e,n){this.manager=e,this.actions=[...n],this.set(n)}set(e){const n=e.join(" ");this.manager.element.style.touchAction=n.toLowerCase().trim()}update(){this.manager.options.touchActions&&this.set([...this.manager.options.touchActions])}compute(){let e=[];return this.manager.recognizers.forEach(n=>{q(n.options.enable)&&n.options.enable&&(e=e.concat(n.getTouchAction()))}),this.cleanTouchActions(e)}preventDefault(e){const{srcEvent:n}=e,i=e.offsetDirection;if(this.manager.session.prevented){n.preventDefault();return}const s=this.actions.includes("none"),o=this.actions.includes("pan-x"),c=this.actions.includes("pan-y");if(s){const h=e.pointers.length===1,u=e.distance<2,g=e.deltaTime<250;if(h&&u&&g)return}if(!(o&&c)&&(s||o&&i===D||c&&i===N))return this.preventSrc(n)}cleanTouchActions(e){if(e.includes("none"))return"none";const n=e.includes("pan-x"),i=e.includes("pan-y");return n&&i?"none":n||i?n?"pan-x":"pan-y":e.includes("manipulation")?"manipulation":"auto"}preventSrc(e){this.manager.session.prevented=!0,e.preventDefault()}}class M{constructor(e,n){this._evEl=[],this._evWin=[],this._evTarget=[],this._manager=e,this.el=e.element,this._target=e.options.inputTarget,this.callback=n,this.domHandler=i=>{this._manager.options.enable&&this.handler(i)}}get manager(){return this._manager}get target(){return this._target}set evEl(e){this._evEl=e}set evWin(e){this._evWin=e}set evTarget(e){this._evTarget=e}init(){this._evEl.length!==0&&E(this.el,this._evEl,this.domHandler),this._evTarget.length!==0&&this.target&&E(this.target,this._evTarget,this.domHandler),this._evWin.length!==0&&E(window,this._evWin,this.domHandler)}destroy(){this._evEl.length!==0&&P(this.el,this._evEl,this.domHandler),this._evTarget.length!==0&&this.target&&P(this.target,this._evTarget,this.domHandler),this._evWin.length!==0&&P(window,this._evWin,this.domHandler)}}const be={mousedown:r.Start,mousemove:r.Move,mouseup:r.End},Ce=["mousedown"],xe=["mousemove","mouseup"];class $ extends M{constructor(e,n){super(e,n),this.evEl=Ce,this.evWin=xe,this._pressed=!1,this.init()}handler(e){const n=be[e.type];n===r.Start&&e.button===0&&(this._pressed=!0),this._pressed&&(n===r.End&&(this._pressed=!1),this.callback(this.manager,n,{pointers:[e],changedPointers:[e],pointerType:m.Mouse,srcEvent:e}))}}const Ie={touchstart:r.Start,touchmove:r.Move,touchend:r.End,touchcancel:r.Cancel},Re=["touchstart","touchmove","touchend","touchcancel"];class K extends M{constructor(e,n){super(e,n),this.evTarget=Re,this.targetIds={},this.init()}handler(e){const n=Ie[e.type],i=this.getTouches(e,n);i&&this.callback(this.manager,n,{pointers:i[0],changedPointers:i[1],pointerType:m.Touch,srcEvent:e})}getTouches(e,n){const i=Array.from(e.touches);if(n&(r.Start|r.Move)&&i.length===1){const h=i[0];return this.targetIds[h.identifier]=!0,[i,i]}const s=i.filter(h=>I(h.target,this.target));if(n===r.Start)for(let h=0;h<s.length;h++)this.targetIds[s[h].identifier]=!0;const o=Array.from(e.changedTouches),c=[];for(let h=0;h<s.length;h++)this.targetIds[s[h].identifier]&&c.push(o[h]),(n===r.End||n===r.Cancel)&&delete this.targetIds[o[h].identifier];return c.length?[k(s.concat(c),"identifier",!0),c]:null}}const ze={pointerdown:r.Start,pointermove:r.Move,pointerup:r.End,pointercancel:r.Cancel,pointerout:r.Cancel},Ae=["pointerdown"],Oe=["pointermove","pointerup","pointercancel","pointerout"];class we extends M{constructor(e,n){super(e,n),this.evEl=Ae,this.evWin=Oe,this._store=[],this.init()}handler(e){const n=ze[e.type],i=e.pointerType===m.Touch;let s=this._store.findIndex(c=>c.pointerId===e.pointerId),o=!1;n===r.Start&&(e.button===0||i)?s===-1&&(this._store.push(e),s=this._store.length-1):(n===r.End||n===r.Cancel)&&(o=!0),s!==-1&&(this._store[s]=e,this.callback(this.manager,n,{pointers:this._store,changedPointers:[e],pointerType:e.pointerType,srcEvent:e}),o&&this._store.splice(s,1))}}const De=2500,O=25;class Ne extends M{constructor(e,n){super(e,n);const i=V(this.handler,this);this._mouse=new $(e,i),this._touch=new K(e,i),this._primaryTouch=null,this._lastTouches=[]}handler(e,n,i){const s=i.pointerType===m.Touch,o=i.pointerType===m.Mouse;if(s)this._recordTouches(n,i);else if(o&&this._isSyntheticEvent(i))return}destroy(){this._mouse.destroy(),this._touch.destroy()}_recordTouches(e,n){e===r.Start?(this._primaryTouch=n.changedPointers[0].identifier,this._setLastTouch(n)):(e===r.End||e===r.Cancel)&&this._setLastTouch(n)}_setLastTouch(e){const n=e.changedPointers[0];if(n.identifier===this._primaryTouch){const i={x:n.clientX,y:n.clientY};this._lastTouches.push(i);const s=setTimeout(()=>{const o=this._lastTouches.indexOf(i);o>-1&&this._lastTouches.splice(o,1),clearTimeout(s)},De)}}_isSyntheticEvent(e){const n=e.srcEvent,i=n.clientX,s=n.clientY;for(let o=0;o<this._lastTouches.length;o++){const c=this._lastTouches[o],h=Math.abs(i-c.x),u=Math.abs(s-c.y);if(h<=O&&u<=O)return!0}return!1}}class p{static getAngle(e,n){return Math.atan2(n.y-e.y,n.x-e.x)*180/Math.PI}static getDistance(e,n){const i=n.x-e.x,s=n.y-e.y;return Math.sqrt(i*i+s*s)}static getDirection(e,n){return e===n?_.None:Math.abs(e)>=Math.abs(n)?e<0?_.Left:_.Right:n<0?_.Up:_.Down}static getCenter(e){const n=Math.round(e.reduce((s,o)=>s+o.x,0)/e.length),i=Math.round(e.reduce((s,o)=>s+o.y,0)/e.length);return{x:n,y:i}}static getRotation(e,n){return this.getAngle(n[1],n[0])+this.getAngle(e[1],e[0])}static getScale(e,n){return this.getDistance(n[0],n[1])/this.getDistance(e[0],e[1])}static getVelocity(e,n,i){return{x:n/e||0,y:i/e||0}}}const Fe=(t,e,n)=>{const i=n.pointers.length,s=n.changedPointers.length,o=e&r.Start&&i-s===0,c=e&(r.End|r.Cancel)&&i-s===0;n.isFirst=!!o,n.isFinal=!!c,o&&t.clearSession(),n.eventType=e,Le(t,n),t.options.preventDefault&&n.srcEvent.preventDefault(),t.options.stopPropagation&&n.srcEvent.stopPropagation(),t.options.stopImmediatePropagation&&n.srcEvent.stopImmediatePropagation(),t.emit(y.Secret,n),t.recognize(n),t.session.prevInput=n},Le=(t,e)=>{var n;const i=t.session,s=e.pointers.length;i.firstInput||(i.firstInput=w(e)),s>1&&!i.firstMultiple?i.firstMultiple=w(e):s===1&&(i.firstMultiple=null);const{firstInput:o,firstMultiple:c}=i,h=c?c.center:o.center,u=[];(n=e.pointers)==null||n.forEach(A=>{u.push({x:Math.round(A.clientX),y:Math.round(A.clientY)})});const g=e.center=p.getCenter(u);e.timestamp=Date.now(),e.deltaTime=e.timestamp-o.timestamp,e.angle=p.getAngle(h,g),e.distance=p.getDistance(h,g),Ye(i,e),e.offsetDirection=p.getDirection(e.deltaX,e.deltaY);const l=p.getVelocity(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x,e.overallVelocityY=l.y,e.overallVelocity=Math.abs(l.x)>Math.abs(l.y)?l.x:l.y,e.scale=c?p.getScale(c.pointers,u):1,e.rotation=c?p.getRotation(c.pointers,u):0,e.maxPointers=i.prevInput?Math.max(e.pointers.length,i.prevInput.maxPointers):e.pointers.length;const z=t.element;I(e.srcEvent.target,z)?e.target=e.srcEvent.target:e.target=z,Ue(i,e)},w=t=>{const e=[];for(let n=0;n<t.pointers.length;n++)e.push({x:Math.round(t.pointers[n].clientX),y:Math.round(t.pointers[n].clientY)});return{pointers:e,timestamp:Date.now(),center:p.getCenter(e),deltaX:t.deltaX||0,deltaY:t.deltaY||0}},Ye=(t,e)=>{const n=e.center;let i=t.offsetDelta||{x:0,y:0},s=t.prevDelta||{x:0,y:0};const o=t.prevInput||{center:n};(e.eventType===r.Start||e.eventType===r.End)&&(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)},Ue=(t,e)=>{const n=t.lastInterval||e,i=e.timestamp-n.timestamp;let s,o,c,h;if(e.eventType!==r.Cancel&&(i>F||n.velocity===void 0)){const u=e.deltaX-n.deltaX,g=e.deltaY-n.deltaY,l=p.getVelocity(i,u,g);o=l.x,c=l.y,s=Math.abs(l.x)>Math.abs(l.y)?l.x:l.y,h=p.getDirection(u,g),t.lastInterval=e}else o=n.velocityX,c=n.velocityY,s=n.overallVelocity,h=n.direction;e.velocityX=o,e.velocityY=c,e.velocity=s,e.direction=h},Xe=t=>{let e;return Y?e=we:U?e=K:b?e=Ne:e=$,new e(t,Fe)};class We{constructor(e,n){this._element=e,this._options={...W,...n},this._options.inputTarget=(n==null?void 0:n.inputTarget)??this._element,this._recognizers=[],this._input=Xe(this),this._touchAction=new Se(this,this._options.touchActions),this._session={},this.handlers={},this._oldCssProps={},this._toggleCssProps("add")}get element(){return this._element}get options(){return this._options}get recognizers(){return this._recognizers}get session(){return this._session}get touchAction(){return this._touchAction}stop(e){this._session.stopped=e?f.ForceStop:f.Stop}set(e){this._options={...this._options,...e}}get(e){return this._recognizers.find(n=>n.type===e)||null}add(e){e.manager=this,this._recognizers.push(e)}remove(e){const n=this._recognizers.findIndex(i=>i.type===e.type);n>-1&&this._recognizers.splice(n,1)}on(e,n){this.handlers[e]=n}off(e){e.forEach(n=>{delete this.handlers[n]})}destroy(){this._toggleCssProps("remove"),this._recognizers=[],this._input.destroy(),this._session={},this.handlers={}}recognize(e){if(this._session.stopped)return;this.touchAction.preventDefault(e);let{curRecognizer:n}=this._session;(!n||n&&n.state===a.Ended)&&(n=this._session.curRecognizer=null);for(let i=0;i<this._recognizers.length;i++){const s=this._recognizers[i];this._session.stopped!==f.ForceStop&&(!n||s===n||s.canRecognizeWith(n))?s.recognize(e):s.reset(),!n&&s.state&(a.Began|a.Changed|a.Ended)&&(n=this._session.curRecognizer=s)}}emit(e,n){const i=this.handlers[e];n.type=e,n.preventDefault=()=>{var s;(s=n.srcEvent)==null||s.preventDefault()},i&&i(n)}clearSession(){this._session={}}_toggleCssProps(e){!this._options.cssProps||!this._element.style||(T(this._options.cssProps,(n,i)=>{e==="add"?(this._oldCssProps[i]=this._element.style[i],this._element.style[i]=n):this._element.style[i]=this._oldCssProps[i]||""}),e!=="add"&&(this._oldCssProps={}))}}const S={Manager:We,Constants:oe,Types:re,Utils:Te,Recognizer:Me},He=Q({__name:"demo-1",setup(t){const e=ee(null);return document.oncontextmenu=()=>!1,te(()=>{const n=new S.Manager(e.value,{preventDefault:!0}),i=new S.Recognizer.PressRecognizer({threshold:20,time:1e3});n.add(i),n.on(S.Constants.RECOGNIZER_TYPE.Press,s=>{console.log(s.type,s),J.success("检测到长按手势触发了！")})}),(n,i)=>(ne(),ie("div",{ref_key:"detectRef",ref:e,class:"gesture-area"}," 手势触发区域 ",512))}});export{He as default};
