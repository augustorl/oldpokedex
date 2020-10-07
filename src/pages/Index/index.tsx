import React, {useRef, useCallback, useState, useEffect} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import pokedex from '../../assets/pokedex.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Pokemon from '../../components/Pokemon';


import { Container, FormContainer, Wrapper, Navbar } from './styles';
import { render } from '@testing-library/react';

interface PokemonFormData {
    pokemon: string;
}
interface generatePokemonData {
    pokemon: {
    id: number;
    type: string;
    name: string;
    height: number;
    weight: number;
    }
}
const Index: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [pokemon, setPokemon] = useState<generatePokemonData>();

    const searchPokemon = useCallback( async (data: PokemonFormData) => {
        try {
            const schema = Yup.object().shape({
                pokemon: Yup.string().required('Pokemon is required.')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            const SearchedPokemon = data.pokemon.toLowerCase();

            const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${SearchedPokemon}`);
            setPokemon(response.data);

            console.log(response);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
              
              return;
            }
          }
        },
        [setPokemon],
      );

    return  (
    <>
    {pokemon && (
        <Navbar>
        <img src={logo} alt="Pokemon" />
            
                <Form ref={formRef} onSubmit={searchPokemon}>
                    <FormContainer>
                        <Input
                            name="pokemon"
                            type="text"
                            placeholder="New search!"
                        />
                        <Button type="submit">Go!</Button>
                    </FormContainer>
                </Form>
            
        </Navbar>
        )}
        <Wrapper>
        {!pokemon && (
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
        )}
        {pokemon && (
                <Pokemon></Pokemon>
            )} 
        </Wrapper>
    </>
    )
}

export default Index;