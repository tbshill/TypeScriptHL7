export enum DepthEnum {
    SEGMENT,
    FEILD,
    COMPONENT,
    SUB_COMPONENT
}
export class Depth {

    static SEGMENT_DELIMETER = '\n';
    static FEILD_DELIMETER = '|';
    static COMPONENT_DELIMETER = '^';
    static SUB_COMPONENT_DELIMETER = '&';
    static REPEAT_DELIMETER = '~'

    constructor(private depth: DepthEnum) { }

    getDelimeter(): string {
        switch (this.depth) {
            case DepthEnum.SEGMENT:
                return Depth.SEGMENT_DELIMETER;
            case DepthEnum.FEILD:
                return Depth.FEILD_DELIMETER;
            case DepthEnum.COMPONENT:
                return Depth.COMPONENT_DELIMETER;
            case DepthEnum.SUB_COMPONENT:
                return Depth.SUB_COMPONENT_DELIMETER
        }
    };
    peekDown(): Depth {
        let peek_depth = this.depth + 1
        if (peek_depth > 4) {
            throw Error('Cannot go below subcomonent');
            peek_depth = 4;
        }
        return new Depth(peek_depth);
    }
    peekUp(): Depth {
        let peek_depth = this.depth - 1
        if (peek_depth < 0) {
            throw Error('Cannot have a negative Depth');
            peek_depth = 0;
        }
        return new Depth(peek_depth);
    }

}