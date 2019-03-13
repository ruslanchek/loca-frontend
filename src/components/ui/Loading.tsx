/** @jsx jsx */

import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import Color from 'color';
import { css, jsx, keyframes } from '@emotion/core';

interface IProps {
  size?: number;
  color?: Color;
}

export class Loading extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    size: 24,
    color: COLORS.BLACK,
  };

  render() {
    const { color, size } = this.props;
    const borderWidth = Math.round(size / 14);

    return (
      <div
        css={[
          spinnerCn,
          css`
            width: ${size}px;
            height: ${size}px;
            border: ${borderWidth}px solid ${color.alpha(0.25).toString()};
            border-top: ${borderWidth}px solid ${color.alpha(1).toString()};
            margin: ${borderWidth}px;
          `,
        ]}
      />
    );
  }
}

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const rootCn = css`
  position: relative;
`;

const spinnerCn = css`
  box-sizing: border-box;
  border-radius: 50%;
  animation: ${animation} 0.6s linear infinite;
`;
