/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';
import { ProjectInfo } from '../projects/ProjectInfo';

export class ProjectPage extends PureComponent<
  RouteComponentProps<{ id: string }>
> {
  render() {
    const { match } = this.props;

    return (
      <div css={contentStyles}>
        <ProjectInfo id={match.params.id} />
      </div>
    );
  }
}

const contentStyles = css`
  padding: 30px;
`;
