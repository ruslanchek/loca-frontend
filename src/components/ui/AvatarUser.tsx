/** @jsx jsx */

import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';
import { User } from 'react-feather';

interface IProps {
  src: string;
  size?: number;
  className?: string;
}

export class AvatarUser extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    size: 35,
    className: null,
  };

  render() {
    const { size, src } = this.props;
    return (
      <div
        css={[
          subtitleStyles,
          css`
            width: ${size}px;
            min-width: ${size}px;
            height: ${size}px;
          `,
        ]}
      >
        {src ? (
          <img width={size} height={size} css={imgStyles} src={src} />
        ) : (
          <User size={16} />
        )}
      </div>
    );
  }
}

const subtitleStyles = css`
  background-color: ${COLORS.BLUE.alpha(0.1).toString()};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const imgStyles = css`
  border-radius: 50%;
`;
