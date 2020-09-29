import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
  } from 'react';
  
  interface PokeProps {
    id: number;
    type: string;
    name: string;
    description: string;
    height: number;
    weight: number;
    hpbar: number;
    attack: number;
    deffense: number;
    speed: number;
    speedattack: number;
    speeddeffense: number;
  }
  
  const Pokemon: React.FC<PokeProps> = ({
    id,
    type,
    name,
    description,
    height,
    weight,
    hpbar,
    attack,
    deffense,
    speed,
    speedattack,
    speeddeffense,
    ...rest
  }) => {
    const pokemon = localStorage.getItem('@Pokemon:searched');
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