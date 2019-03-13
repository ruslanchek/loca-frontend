/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { VARIABLES } from '../../theme/variables';

export class TableTitle extends PureComponent {
  render() {
    const { children } = this.props;

    return <div css={tableTitleStyles}>{children}</div>;
  }
}

const tableTitleStyles = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR.toString()}px;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;
