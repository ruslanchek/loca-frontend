/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';

interface IProps {
  onClick?: () => void;
}

export class TableRow extends PureComponent<IProps> {
  render() {
    const { children, onClick } = this.props;

    return (
      <div onClick={() => onClick()} css={tableRowStyles}>
        {children}
      </div>
    );
  }
}

const tableRowStyles = css`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY.toString()};
  padding: 0 10px;
  box-sizing: border-box;
  transition: background-image 0.2s;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${COLORS.GRAY_LIGHT.alpha(0).toString()},
      ${COLORS.GRAY_LIGHT.alpha(1).toString()}
    );

    .action-arrow {
      color: ${COLORS.BLACK.toString()};
    }
  }
`;
