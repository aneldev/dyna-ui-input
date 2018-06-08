import * as React from "react";
import { EMode, EColor, EStyle, ESize } from "dyna-ui-field-wrapper";
import "./style.less";
import "./color.less";
export { EColor, EStyle };
export interface IDynaInputProps {
    style?: EStyle;
    mode?: EMode;
    color?: EColor;
    size?: ESize;
    name: string;
    label?: TContent;
    required?: TContent;
    value: string;
    validationMessage?: TContent;
    footer?: TContent;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onChange?: (name: string, value: string) => void;
}
export declare type TContent = string | JSX.Element;
export declare class DynaInput extends React.Component<IDynaInputProps> {
    static defaultProps: IDynaInputProps;
    private handleChange;
    render(): JSX.Element;
}
