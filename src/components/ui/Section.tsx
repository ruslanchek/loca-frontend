/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';

export class Section extends PureComponent {
  render() {
    return <section css={sectionStyles}>{this.props.children}</section>;
  }
}

const sectionStyles = css`
  border-radius: 6px;
  background-color: ${COLORS.WHITE.toString()};
`;
