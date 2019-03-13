/** @jsx jsx */

import React, { PureComponent } from 'react';
import { Title } from '../ui/Title';
import { Button, EButtonTheme } from '../ui/Button';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';
import { ProjectsList } from '../projects/ProjectsList';

export class ProjectsPage extends PureComponent<RouteComponentProps> {
  render() {
    console.log(this.props.match)

    return (
      <div css={contentStyles}>
        <div css={titleStyles}>
          <Title>Projects</Title>
          <Button theme={EButtonTheme.Green}>New project</Button>
        </div>

        <ProjectsList />
      </div>
    );
  }
}

const titleStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const contentStyles = css`
  padding: 30px;
`;
