import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';

export enum EProjectStatus {
  Ready = 'ready',
  TranslationInProgress = 'translationInProgress',
  Archive = 'archive',
}

interface IProps {
  status: EProjectStatus;
  className?: string;
}

export class ProjectStatus extends PureComponent<IProps> {
  render() {
    const { className, status } = this.props;

    return (
      <div className={cx(statusCn, className, statuses[status])}>
        {this.text}
      </div>
    );
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

const statusCn = css`
  display: flex;
  align-items: center;
  position: relative;

  &:before {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    content: '';
    display: block;
    margin-right: 1ex;
  }

  &:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    left: 4px;
  }
`;

const statuses = {
  [EProjectStatus.Ready]: css`
    ${statusCn};

    &:after {
      background-color: ${COLORS.GREEN.toString()};
    }

    &:before {
      background-color: ${COLORS.GREEN.alpha(0.25).toString()};
    }
  `,

  [EProjectStatus.Archive]: css`
    ${statusCn};

    &:after {
      background-color: ${COLORS.DARK_GRAY.toString()};
    }

    &:before {
      background-color: ${COLORS.DARK_GRAY.alpha(0.25).toString()};
    }
  `,

  [EProjectStatus.TranslationInProgress]: css`
    ${statusCn};

    &:after {
      background-color: ${COLORS.YELLOW.toString()};
    }

    &:before {
      background-color: ${COLORS.YELLOW.alpha(0.25).toString()};
    }
  `,
};
