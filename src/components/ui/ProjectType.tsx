/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Globe, Book, Smartphone, Flag, Zap } from 'react-feather';
import { EProjectType } from '../../generated/graphql.schema';

interface IProps {
  type: EProjectType;
}

export class ProjectType extends PureComponent<IProps> {
  render() {
    return (
      <div css={[root]}>
        <i>{this.icon}</i>
        {this.title}
      </div>
    );
  }

  get icon() {
    switch (this.props.type) {
      case EProjectType.WebSite:
      case EProjectType.WebApplication: {
        return <Globe size={13} />;
      }

      case EProjectType.Android:
      case EProjectType.IOs: {
        return <Smartphone size={13} />;
      }

      case EProjectType.Promo: {
        return <Flag size={13} />;
      }

      case EProjectType.Api: {
        return <Zap size={13} />;
      }

      default: {
        return <Book size={13} />;
      }
    }
  }

  get title() {
    switch (this.props.type) {
      case EProjectType.WebApplication: {
        return 'Web application';
      }

      case EProjectType.IOs: {
        return 'iOS application';
      }

      case EProjectType.Android: {
        return 'Android application';
      }

      case EProjectType.DesktopApplication: {
        return 'Desktop application';
      }

      case EProjectType.Promo: {
        return 'Promo materials';
      }

      case EProjectType.WebSite: {
        return 'Website';
      }

      case EProjectType.Api: {
        return 'API';
      }

      case EProjectType.Other:
      default: {
        return 'Other';
      }
    }
  }
}

const root = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > i {
    margin-right: 0.5ex;
    display: flex;
    align-items: center;
  }
`;
