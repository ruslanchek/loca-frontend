import React, { Component } from 'react';
import { css, injectGlobal } from 'emotion';
import { COLORS } from '../theme/colors';

injectGlobal`
	body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-color: ${COLORS.GRAY.toString()};
    margin: 0;
  }
`;

interface IProps {}

interface IState {}

export class App extends Component<IProps, IState> {
  render() {
    return <div>
      xxx
    </div>;
  }
}
