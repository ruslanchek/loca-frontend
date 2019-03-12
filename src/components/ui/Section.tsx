import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

interface IProps {
  className?: string;
}

export class Section extends PureComponent<IProps> {
  render() {
    const { className, children } = this.props;

    return <section className={cx(sectionCn, className)}>{children}</section>;
  }
}

const sectionCn = css`
  border-radius: 6px;
  background-color: ${COLORS.WHITE.toString()};
`;
