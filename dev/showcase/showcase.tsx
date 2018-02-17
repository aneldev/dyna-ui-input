import * as React from 'react';
import {DynaInput, EColor, EStyle, IDynaInputProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";
import {EMode} from "dyna-ui-field-wrapper";

require('./showcase.less');

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>DynaInput</h3>
          <h4>plain react input</h4>
          <p>nothing more</p>
        </div>
      ),
    },
    {
      slug: 'sizes',
      faIconName: 'flask',
      title: 'rounded',
      center: true,
      component: (() => {

        interface IMyComponentProps {
          style?: EStyle;
          color?: EColor;
        }

        interface IMyComponentState {
          value: string;
        }

        class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
          constructor(props: IDynaInputProps) {
            super(props);
            this.state = {value: 'John Smith'};
          }

          private handleChange(name: string, value: string): void {
            this.setState({value});
          }

          public render(): JSX.Element {
            return (
              <DynaInput
                {...this.props}
                name="userName"
                label={<span>{faIcon('user')} User name</span>}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              >dyna button</DynaInput>
            )
          }

        }

        return <MyComponent/>;

      })(),
      wrapperStyle:{
        width: "100%",
        backgroundColor:"grey",
        padding: "20px",
      },
      props: [
        {
          slug: 'inline-rounded-white-black',
          title: 'Inline rounded - White/Black',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.WHITE_BLACK,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-white-black-no-label',
          title: 'Inline rounded - White/Black without label',
          props: {
            label: null,
            style: EStyle.INLINE_ROUNDED,
            color: EColor.WHITE_BLACK,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-white-black-validation-message',
          title: 'Inline rounded - White/Black and validation message',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.WHITE_BLACK,
            validationMessage: <span>{faIcon('exclamation-circle')} user name is required</span>,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-white-black-required',
          title: 'Inline rounded - White/Black and required test',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.WHITE_BLACK,
            required: <span>{faIcon('info-circle')} <i>required</i></span>,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-white-red',
          title: 'Inline rounded - White/Red',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.WHITE_RED,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-black-white',
          title: 'Inline rounded - Black/White',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.BLACK_WHITE,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-transparent-white',
          title: 'Inline rounded - Transparent/White',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.TRANSPARENT_WHITE,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-orange-white',
          title: 'Inline rounded - Orange/White',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.ORANGE_WHITE,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-orange-white-view-mode',
          title: 'Inline rounded - Orange/White - View mode',
          props: {
            mode: EMode.VIEW,
            style: EStyle.INLINE_ROUNDED,
            color: EColor.ORANGE_WHITE,
          } as IDynaInputProps
        },
        {
          slug: 'inline-rounded-black-white-custom-footer',
          title: 'Inline rounded - Black/White with custom footer',
          props: {
            style: EStyle.INLINE_ROUNDED,
            color: EColor.BLACK_WHITE,
            footer: (
              <div
                style={{border:"1px solid gray", position: "absolute", backgroundColor:"white", padding: "20px 4px"}}
              >custom footer, floated</div>
            )
          } as IDynaInputProps
        },
      ]
    },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-input">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-input">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
