import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, cx } from 'emotion';

interface IProps {
  className?: string;
}

export class Fade extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, children } = this.props;
    return <span className={cx(subtitleCn, className)}>{children}</span>;
  }
}

const subtitleCn = css`
  color: ${COLORS.GRAY_DARK.toString()};
  font-weight: 400;
`;
