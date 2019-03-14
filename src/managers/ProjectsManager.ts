import {
  CommonOrderDirection,
  GetProjectsInput,
  Project,
  ProjectOrderBy,
} from '../generated/graphql.schema';
import { apolloClient } from '../api/network.layer';
import { gql } from 'apollo-boost';

export class ProjectsManager {
  public reset(): void {}

  public init(): Promise<any> {
    return Promise.resolve();
  }

  public async getProject(id: string): Promise<Project> {
    const result = await apolloClient.query<
      { getProject: Project },
      { id: string }
    >({
      query: gql`
        query($id: ID!) {
          getProject(id: $id) {
            id
            title
            avatar
            type
          }
        }
      `,
      variables: {
        id,
      },
    });

    return result.data.getProject;
  }

  public async getProjects(): Promise<Project[]> {
    const result = await apolloClient.query<
      { getProjects: Project[] },
      GetProjectsInput
    >({
      query: gql`
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
            avatar
          }
        }
      `,
      variables: {
        skip: 15,
        take: 5,
        orderBy: ProjectOrderBy.id,
        orderDirection: CommonOrderDirection.DESC,
      },
    });

    return result.data.getProjects;
  }
}
