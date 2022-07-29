import {createElement, ReactElement} from 'react';
import {IPixabay} from '../../services/pixabay/types';

import View from './view';

const DetailScreen = ({route}): ReactElement => {
  return createElement(View, route.params);
};

export default DetailScreen;
