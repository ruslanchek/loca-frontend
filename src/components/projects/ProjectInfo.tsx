/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { ApolloProvider, Query } from 'react-apollo';
import { apolloClient } from '../../api/network.layer';
import { Project } from '../../generated/graphql.schema';
import { gql } from 'apollo-boost';
import { Loading } from '../ui/Loading';
import { Breadcrumbs, IBreadcrumb } from '../common/Breadcrumbs';
import { PATHS } from '../../paths';
import { Title } from '../ui/Title';
import { AvatarProject } from '../ui/AvatarProject';
import { NotFound } from '../common/NotFound';
import { ProjectType } from '../ui/ProjectType';
import { Button } from '../ui/Button';

interface IProps {
  id: number;
}

const BREADCRUMBS: IBreadcrumb[] = [
  {
    title: 'Projects',
    url: PATHS.PROJECTS,
  },

  {
    title: 'Edit project',
  },
];

const QUERY_GET_PROJECT = gql`
  query($id: ID!) {
    getProject(id: $id) {
      id
      title
      avatar
      type
    }
  }
`;

export class ProjectInfo extends PureComponent<IProps> {
  render() {
    const { id } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Query<{ getProject: Project }, { id: number }>
          query={QUERY_GET_PROJECT}
          variables={{
            id,
          }}
        >
          {result => {
            if (result.loading) {
              return (
                <div css={loadingStyles}>
                  <Loading size={40} />
                </div>
              );
            }

            if (result.error) {
              return null;
            }

            if (!result.data.getProject) {
              return (
                <NotFound
                  title="Project not found"
                  buttonText="Go back to all projects"
                  buttonUrl={PATHS.PROJECTS}
                />
              );
            }

            return (
              <div>
                <div css={headingStyles}>
                  <Breadcrumbs breadcrumbs={BREADCRUMBS} />

                  <div css={titleStyles}>
                    <div css={avatarStyles}>
                      <AvatarProject
                        size={40}
                        src={result.data.getProject.avatar}
                      />
                    </div>

                    <Title>
                      {result.data.getProject.title}
                      <div css={projectTypeStyles}>
                        <ProjectType type={result.data.getProject.type} />
                      </div>
                    </Title>
                  </div>
                </div>

                {JSON.stringify(result.data.getProject)}
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

const headingStyles = css`
  margin-bottom: 20px;
`;

const avatarStyles = css`
  margin-right: 15px;
`;

const titleStyles = css`
  display: flex;
  align-items: center;
`;

const loadingStyles = css`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const projectTypeStyles = css`
  margin-top: 3px;
`;
