/** @jsx jsx */

import React, { PureComponent } from 'react';
import { COLORS } from '../../theme/colors';
import { css, jsx } from '@emotion/core';
import { Folder } from 'react-feather';

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
          <Folder color={COLORS.BLUE.toString()} size={size / 2} />
        )}
      </div>
    );
  }
}

const subtitleStyles = css`
  background-color: ${COLORS.BLUE.alpha(0.1).toString()};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const imgStyles = css`
  border-radius: 8px;
`;
