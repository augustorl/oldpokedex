import React, { InputHTMLAttributes } from 'react';
import Input from '../../components/Input';
import { Container } from './styles';

interface PokemonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    searchedPokemon: string;
}

const PokeForm: React.FC<PokemonInputProps> =( searchedPokemon ) => (
    <Container>
        <Input name="pokemon" icon={} placeholder="Search Pokemon" />
    </Container>
);