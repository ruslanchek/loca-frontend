import React, { PureComponent } from 'react';
import { CONFIG } from '../../config';

interface IProps {
  value: Date;
}

export class TimeValue extends PureComponent<IProps> {
  render() {
    const { value } = this.props;

    return (
      <React.Fragment>
        {value.toLocaleTimeString(CONFIG.DEFAULT_LOCALE)}
      </React.Fragment>
    );
  }
}
