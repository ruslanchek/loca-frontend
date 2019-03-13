import React, { PureComponent } from 'react';
import { distanceInWords } from 'date-fns';
import { CONFIG } from '../../config';

interface IProps {
  value: Date;
}

export class TimeDistance extends PureComponent<IProps> {
  render() {
    const { value } = this.props;

    let str = distanceInWords(value, new Date(), {
      includeSeconds: true,
      locale: CONFIG.DEFAULT_LOCALE,
    });

    str = str.charAt(0).toUpperCase() + str.slice(1);

    return <React.Fragment>{str}</React.Fragment>;
  }
}
