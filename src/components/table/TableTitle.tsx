import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';
import { VARIABLES } from '../../theme/variables';

interface IProps {
  className?: string;
}

export class TableTitle extends PureComponent<IProps> {
  render() {
    const { className, children } = this.props;

    return <div className={cx(tableTitleCn, className)}>{children}</div>;
  }
}

const tableTitleCn = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR.toString()}px;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;
