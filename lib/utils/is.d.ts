export declare const isBoolean: (value: unknown) => value is boolean;
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare const isFunction: (value: unknown) => value is Function;
export declare const isObject: (value: unknown) => value is Record<string, unknown>;
export declare const isArray: <T>(value: unknown) => value is T[];
export declare const isElement: (value: unknown) => value is Element;
export declare const isHTMLElement: (value: unknown) => value is HTMLElement;
export declare const isTouchEvent: (value: unknown) => value is TouchEvent;
export declare const isMouseEvent: (value: unknown) => value is MouseEvent;
export declare const isPointerEvent: (value: unknown) => value is PointerEvent;
export declare const isTouchList: (value: unknown) => value is TouchList;
export declare const isDefined: <T>(value: T) => value is T;
export declare const isUndefined: <T>(value: T) => value is undefined;
export declare const isNull: <T>(value: T) => value is null;
export declare const isNil: <T>(value: T) => value is null;