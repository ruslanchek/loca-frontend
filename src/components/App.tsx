import React, { ComponentClass, PureComponent } from 'react';
import { css, Global } from '@emotion/core';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Header } from './common/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../paths';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectPage } from './pages/ProjectPage';

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
}

const ROUTES: IRoute[] = [
  {
    path: PATHS.PROJECTS,
    component: ProjectsPage,
  },

  {
    path: PATHS.PROJECT,
    component: ProjectPage,
  },
];

export class App extends PureComponent {
  render() {
    return (
      <main css={appCn}>
        <Section css={sectionCn}>
          <Header />

          <BrowserRouter>
            <Switch>
              {ROUTES.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}

              <Route path="*">
                <Redirect to={PATHS.NOT_FOUND} />
              </Route>
            </Switch>
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

    &.disable-hover {
      pointer-events: none;
    }
  }
`;

const sectionCn = css`
  .cards {
    margin-top: 15px;
    display: flex;

    .card {
      margin-right: 20px;
    }
  }
`;

const appCn = css`
  padding: 30px;
`;
