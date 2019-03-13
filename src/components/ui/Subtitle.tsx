/** @jsx jsx */

import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

interface IProps {
  className?: string;
}

export class Subtitle extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, children } = this.props;
    return <div css={[subtitleCn, className]}>{children}</div>;
  }
}

const subtitleCn = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  color: ${COLORS.DARK_GRAY.toString()};
`;
