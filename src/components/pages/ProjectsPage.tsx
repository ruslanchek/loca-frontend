/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';
import { ProjectsList } from '../projects/ProjectsList';

export class ProjectsPage extends PureComponent<RouteComponentProps> {
  render() {
    return (
      <div css={contentStyles}>
        <ProjectsList />
      </div>
    );
  }
}

const contentStyles = css`
  padding: 30px;
`;
