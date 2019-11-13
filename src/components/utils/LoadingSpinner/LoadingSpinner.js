import React from 'react';

import {
  Spinner
} from 'native-base';

export default props => (
  <Spinner
    color={props.color || 'blue'}
    style={{ flex: 1, alignSelf: 'center' }}
  />
)