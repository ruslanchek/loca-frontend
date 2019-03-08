import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, cx } from 'emotion';

interface IProps {
  className?: string;
}

export class Subtitle extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx(subtitleCn, className)}>{children}</div>;
  }
}

const subtitleCn = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  color: ${COLORS.DARK_GRAY.toString()};
`;
