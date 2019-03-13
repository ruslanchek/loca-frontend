import React, { PureComponent } from 'react';
import { css, injectGlobal } from 'emotion';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Title } from './ui/Title';
import { Header } from './common/Header';
import { ProjectsList } from './projects/ProjectsList';
import { Button, EButtonTheme } from './ui/Button';
import { Plus } from 'react-feather';

injectGlobal`
	body {
    font-family: ${VARIABLES.FONT_FAMILY};
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
            <div className={titleCn}>
              <Title>Projects</Title>
              <Button theme={EButtonTheme.Green}>
                New project
              </Button>
            </div>

            <ProjectsList />
          </div>
        </Section>
      </main>
    );
  }
}

const titleCn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const contentCn = css`
  padding: 30px;
`;
