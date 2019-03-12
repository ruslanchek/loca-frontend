import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

interface IProps {}

export class TableRow extends PureComponent<IProps> {
  render() {
    const { children } = this.props;

    return <div className={tableRowCn}>{children}</div>;
  }
}

const tableRowCn = css`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY.toString()};
  padding: 0 10px;
  box-sizing: border-box;
`;
