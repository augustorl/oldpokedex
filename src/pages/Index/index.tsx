import React, {useRef, useCallback} from 'react';
import { FiSearch } from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import { useToast } from '../../hooks/Toast';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Container, FormContainer } from './styles';
import api from '../../services/api';
interface PokemonFormData {
    pokemon: string;
}

const Index: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();

    const handleSubmit = useCallback(
        async (data: PokemonFormData) => {
            const response = await api.get('pokemons', {
                data,
            });
        }, []);
    return  (
        <Container>
            <img src={logo} alt="Pokemon" />
            <FormContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
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