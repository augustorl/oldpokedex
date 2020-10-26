import React, {useRef, useCallback, useState, useEffect, SVGProps} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import pokemonTypes from '../../assets/types';
import Input from '../../components/Input';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Pokemon from '../../components/Pokemon';
import Footer from '../../components/Footer';
import { useToast } from '../../hooks/Toast';
import { Container, FormContainer, Navbar, ContentWrapper } from './styles';

interface PokemonFormData {
    pokemon: string;
}

export interface PokemonTypesProps {
    name?: string;
    icon: SVGProps<SVGSVGElement>
    color: string;
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
    const { colors } = useTheme();
    const formRef = useRef<FormHandles>(null);
    const [pokemon, setPokemon] = useState<generatePokemonData>();
    const { addToast } = useToast();
    

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
                pokemon: Yup.string().required('Pokemon required.')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            const SearchedPokemon = data.pokemon.toLowerCase();

            const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${SearchedPokemon}`);
            const responsev2 = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${SearchedPokemon}`);

            const { flavor_text_entries } = responsev2.data;

            let englishResponses = flavor_text_entries.filter(
                (lang: any) => lang.language.name === 'en',
            );
            
            let flavorText = (englishResponses[0].flavor_text.length >= 100) ? englishResponses[0].flavor_text.substr(0,90)+'...' : englishResponses[0].flavor_text.substr(0,93);
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
                    name: pokemonType.type.name,
                    icon: pokemonTypes[pokemonType.type.name],
                    color: colors.type[pokemonType.type.name],
                  })),
              });

            console.log(response);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
              
              return;
            }

            addToast({
                type: 'error',
                title: 'Pokemon not found!',
                description: 'We were unable to find this Pokemon, please check your spelling.',
              });
          }
        },
        [setPokemon,colors, addToast],
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
                                placeholder="New search..."
                            />
                            <Button type="submit">Go!</Button>
                        </FormContainer>
                    </Form>
                
            </Navbar>
        )}

        <ContentWrapper>
        {!pokemon && (
            <Container>
                <img src={logo} alt="Pokemon" />
                <Form ref={formRef} onSubmit={searchPokemon}>
                    <FormContainer>
                        <Input
                            name="pokemon"
                            type="text"
                            placeholder="Enter a Pokemon name..."
                        />
                        <Button type="submit">Go!</Button>
                    </FormContainer>
                </Form>

            </Container>
        )}
        {pokemon && (
                <Pokemon 
                type={pokemon.type}
                flavorText={pokemon.flavorText}
                stats={pokemon.stats}
                image={pokemon.image}
                specie={pokemon.specie}
                id={pokemon.id}
                height={pokemon.height}
                weight={pokemon.weight}
                />
        )}
        </ContentWrapper>
        <Footer />
    </>
    )
}

export default Index;