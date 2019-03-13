/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';

interface IProps {
  width: string;
}

export class TableHeaderCol extends PureComponent<IProps> {
  render() {
    const { children, width } = this.props;

    return (
      <div
        css={[
          tableHeaderColStyles,
          css`
            width: ${width}px;
            min-width: ${width}px;
          `,
        ]}
      >
        {children}
      </div>
    );
  }
}

const tableHeaderColStyles = css`
  padding: 0 10px;
  box-sizing: border-box;
`;
