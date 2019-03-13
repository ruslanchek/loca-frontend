/** @jsx jsx */

import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

export class Fade extends PureComponent {
  render() {
    return <span css={subtitleStyles}>{this.props.children}</span>;
  }
}

const subtitleStyles = css`
  color: ${COLORS.GRAY_DARK.toString()};
  font-weight: 400;
`;
