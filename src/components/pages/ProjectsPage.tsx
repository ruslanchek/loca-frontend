/** @jsx jsx */

import React, { PureComponent } from 'react';
import { Title } from '../ui/Title';
import { Button, EButtonTheme } from '../ui/Button';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';
import { ProjectsList } from '../projects/ProjectsList';

export class ProjectsPage extends PureComponent<RouteComponentProps> {
  render() {
    return (
      <div css={contentCn}>
        <div css={titleCn}>
          <Title>Projects</Title>
          <Button theme={EButtonTheme.Green}>New project</Button>
        </div>

        <ProjectsList />
      </div>
    );
  }
}

const titleCn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const contentCn = css`
  padding: 30px;
`;
