/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import { VARIABLES } from '../../theme/variables';
import { Check } from 'react-feather';

interface IProps {
  title: string;
  subtitle: string;
}

interface IState {
  checked: boolean;
}

const ICON_SIZE = 21;

export class SelectCard extends PureComponent<IProps, IState> {
  public state: IState = {
    checked: false,
  };

  public static defaultProps: Partial<IProps> = {
    title: null,
    subtitle: null,
  };

  private handleClick = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { title, subtitle } = this.props;
    const { checked } = this.state;

    return (
      <div
        className={checked ? 'checked' : ''}
        css={[cardStyles]}
        onClick={this.handleClick}
      >
        <span className="title">
          <span className="text">{title}</span>
          <i className="icon">
            <i>
              <Check size={16} color={COLORS.BLUE.toString()} />
            </i>
          </i>
        </span>

        <span className="subtitle">{subtitle}</span>
      </div>
    );
  }
}

const cardStyles = css`
  border-radius: 4px;
  padding: 10px;
  font-size: ${VARIABLES.FONT_SIZE_SMALL}px;
  cursor: pointer;
  border: 1px solid ${COLORS.GRAY.toString()};
  transition: border-color 0.2s;
  user-select: none;

  .title {
    display: flex;
    white-space: nowrap;

    .text {
      flex-grow: 1;
      color: ${COLORS.DARK_GRAY.toString()};
    }

    .icon {
      border-radius: 50%;
      width: ${ICON_SIZE}px;
      height: ${ICON_SIZE}px;
      min-width: ${ICON_SIZE}px;
      margin-left: 30px;
      transition: background-color 0.2s, border-color 0.2s;
      border: 1px solid ${COLORS.GRAY.toString()};

      > i {
        width: ${ICON_SIZE}px;
        height: ${ICON_SIZE}px;
        min-width: ${ICON_SIZE}px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: transform 0.2s;
      }
    }
  }

  .subtitle {
    font-weight: 600;
    font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
    color: ${COLORS.DARK_GRAY.toString()};
    transition: color 0.2s;
  }

  &:hover {
    border-color: ${COLORS.GRAY_DARK.toString()};
  }

  &.checked {
    .icon {
      background-color: ${COLORS.BLUE.alpha(0.1).toString()};
      border-color: ${COLORS.BLUE.alpha(0.25).toString()};

      > i {
        transform: scale(0.9999);
      }
    }

    .subtitle {
      color: ${COLORS.BLACK.toString()};
    }
  }
`;
