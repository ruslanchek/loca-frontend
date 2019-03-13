/** @jsx jsx */

import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

export class Subtitle extends PureComponent {
  render() {
    return <div css={subtitleStyles}>{this.props.children}</div>;
  }
}

const subtitleStyles = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  color: ${COLORS.DARK_GRAY.toString()};
`;
