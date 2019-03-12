import React, { PureComponent } from 'react';
import { css, injectGlobal } from 'emotion';
import { COLORS } from '../theme/colors';
import { Section } from './ui/Section';
import { VARIABLES } from '../theme/variables';
import { Title } from './ui/Title';
import { Header } from './common/Header';
import { TableHeader } from './table/TableHeader';
import { TableHeaderCol } from './table/TableHeaderCol';
import { TableRow } from './table/TableRow';
import { TableCol } from './table/TableCol';
import { TableSubtitle } from './table/TableSubtitle';
import { TableTitle } from './table/TableTitle';
import { Avatar } from './ui/Avatar';
import { Globe } from 'react-feather';
import { Readyness } from './ui/Readyness';

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

            <div className={tableCn}>
              <TableHeader>
                <TableHeaderCol width="60px" />
                <TableHeaderCol width="calc(30% - 60px)">Title</TableHeaderCol>
                <TableHeaderCol width="15%">Last changes</TableHeaderCol>
                <TableHeaderCol width="15%">Progress</TableHeaderCol>
                <TableHeaderCol width="20%">Phrases</TableHeaderCol>
                <TableHeaderCol width="20%">Members</TableHeaderCol>
              </TableHeader>

              <TableRow>
                <TableCol
                  width="60px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar
                    size={40}
                    src="https://xsnapp.com/favicons/apple-touch-icon-120x120.png"
                  />
                </TableCol>
                <TableCol width="calc(30% - 60px)">
                  <TableTitle>Xsnapp.com APP</TableTitle>
                  <TableSubtitle className={typeCn}>
                    <Globe size={11} />
                    <span>Web application</span>
                  </TableSubtitle>
                </TableCol>
                <TableCol width="15%">
                  <TableTitle>10:40:27</TableTitle>
                  <TableSubtitle>Today</TableSubtitle>
                </TableCol>
                <TableCol width="15%">
                  <TableTitle className={readynessCn}>
                    <Readyness size={11} percent={45} />
                    <span>45%</span>
                  </TableTitle>
                  <TableSubtitle>27 languages</TableSubtitle>
                </TableCol>
                <TableCol width="20%">Phrases</TableCol>
                <TableCol width="20%">Phrases</TableCol>
              </TableRow>

              <TableRow>
                <TableCol width="40%">
                  <TableTitle>Title</TableTitle>
                  <TableSubtitle>#1090829</TableSubtitle>
                </TableCol>
                <TableCol width="20%">Date</TableCol>
                <TableCol width="20%">Languages</TableCol>
                <TableCol width="20%">Phrases</TableCol>
              </TableRow>
            </div>
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

const tableCn = css`
  margin-top: 20px;
`;

const typeCn = css`
  display: flex;
  align-items: center;

  > span {
    white-space: nowrap;
    margin-left: 0.5ex;
  }
`;

const readynessCn = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > span {
    margin-left: 1ex;
  }
`;
