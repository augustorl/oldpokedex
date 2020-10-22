import React, {useRef, useCallback, useState, useEffect} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import pokedex from '../../assets/pokedex.png';
import pokemonTypes from '../../assets/types';
import Input from '../../components/Input';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Pokemon from '../../components/Pokemon';
import { Container, FormContainer, Wrapper, Navbar, Pokedex } from './styles';

interface PokemonFormData {
    pokemon: string;
}
interface PokemonTypesProps {
    name?: string;
  }
interface generatePokemonData {
    specie: string;
    id: number;
    height: string;
    weight: string;
    image: string;
    flavorText: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        specialAttack: number;
        specialDefense: number;
      };
    type: PokemonTypesProps[];
};

interface TypePokemonResponse {
    type: {
      name: keyof typeof pokemonTypes;
    };
  }


const Index: React.FC = () => {
    // const { colors } = useTheme();
    const formRef = useRef<FormHandles>(null);
    const [pokemon, setPokemon] = useState<generatePokemonData>();

    useEffect(() => {
        if (!pokemon) {
            return;
        } else {
            return;
        }
    })
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
            const responsev2 = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${SearchedPokemon}`);

            let englishResponse = responsev2.data.filter((Object: { flavor_text_entries: { language: any; }; }) => Object.flavor_text_entries.language == “en”)
            let flavorText = (responsev2.data.flavor_text_entries.shift()['flavor_text']);
            const {
                id,
                weight,
                height,
                stats,
                sprites,
                types,
                species,
            } = response.data;

            setPokemon({
                flavorText,
                id,
                image:
                  sprites.other['official-artwork'].front_default ||
                  sprites.front_default,
                weight: `${weight / 10} kg`,
                specie: species.name,
                height: `${height / 10} m`,
                stats: {
                  hp: stats[0].base_stat,
                  attack: stats[1].base_stat,
                  defense: stats[2].base_stat,
                  specialAttack: stats[3].base_stat,
                  specialDefense: stats[4].base_stat,
                  speed: stats[5].base_stat,
                },
                type: types.map((pokemonType: TypePokemonResponse) => ({
                    name: pokemonType.type.name
                  })),
              });

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
        <Pokedex>
            {pokemon && (
                <Pokemon type={pokemon.type} flavorText={pokemon.flavorText} stats={pokemon.stats} image={pokemon.image}specie={pokemon.specie} id={pokemon.id} height={pokemon.height} weight={pokemon.weight}/>
            )} 
        </Pokedex>

        </Wrapper>
    </>
    )
}

export default Index;