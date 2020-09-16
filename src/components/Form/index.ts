import React, { InputHTMLAttributes } from 'react';
import { Form } from './styles';

interface PokemonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    searchedPokemon: string;
}

const PokeForm: React.FC<PokemonInputProps> =( searchedPokemon ) => {
    return (
        <Form>
    );
}