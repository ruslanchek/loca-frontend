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
  background-color: ${COLORS.GRAY_LIGHT.toString()};
  box-shadow: 0 3px 10px ${COLORS.GRAY_DARK.alpha(0.4).toString()};
`;
