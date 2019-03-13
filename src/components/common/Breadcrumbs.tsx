/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../theme/colors';
import { VARIABLES } from '../../theme/variables';

export interface IBreadcrumb {
  title: string;
  url?: string;
}

interface IProps {
  breadcrumbs: IBreadcrumb[];
}

export class Breadcrumbs extends PureComponent<IProps> {
  render() {
    const { breadcrumbs } = this.props;

    return (
      <div css={breadcrumbsStyles}>
        {breadcrumbs.map((breadcrumb, i) => (
          <React.Fragment key={i}>
            {i < breadcrumbs.length - 1 && breadcrumb.url ? (
              <React.Fragment>
                <NavLink to={breadcrumb.url} css={linkStyles}>
                  {breadcrumb.title}
                </NavLink>
                <span css={delimiterStyles}>{'/'}</span>
              </React.Fragment>
            ) : (
              <span>{breadcrumb.title}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const breadcrumbsStyles = css`
  display: flex;
  font-size: ${VARIABLES.FONT_SIZE_SMALL}px;
  margin-bottom: 10px;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${COLORS.GRAY_DARK.toString()};

  &:hover {
    color: ${COLORS.BLACK.toString()};
  }
`;

const delimiterStyles = css`
  color: ${COLORS.DARK_GRAY.toString()};
  margin: 0 1ex;
`;
