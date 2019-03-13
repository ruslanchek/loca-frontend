/** @jsx jsx */

import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

interface IProps {
  className?: string;
}

export class Fade extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, children } = this.props;
    return <span css={[subtitleCn, className]}>{children}</span>;
  }
}

const subtitleCn = css`
  color: ${COLORS.GRAY_DARK.toString()};
  font-weight: 400;
`;
