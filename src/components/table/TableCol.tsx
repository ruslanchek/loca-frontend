import React, { PureComponent } from 'react';
import { css, cx } from 'emotion';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

interface IProps {
  width: string;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

export class TableCol extends PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  };

  render() {
    const { children, width, alignItems, justifyContent } = this.props;

    return (
      <div
        style={{ width, minWidth: width, alignItems, justifyContent }}
        className={tableColCn}
      >
        {children}
      </div>
    );
  }
}

const tableColCn = css`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
