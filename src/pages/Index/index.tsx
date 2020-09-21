import React, {useRef, useCallback, useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import { useToast } from '../../hooks/Toast';
import * as Yup from 'yup';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';

interface PokemonFormData {
    pokemon: string;
}

const Index: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const [pokemons, setPokemons] = useState([]);

    const searchPokemon = useCallback( async (data: PokemonFormData) => {
        try {
            const schema = Yup.object().shape({
                pokemon: Yup.string().required('Pokemon required')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    }, [] );
    return  (
        <Container>
            <img src={logo} alt="Pokemon" />
            <FormContainer>
            <Form ref={formRef} onSubmit={searchPokemon}>
                <Input
                    name="pokemon"
                    type="text"
                    placeholder="Search Pokemon"
                    icon={FiSearch}
                />
            </Form>
            </FormContainer>
        </Container>
    )
}

export default Index;