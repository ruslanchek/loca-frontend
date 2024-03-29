/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import {VARIABLES} from "../../theme/variables";

interface IProps {}

export class TableHeader extends PureComponent<IProps> {
  render() {
    const { children } = this.props;

    return <div css={tableHeaderStyles}>{children}</div>;
  }
}

const tableHeaderStyles = css`
  border-radius: 6px;
  background-color: ${COLORS.GRAY_LIGHT.toString()};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  font-size: ${VARIABLES.FONT_SIZE_SMALL}px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${COLORS.GRAY_DARK.toString()};
  padding: 0 10px;
  box-sizing: border-box;
`;
