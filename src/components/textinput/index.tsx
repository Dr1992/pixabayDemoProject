import React, {ReactElement} from 'react';
import {IViewProps} from './types';
import {Input} from './styles';

const TextInput = ({onBlur}: IViewProps): ReactElement => {
  return <Input onEndEditing={onBlur} autoFocus={true} />;
};

export default TextInput;