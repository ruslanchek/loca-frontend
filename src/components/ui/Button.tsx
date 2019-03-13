import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';
import { VARIABLES } from '../../theme/variables';

interface IProps {
  theme: EButtonTheme;
  type?: 'submit' | 'button';
  onClick: () => void;
  className?: string;
}

export enum EButtonTheme {
  Green,
}

export class Button extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    onClick: () => {},
    type: 'button',
    className: '',
  };

  render() {
    const { className, theme, type, onClick, children } = this.props;

    return (
      <button
        onClick={() => onClick()}
        type={type}
        className={cx(buttonCn, themes[theme], className)}
      >
        {children}
      </button>
    );
  }
}

const buttonCn = css`
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-family: ${VARIABLES.FONT_FAMILY};
  font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  padding: 10px 20px;
  color: ${COLORS.WHITE.toString()};
  outline: none;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const themes = {
  [EButtonTheme.Green]: css`
    background-color: ${COLORS.GREEN.toString()};

    &:hover {
      background-color: ${COLORS.GREEN.lighten(0.1).toString()};
    }

    &:active {
      transform: scale(0.97);
    }
  `,
};
