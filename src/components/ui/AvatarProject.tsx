import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import { css, cx } from 'emotion';

interface IProps {
  src: string;
  size?: number;
  className?: string;
}

export class AvatarProject extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    size: 35,
    className: null,
  };

  render() {
    const { className, size, src } = this.props;
    return (
      <div
        className={cx(subtitleCn, className)}
        style={{
          width: `${size}px`,
          minWidth: `${size}px`,
          height: `${size}px`,
        }}
      >
        <img width={size} height={size} className={imgCn} src={src}/>
      </div>
    );
  }
}

const subtitleCn = css`
  background-color: ${COLORS.BLUE.alpha(0.1).toString()};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const imgCn = css`
  border-radius: 50%;
`;