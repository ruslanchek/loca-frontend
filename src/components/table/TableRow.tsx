import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

interface IProps {
  className?: string;
}

export class TableRow extends PureComponent<IProps> {
  render() {
    const { children, className } = this.props;

    return <div className={cx(tableRowCn, className)}>{children}</div>;
  }
}

const tableRowCn = css`
  display: flex;
  border-bottom: 1px solid ${COLORS.GRAY.toString()};
  padding: 0 10px;
  box-sizing: border-box;
  transition: background-image 0.2s;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${COLORS.GRAY_LIGHT.alpha(0).toString()},
      ${COLORS.GRAY_LIGHT.alpha(1).toString()}
    );
  }
`;
