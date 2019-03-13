/** @jsx jsx */

import React, { PureComponent } from 'react';
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
import { gql } from 'apollo-boost';
import {
  CommonOrderDirection,
  GetProjectsInput,
  Project,
  ProjectOrderBy,
} from '../../generated/graphql.schema';
import { apolloClient } from '../../api/network.layer';
import { ApolloProvider, Query } from 'react-apollo';
import { RouteComponentProps, withRouter } from 'react-router';
import { PATHS } from '../../paths';
import { Loading } from '../ui/Loading';

interface IProps extends RouteComponentProps {}

const QUERY_GET_PROJECTS = gql`
  query(
    $skip: Int!
    $take: Int!
    $orderBy: ProjectOrderBy!
    $orderDirection: CommonOrderDirection!
  ) {
    getProjects(
      getProjectsInput: {
        skip: $skip
        take: $take
        orderBy: $orderBy
        orderDirection: $orderDirection
      }
    ) {
      id
      lastEdit
      status
      type
      issues
      readyness
      baseWords
      basePhrases
      description
      title
    }
  }
`;

const TABLE_SIZE = [
  '60px',
  'calc(36% - 100px)',
  '16%',
  '16%',
  '16%',
  '16%',
  '40px',
];

class ProjectsListClass extends PureComponent<IProps> {
  render() {
    const { history } = this.props;

    return (
      <div css={tableCn}>
        <TableHeader>
          <TableHeaderCol width={TABLE_SIZE[0]} />
          <TableHeaderCol width={TABLE_SIZE[1]}>Title</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[2]}>Status</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[3]}>Last changes</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[4]}>Progress</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[5]}>Weight</TableHeaderCol>
          <TableHeaderCol width={TABLE_SIZE[6]} />
        </TableHeader>

        <ApolloProvider client={apolloClient}>
          <Query<{ getProjects: Project[] }, GetProjectsInput>
            query={QUERY_GET_PROJECTS}
            variables={{
              skip: 0,
              take: 5,
              orderBy: ProjectOrderBy.id,
              orderDirection: CommonOrderDirection.DESC,
            }}
          >
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return (
                  <div css={loadingCn}>
                    <Loading size={40} />
                  </div>
                );
              }

              if (error) {
                return `Error! ${error.message}`;
              }

              return (
                <React.Fragment>
                  {data.getProjects.map(project => (
                    <TableRow
                      css={rowCn}
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
                        <AvatarProject size={40} src={null} />
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
                        <span css={[actionArrow, 'action-arrow']}>
                          <ChevronRight />
                        </span>
                      </TableCol>
                    </TableRow>
                  ))}
                </React.Fragment>
              );
            }}
          </Query>
        </ApolloProvider>
      </div>
    );
  }
}

const tableCn = css`
  margin-top: 20px;
`;

const actionArrow = css`
  position: relative;
  top: -2px;
  color: ${COLORS.GRAY_DARK.toString()};
`;

const rowCn = css`
  &:hover {
    .action-arrow {
      color: ${COLORS.BLACK.toString()};
    }
  }
`;

const loadingCn = css`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectsList = withRouter(ProjectsListClass);
