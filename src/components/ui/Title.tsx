/** @jsx jsx */

import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';

export class Title extends PureComponent {
  render() {
    return <div css={titleStyles}>{this.props.children}</div>;
  }
}

const titleStyles = css`
  font-weight: 600;
  font-size: ${VARIABLES.FONT_SIZE_BIG}px;
  color: ${COLORS.BLACK.toString()};
`;
