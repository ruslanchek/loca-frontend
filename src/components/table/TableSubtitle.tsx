import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';
import {VARIABLES} from "../../theme/variables";

interface IProps {
  className?: string;
}

export class TableSubtitle extends PureComponent<IProps> {
  render() {
    const { className, children } = this.props;

    return <small className={cx(smallCn, className)}>{children}</small>;
  }
}

const smallCn = css`
  font-size: ${VARIABLES.FONT_SIZE_SMALL}px;
  color: ${COLORS.GRAY_DARK.toString()};
  display: block;
`;
