/** @jsx jsx */

import React, { PureComponent } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import { User, Bell } from 'react-feather';
import { AvatarUser } from '../ui/AvatarUser';

export class Header extends PureComponent {
  render() {
    return (
      <header css={headerCn}>
        <Logo css={logo} />

        <nav css={nav}>
          <a className="active" href="#">
            Projects
          </a>
          <a href="#">Languages</a>
          <a href="#">Settings</a>
          <a href="#">Plan</a>
        </nav>

        <div css={user}>
          <a href="#" className="link">
            <i />
            <Bell size={16} />
          </a>
          <a href="#" className="link">
            <AvatarUser src="http://i.pravatar.cc/150?img=65" size={28} />
          </a>
        </div>
      </header>
    );
  }
}

const headerCn = css`
  border-bottom: 1px solid ${COLORS.GRAY.toString()};
  padding: 0 30px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const logo = css`
  display: block;
  width: 76px;
  height: 18px;
`;

const nav = css`
  margin-left: 30px;
  flex-grow: 1;

  > a {
    margin-right: 25px;
    text-decoration: none;
    color: ${COLORS.GRAY_DARK.toString()};

    &:hover {
      color: ${COLORS.BLACK.toString()};
    }

    &.active {
      color: ${COLORS.BLUE.toString()};
    }
  }
`;

const user = css`
  display: flex;

  .link {
    color: ${COLORS.GRAY_DARK.toString()};
    margin-left: 12px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 28px;
    height: 28px;

    > i {
      background-color: ${COLORS.RED.toString()};
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      right: 6px;
      top: 6px;
    }

    &:hover {
      color: ${COLORS.GRAY_DARK.darken(0.2).toString()};
    }
  }
`;
