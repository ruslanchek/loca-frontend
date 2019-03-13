/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import { VARIABLES } from '../../theme/variables';

export class TableSubtitle extends PureComponent {
  render() {
    const { children } = this.props;

    return <small css={smallCn}>{children}</small>;
  }
}

const smallCn = css`
  font-size: ${VARIABLES.FONT_SIZE_SMALL}px;
  color: ${COLORS.GRAY_DARK.toString()};
  display: block;
`;
