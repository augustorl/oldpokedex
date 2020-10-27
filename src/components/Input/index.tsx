import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);


  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
    >
      
      <input
        name={name}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        autoComplete="off"
      />
      {Icon && <Icon size={26} />}

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c00000" size={20} />
        </Error>
      )}
    </Container>
  );
};
export default Input;
