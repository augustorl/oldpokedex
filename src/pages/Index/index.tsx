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
import getValidationErrors from '../../utils/getValidationErrors';
import Pokemon from '../../components/Pokemon';


import { Container, FormContainer } from './styles';

interface PokemonFormData {
    pokemon: string;
}
interface generatePokemonData {
    id: number;
    type: string;
    name: string;
    height: number;
    weight: number;
}
const Index: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const [pokemon, setPokemon] = useState([]);
    

    const searchPokemon = useCallback( async (data: PokemonFormData) => {
        try {
            const schema = Yup.object().shape({
                pokemon: Yup.string().required('Pokemon required')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            const SearchedPoke = data.pokemon.toLowerCase();

            const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${SearchedPoke}`);
            setPokemon(response.data);

            console.log(response);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
              
              return;
            }
    
            addToast({
              type: 'error',
              title: 'Erro na autenticação',
              description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
            });
          }
        },
        [addToast, setPokemon],
      );

      const generatePokemon = (pokemon: generatePokemonData) => {
        const {id, type, name, height, weight } = pokemon;
        return (
            <Pokemon />
        )
      }
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