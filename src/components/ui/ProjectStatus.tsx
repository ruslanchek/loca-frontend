/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import { EProjectStatus } from '../../generated/graphql.schema';

interface IProps {
  status: EProjectStatus;
}

export class ProjectStatus extends PureComponent<IProps> {
  render() {
    const { status } = this.props;

    return <div css={[statusStyles, statuses[status]]}>{this.text}</div>;
  }

  get text() {
    switch (this.props.status) {
      case EProjectStatus.TranslationInProgress: {
        return 'Translating';
      }

      case EProjectStatus.Archive: {
        return 'Archive';
      }

      case EProjectStatus.Ready: {
        return 'Ready';
      }
    }
  }
}

const statusStyles = css`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 20px;

  &:before {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, 1px);
  }

  &:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(5px, 6px);
  }
`;

const statuses = {
  [EProjectStatus.Ready]: css`
    ${statusStyles};

    &:after {
      background-color: ${COLORS.GREEN.toString()};
    }

    &:before {
      background-color: ${COLORS.GREEN.alpha(0.25).toString()};
    }
  `,

  [EProjectStatus.Archive]: css`
    ${statusStyles};

    &:after {
      background-color: ${COLORS.DARK_GRAY.toString()};
    }

    &:before {
      background-color: ${COLORS.DARK_GRAY.alpha(0.25).toString()};
    }
  `,

  [EProjectStatus.TranslationInProgress]: css`
    ${statusStyles};

    &:after {
      background-color: ${COLORS.YELLOW.toString()};
    }

    &:before {
      background-color: ${COLORS.YELLOW.alpha(0.25).toString()};
    }
  `,
};
