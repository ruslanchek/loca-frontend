/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

interface IProps {
  width: string;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

export class TableCol extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  };

  render() {
    const { children, width, alignItems, justifyContent } = this.props;

    return (
      <div
        css={[
          tableColStyles,
          css`
            width: ${width};
            min-width: ${width};
            align-items: ${alignItems};
            justify-content: ${justifyContent};
          `,
        ]}
      >
        {children}
      </div>
    );
  }
}

const tableColStyles = css`
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
