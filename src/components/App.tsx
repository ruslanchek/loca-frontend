/** @jsx jsx */

import React, { ComponentClass, PureComponent } from 'react';
import { css, jsx, Global } from '@emotion/core';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Header } from './common/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../paths';
import { ProjectPage } from './pages/ProjectPage';
import { ProjectsPage } from './pages/ProjectsPage';

const body = document.body;
let timer = null;

window.addEventListener(
  'scroll',
  () => {
    clearTimeout(timer);

    if (!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover');
    }

    timer = setTimeout(() => {
      body.classList.remove('disable-hover');
    }, 300);
  },
  false,
);

interface IRoute {
  component: ComponentClass;
  path: string;
  exact: boolean;
}

const ROUTES: IRoute[] = [
  {
    path: PATHS.PROJECTS,
    component: ProjectsPage,
    exact: true,
  },

  {
    path: PATHS.PROJECT,
    component: ProjectPage,
    exact: true,
  },
];

export class App extends PureComponent {
  render() {
    return (
      <main css={appStyles}>
        <Section css={sectionStyles}>
          <BrowserRouter>
            <React.Fragment>
              <Header />

              <Switch>
                {ROUTES.map(route => (
                  <Route key={route.path} {...route} />
                ))}

                <Route path="*">
                  <Redirect to={PATHS.NOT_FOUND} />
                </Route>
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </Section>

        <Global styles={globalCss} />
      </main>
    );
  }
}

const globalCss = css`
  body {
    font-family: ${VARIABLES.FONT_FAMILY};
    background-color: ${COLORS.GRAY.toString()};
    margin: 0;
    color: ${COLORS.BLACK.toString()};
    font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
    line-height: 1.3;

    &.disable-hover {
      pointer-events: none;
    }
  }
`;

const sectionStyles = css`
  .cards {
    margin-top: 15px;
    display: flex;

    .card {
      margin-right: 20px;
    }
  }
`;

const appStyles = css`
  padding: 30px;
`;
