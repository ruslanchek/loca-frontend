import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
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
  EProjectStatus,
  EProjectType,
  GetPhrasesInput,
  GetProjectsInput,
  Phrase,
  PhraseOrderBy,
  Project,
  ProjectOrderBy,
} from '../../generated/graphql.schema';
import { apolloClient } from '../../api/network.layer';
import { ApolloProvider, Query } from 'react-apollo';

interface IProps {}

interface IProject {
  id: number;
  avatar: string;
  title: string;
  type: EProjectType;
  status: EProjectStatus;
  lastEdit: Date;
  readyness: number;
  basePhrases: number;
  baseWords: number;
  issues: number;
}

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

export class ProjectsList extends PureComponent<IProps> {
  render() {
    const {} = this.props;

    return (
      <div className={tableCn}>
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
              take: 10,
              orderBy: ProjectOrderBy.id,
              orderDirection: CommonOrderDirection.DESC,
            }}
          >
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return 'Loading...';
              }

              if (error) {
                return `Error! ${error.message}`;
              }

              return (
                <>
                  {data.getProjects.map(project => (
                    <TableRow className={rowCn} key={project.id.toString()}>
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
                        <TableTitle className={readynessCn}>
                          <i>
                            <Readyness size={11} percent={project.readyness} />
                          </i>
                          <span>{project.readyness}%</span>
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
                        <span className={cx(actionArrow, 'action-arrow')}>
                          <ChevronRight />
                        </span>
                      </TableCol>
                    </TableRow>
                  ))}
                </>
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

const readynessCn = css`
  display: flex;
  align-items: center;

  > i {
    margin-right: 1ex;
    display: flex;
    align-items: center;
  }
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
