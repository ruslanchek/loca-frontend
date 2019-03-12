import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { COLORS } from '../../theme/colors';
import PieChart from 'react-minimal-pie-chart';
import Color from 'color';
import { Check } from 'react-feather';

interface IProps {
  size: number;
  percent: number;
  className?: string;
}

export class Readyness extends PureComponent<IProps> {
  render() {
    const { className, size, percent } = this.props;

    return (
      <div
        className={root}
        style={{
          width: size,
        }}
      >
        <i
          className={nullCn}
          style={{
            width: `${size}px`,
            minWidth: `${size}px`,
            height: `${size}px`,
            borderColor: this.color.toString(),
            backgroundColor: this.color.alpha(0.15).toString(),
          }}
        >
          {percent > 0 && (
            <>
              {percent >= 100 && (
                <i
                  className={checkCn}
                  style={{
                    width: `${size}px`,
                    minWidth: `${size}px`,
                    height: `${size}px`,
                  }}
                >
                  <Check color={COLORS.WHITE.toString()} size={9} />
                </i>
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
            </>
          )}
        </i>
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
  position: relative;
`;

const nullCn = css`
  border-radius: 50%;
  border: 1px solid;
  display: block;
`;

const checkCn = css`
  position: absolute;
  top: 1px;
  left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
