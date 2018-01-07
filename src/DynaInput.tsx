import * as React from "react";
import {guid} from "dyna-guid";

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

export type TContent = string | JSX.Element;

export enum EStyle {
  INLINE_ROUNDED = "INLINE_ROUNDED",
}

export enum EColor {
  WHITE_BLACK = "WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  BLACK_WHITE = "BLACK_WHITE",
  ORANGE_WHITE = "ORANGE_WHITE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
}

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

  private internalId: string = guid();
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
      label, value,
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
        {label ? <div className="dyna-ui-label">
          <label htmlFor={this.internalId}>{label}</label>
        </div> : null}
        <div className="dyna-ui-input-container">
          <div className="dyna-ui-input-control-container">
            <input
              ref={element => this.inputElement = element}
              value={value}
              {...propsForInput}
              id={this.internalId}
              onChange={e => this.handleChange(e.target.value)}
            />
          </div>
          <div className="dyna-input-validation-message">{validationMessage}</div>
          <div className="dyna-input-footer">{footer}</div>
        </div>
      </div>
    );
  }
}
