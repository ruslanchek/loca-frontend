import React, { PureComponent } from 'react';
import { CONFIG } from '../../config';

interface IProps {
  value: number;
}

export class NumberValue extends PureComponent<IProps> {
  render() {
    const { value } = this.props;

    return <>{value.toLocaleString(CONFIG.BASE_LOCALE)}</>;
  }
}
