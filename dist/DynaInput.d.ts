import * as React from "react";
import { EColor, EStyle } from "dyna-ui-field-wrapper";
import "./style.less";
import "./color.less";
export { EColor, EStyle };
export interface IDynaInputProps {
    style?: EStyle;
    color?: EColor;
    name: string;
    label?: TContent;
    required?: TContent;
    value: string;
    validationMessage?: TContent;
    footer?: TContent;
    propsForInput?: any;
    onChange?: (name: string, value: string) => void;
}
export declare type TContent = string | JSX.Element;
export declare class DynaInput extends React.Component<IDynaInputProps> {
    static defaultProps: IDynaInputProps;
    private inputElement;
    private handleChange(value);
    private handleContainerClick();
    render(): JSX.Element;
}
