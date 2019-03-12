import React, { PureComponent } from 'react';
import { css, injectGlobal } from 'emotion';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Title } from './ui/Title';
import { Header } from './common/Header';
import { ProjectsList } from './projects/ProjectsList';

injectGlobal`
	body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-color: ${COLORS.GRAY.toString()};
    margin: 0;
    color: ${COLORS.BLACK.toString()};
    font-size: ${VARIABLES.FONT_SIZE_REGULAR}px;
  }
`;

interface IProps {}

interface IState {}

export class App extends PureComponent<IProps, IState> {
  render() {
    return (
      <main className={appCn}>
        <Section className={sectionCn}>
          <Header />

          <div className={contentCn}>
            <Title>Projects</Title>

            <ProjectsList />
          </div>
        </Section>
      </main>
    );
  }
}

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

const contentCn = css`
  padding: 30px;
`;
