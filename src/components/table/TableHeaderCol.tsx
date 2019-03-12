import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

interface IProps {
  width: string;
}

export class TableHeaderCol extends PureComponent<IProps> {
  render() {
    const { children, width } = this.props;

    return (
      <div style={{ width, minWidth: width }} className={tableHeaderColCn}>
        {children}
      </div>
    );
  }
}

const tableHeaderColCn = css`
  padding: 0 10px;
  box-sizing: border-box;
`;
