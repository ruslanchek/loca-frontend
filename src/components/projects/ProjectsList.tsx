/** @jsx jsx */

import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import { TableHeader } from '../table/TableHeader';
import { TableHeaderCol } from '../table/TableHeaderCol';
import { TableRow } from '../table/TableRow';
import { TableCol } from '../table/TableCol';
import { AvatarProject } from '../ui/AvatarProject';
import { TableTitle } from '../table/TableTitle';
import { TableSubtitle } from '../table/TableSubtitle';
import { ChevronRight } from 'react-feather';
import { ProjectStatus } from '../ui/ProjectStatus';
import { Readyness } from '../ui/Readyness';
import { ProjectType } from '../ui/ProjectType';
import { TimeValue } from '../ui/TimeValue';
import { NumberValue } from '../ui/NumberValue';
import { TimeDistance } from '../ui/TimeDistance';
import { Project } from '../../generated/graphql.schema';
import { RouteComponentProps, withRouter } from 'react-router';
import { PATHS } from '../../paths';
import { Loading } from '../ui/Loading';
import { Title } from '../ui/Title';
import { Button, EButtonTheme } from '../ui/Button';
import { managers } from '../../managers';

interface IProps extends RouteComponentProps {}

interface IState {
  loading: boolean;
  projects: Project[];
}

const TABLE_SIZE = [
  '60px',
  'calc(36% - 100px)',
  '16%',
  '16%',
  '16%',
  '16%',
  '40px',
];

class ProjectsListClass extends Component<IProps> {
  public state = {
    loading: false,
    projects: [],
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    try {
      const projects = await managers.projects.getProjects();

      this.setState({
        loading: false,
        projects,
      });
    } catch (error) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { history } = this.props;
    const { loading, projects } = this.state;

    return (
      <div>
        <div css={titleStyles}>
          <Title>Projects</Title>
          <Button theme={EButtonTheme.Green}>New project</Button>
        </div>

        <TableHeader>
          <TableHeaderCol width={TABLE_SIZE[0]} />
          <TableHeaderCol accent width={TABLE_SIZE[1]}>
            Title
          </TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[2]}>Status</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[3]}>Last changes</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[4]}>Progress</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[5]}>Weight</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[6]} />
        </TableHeader>

        {loading && (
          <div css={loadingStyles}>
            <Loading size={40} />
          </div>
        )}

        {projects.length > 0 && (
          <React.Fragment>
            {projects.map(project => (
              <TableRow
                key={project.id.toString()}
                onClick={() => {
                  history.push(
                    PATHS.PROJECT.replace(':id', project.id.toString()),
                  );
                }}
              >
                <TableCol
                  width={TABLE_SIZE[0]}
                  alignItems="center"
                  justifyContent="center"
                >
                  <AvatarProject size={40} src={project.avatar} />
                </TableCol>

                <TableCol width={TABLE_SIZE[1]}>
                  <TableTitle>{project.title}</TableTitle>
                  <TableSubtitle>
                    <ProjectType type={project.type} />
                  </TableSubtitle>
                </TableCol>

                <TableCol width={TABLE_SIZE[2]}>
                  <TableTitle>
                    <ProjectStatus status={project.status} />
                  </TableTitle>
                  <TableSubtitle>Available to edit</TableSubtitle>
                </TableCol>

                <TableCol width={TABLE_SIZE[3]}>
                  <TableTitle>
                    <TimeValue value={new Date(project.lastEdit)} />
                  </TableTitle>
                  <TableSubtitle>
                    <TimeDistance value={new Date(project.lastEdit)} />
                  </TableSubtitle>
                </TableCol>

                <TableCol width={TABLE_SIZE[4]}>
                  <TableTitle>
                    <Readyness size={13} percent={project.readyness} />
                  </TableTitle>
                  <TableSubtitle>
                    <NumberValue value={project.issues} /> issues
                  </TableSubtitle>
                </TableCol>

                <TableCol width={TABLE_SIZE[5]}>
                  <TableTitle>
                    <NumberValue value={project.basePhrases} />
                  </TableTitle>
                  <TableSubtitle>
                    <NumberValue value={project.baseWords} /> words
                  </TableSubtitle>
                </TableCol>

                <TableCol
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  width={TABLE_SIZE[6]}
                >
                  <span css={actionArrow} className="action-arrow">
                    <ChevronRight />
                  </span>
                </TableCol>
              </TableRow>
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const titleStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const actionArrow = css`
  position: relative;
  top: -2px;
  color: ${COLORS.GRAY_DARK.toString()};
`;

const loadingStyles = css`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectsList = withRouter(ProjectsListClass);
