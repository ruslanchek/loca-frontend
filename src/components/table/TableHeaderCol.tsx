/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';

interface IProps {
  width: string;
  accent?: boolean;
}

export class TableHeaderCol extends PureComponent<IProps> {
  render() {
    const { children, width, accent } = this.props;

    return (
      <div
        className={accent ? 'accent' : ''}
        css={[
          tableHeaderColStyles,
          css`
            width: ${width};
            min-width: ${width};
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

  &.accent {
    color: ${COLORS.BLACK.toString()};
  }
`;
