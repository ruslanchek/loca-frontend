/** @jsx jsx */

import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

interface IProps {
  className?: string;
}

export class Title extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, children } = this.props;
    return <div css={[titleCn, className]}>{children}</div>;
  }
}

const titleCn = css`
  font-weight: 600;
  font-size: ${VARIABLES.FONT_SIZE_BIG}px;
  color: ${COLORS.BLACK.toString()};
`;
