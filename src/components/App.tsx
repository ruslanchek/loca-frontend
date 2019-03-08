import React, { Component, PureComponent } from 'react';
import { css, injectGlobal } from 'emotion';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Title } from './ui/Title';
import { SelectCard } from './ui/SelectCard';
import {Subtitle} from "./ui/Subtitle";

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
          <Title>
            Hello Jane,
            <br />
            check the package and fill the form
          </Title>

          <Subtitle>
            Check the package and fill the form
          </Subtitle>

          <div className="cards">
            <SelectCard
              className="card"
              title="Selected"
              subtitle="New item"
            />
            <SelectCard
              className="card"
              title="Selected"
              subtitle="New item"
            />
            <SelectCard
              className="card"
              title="Selected"
              subtitle="New item"
            />
          </div>
        </Section>
      </main>
    );
  }
}

const sectionCn = css`
  padding: 30px;
  
  .cards {
    margin-top: 30px;
    display: flex;
    
    .card {
      margin-right: 20px;
    }
  }
`;

const appCn = css`
  padding: 30px;
`;
