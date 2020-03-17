export declare enum DepthEnum {
    SEGMENT = 0,
    FEILD = 1,
    COMPONENT = 2,
    SUB_COMPONENT = 3
}
export declare class Depth {
    private depth;
    static SEGMENT_DELIMETER: string;
    static FEILD_DELIMETER: string;
    static COMPONENT_DELIMETER: string;
    static SUB_COMPONENT_DELIMETER: string;
    static REPEAT_DELIMETER: string;
    constructor(depth: DepthEnum);
    getDelimeter(): string;
    peekDown(): Depth;
    peekUp(): Depth;
}
