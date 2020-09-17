import React, {useRef, useCallback} from 'react';
import { FiSearch } from 'react-icons/fi';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Container} from './styles';

interface PokemonFormData {
    pokemon: string;
}

const Index: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    return  (
        <Container>
            <img src={logo} alt="Pokemon" />
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                    name="pokemon"
                    icon={FiSearch}
                    type="text"
                    placeholder="Search Pokemon"
                />
            </Form>
        </Container>
    )
}