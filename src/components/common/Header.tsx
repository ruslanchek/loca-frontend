import React, { PureComponent } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

export class Header extends PureComponent {
  render() {
    return (
      <header className={headerCn}>
        <Logo className={logo} />

        <nav className={nav}>
          <a className="active" href="#">Projects</a>
          <a href="#">Languages</a>
          <a href="#">Settings</a>
          <a href="#">Plan</a>
        </nav>
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
  
  >a {
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