import React, {useRef, useCallback, useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import { useToast } from '../../hooks/Toast';
import * as Yup from 'yup';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';


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
            <Form ref={formRef} onSubmit={searchPokemon}>
                <FormContainer>
                    <Input
                        name="pokemon"
                        type="text"
                        placeholder="Enter a Pokemon name!"
                    />
                    <Button type="submit">Go!</Button>
                </FormContainer>
            </Form>     
        </Container>
    )
}

export default Index;