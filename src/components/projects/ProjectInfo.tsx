/** @jsx jsx */

import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import { apolloClient } from '../../api/network.layer';
import {
  CommonOrderDirection,
  GetPhrasesInput,
  Phrase,
  PhraseOrderBy,
  Project,
} from '../../generated/graphql.schema';
import { gql } from 'apollo-boost';
import { Loading } from '../ui/Loading';
import { Breadcrumbs, IBreadcrumb } from '../common/Breadcrumbs';
import { PATHS } from '../../paths';
import { Title } from '../ui/Title';
import { AvatarProject } from '../ui/AvatarProject';
import { NotFound } from '../common/NotFound';
import { ProjectType } from '../ui/ProjectType';
import { managers } from '../../managers';

interface IProps {
  id: string;
}

interface IState {
  project: Project;
  phrases: Phrase[];
  loading: boolean;
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

export class ProjectInfo extends Component<IProps, IState> {
  state: IState = {
    project: null,
    phrases: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    try {
      const project = await managers.projects.getProject(this.props.id);
      const phrases = await managers.phrases.getPhrases(this.props.id);

      this.setState({
        loading: false,
        project,
        phrases,
      });
    } catch (error) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { loading, phrases, project } = this.state;

    if (loading) {
      return (
        <div css={loadingStyles}>
          <Loading size={40} />
        </div>
      );
    }

    if (!project) {
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
              <AvatarProject size={40} src={project.avatar} />
            </div>

            <Title>
              {project.title}
              <div css={projectTypeStyles}>
                <ProjectType type={project.type} />
              </div>
            </Title>
          </div>
        </div>

        {JSON.stringify(phrases)}
      </div>
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
