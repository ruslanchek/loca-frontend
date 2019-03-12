import React, { PureComponent } from 'react';
import { CONFIG } from '../../config';

interface IProps {
  value: Date;
}

export class TimeValue extends PureComponent<IProps> {
  render() {
    const { value } = this.props;

    return <>{value.toLocaleTimeString(CONFIG.BASE_LOCALE)}</>;
  }
}
