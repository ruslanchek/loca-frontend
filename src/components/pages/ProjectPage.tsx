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
      <div css={contentStyles}>
        <div css={titleStyles}>
          <Title>Projects</Title>
          <Button theme={EButtonTheme.Green}>New project</Button>
        </div>

        {JSON.stringify(match)}
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
