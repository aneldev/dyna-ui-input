import * as React from "react";
import "./style.less";
import "./color.less";
export interface IDynaInputProps {
    style?: EStyle;
    color?: EColor;
    name: string;
    label?: TContent;
    value: string;
    validationMessage?: TContent;
    footer?: TContent;
    propsForInput?: any;
    onChange?: (name: string, value: string) => void;
}
export declare type TContent = string | JSX.Element;
export declare enum EStyle {
    INLINE_ROUNDED = "INLINE_ROUNDED",
}
export declare enum EColor {
    WHITE_BLACK = "WHITE_BLACK",
    WHITE_RED = "WHITE_RED",
    BLACK_WHITE = "BLACK_WHITE",
    ORANGE_WHITE = "ORANGE_WHITE",
    TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
}
export declare class DynaInput extends React.Component<IDynaInputProps> {
    static defaultProps: IDynaInputProps;
    private internalId;
    private inputElement;
    private handleChange(value);
    private handleContainerClick();
    render(): JSX.Element;
}
