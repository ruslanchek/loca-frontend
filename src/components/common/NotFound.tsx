/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Slash } from 'react-feather';
import { COLORS } from '../../theme/colors';
import { Button, EButtonTheme } from '../ui/Button';
import { RouteComponentProps, withRouter } from 'react-router';
import { Title } from '../ui/Title';

interface IProps extends RouteComponentProps {
  title: string;
  buttonUrl: string;
  buttonText: string;
}

class NotFoundClass extends PureComponent<IProps> {
  render() {
    const { title, buttonText, buttonUrl, history } = this.props;

    return (
      <div css={rootStyles}>
        <div css={iconStyles}>
        <Slash size={80} color={COLORS.DARK_GRAY.toString()} />
        </div>

        <Title>{title}</Title>

        <div css={textStyles}>
          You seem to have clicked on a broken link
          <br />
          or entered a URL that doesn't exist in the app
        </div>

        <Button
          theme={EButtonTheme.Blue}
          onClick={() => {
            history.push(buttonUrl);
          }}
        >
          {buttonText}
        </Button>
      </div>
    );
  }
}

export const NotFound = withRouter(NotFoundClass);

const iconStyles = css`
  margin-bottom: 10px;
`;

const rootStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const textStyles = css`
  margin: 0.5em 0 2em;
  text-align: center;
  color: ${COLORS.GRAY_DARK.toString()};
`;
