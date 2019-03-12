import React, { PureComponent } from 'react';
import { VARIABLES } from '../../theme/variables';
import { COLORS } from '../../theme/colors';
import { css, cx } from 'emotion';
import { Icon } from 'react-feather';

interface IProps {
  icon: Icon;
  size: number;
  className?: string;
}

export class IconBadge extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    className: null,
  };

  render() {
    const { className, icon, size, children } = this.props;
    return (
      <div
        className={cx(subtitleCn, className)}
        style={{
          width: `${size}px`,
          minWidth: `${size}px`,
          height: `${size}px`,
        }}
      >
        {React.createElement(icon, {
          size: size / 2,
          color: COLORS.BLUE.toString(),
        })}
      </div>
    );
  }
}

const subtitleCn = css`
  font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  color: ${COLORS.DARK_GRAY.toString()};
  background-color: ${COLORS.BLUE.alpha(0.1).toString()};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
