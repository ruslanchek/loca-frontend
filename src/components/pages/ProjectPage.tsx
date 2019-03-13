/** @jsx jsx */

import React, { PureComponent } from 'react';
import { Title } from '../ui/Title';
import { Button, EButtonTheme } from '../ui/Button';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';

export class ProjectPage extends PureComponent<RouteComponentProps> {
  render() {
    const { match } = this.props;

    return (
      <div css={contentCn}>
        <div css={titleCn}>
          <Title>Projects</Title>
          <Button theme={EButtonTheme.Green}>New project</Button>
        </div>

        {JSON.stringify(match)}
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
