/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { COLORS } from '../../theme/colors';
import PieChart from 'react-minimal-pie-chart';
import Color from 'color';
import { Check } from 'react-feather';

interface IProps {
  size: number;
  percent: number;
}

export class Readyness extends PureComponent<IProps> {
  render() {
    const { size, percent } = this.props;

    return (
      <div
        css={[
          root,
          css`
            width: ${size}px;
          `,
        ]}
      >
        <div
          css={[
            containerStyles,
            css`
              width: ${size}px;
              min-width: ${size}px;
              height: ${size}px;
              border-color: ${this.color.toString()};
              background-color: ${this.color.alpha(0.15).toString()};
            `,
          ]}
        >
          {percent > 0 && (
            <React.Fragment>
              {percent >= 100 && (
                <div
                  css={[
                    checkStyles,
                    css`
                      width: ${size}px;
                      min-width: ${size}px;
                      height: ${size}px;
                    `,
                  ]}
                >
                  <Check color={COLORS.WHITE.toString()} size={9} />
                </div>
              )}

              <PieChart
                animate={false}
                startAngle={-90}
                lineWidth={100}
                radius={54}
                data={[
                  { title: '', value: percent, color: this.color.toString() },
                  { title: '', value: 100 - percent, color: 'transparent' },
                ]}
              />
            </React.Fragment>
          )}
        </div>
        {percent}%
      </div>
    );
  }

  get color(): Color {
    const { percent } = this.props;

    switch (true) {
      case percent > 0 && percent < 25: {
        return COLORS.RED;
      }

      case percent >= 25 && percent < 75: {
        return COLORS.YELLOW;
      }

      case percent >= 75 && percent < 100: {
        return COLORS.GREEN;
      }

      case percent >= 100: {
        return COLORS.BLUE;
      }

      default: {
        return COLORS.GRAY_DARK;
      }
    }
  }
}

const root = css`
  padding-left: 20px;
  position: relative;
`;

const containerStyles = css`
  border-radius: 50%;
  border: 1px solid;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0, 1px);
`;

const checkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0, 1px);
`;
