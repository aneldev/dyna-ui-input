import * as React from "react";
import {DynaFieldWrapper, EColor, EStyle} from "dyna-ui-field-wrapper"

import "./style.less";
import "./color.less";

export {EColor, EStyle}

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

export type TContent = string | JSX.Element;

export class DynaInput extends React.Component<IDynaInputProps> {
  static defaultProps: IDynaInputProps = {
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    name: '',
    label: null,
    value: "",
    validationMessage: null,
    propsForInput: {},
    footer: null,
    onChange: (name: string, value: string) => undefined,
  };

  private inputElement: HTMLInputElement;

  private handleChange(value: string) {
    const {name, onChange} = this.props;
    onChange && onChange(name, value);
  }

  private handleContainerClick(): void {
    this.inputElement.focus();
  }

  public render(): JSX.Element {
    const {
      style, color,
      label, required, value,
      propsForInput,
      validationMessage, footer,
    } = this.props;

    const className: string = [
      'dyna-input',
      `dyna-input-style-${style}`,
      `dyna-input-color-${color}`,
    ].join(' ').trim();

    return (
      <div className={className} onClick={this.handleContainerClick.bind(this)}>

        <DynaFieldWrapper
          className="dyna-input"
          style={style}
          color={color}
          inputElementSelector=".dyna-ui-input-control-element"
          label={label}
          required={required}
          validationMessage={validationMessage}
          footer={footer}
        >
          <input
            className="dyna-ui-input-control-element"
            value={value}
            {...propsForInput}
            onChange={e => this.handleChange(e.target.value)}
          />
        </DynaFieldWrapper>
      </div>
    );
  }
}
