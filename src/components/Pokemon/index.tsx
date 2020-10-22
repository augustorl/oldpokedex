import React from 'react';
import { Container } from  './styles';
import ProgressBar from '../ProgressBar';

interface PokemonTypesProps {
  name?: string;
}

interface PokeProps {
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
      specialAttack: number;
      specialDefense: number;
      speed: number;
    };
    type: PokemonTypesProps[];
}

const Pokemon: React.FC<PokeProps> = ({ type, flavorText, specie, id, weight, height, stats, image} : PokeProps) => {
  
  return (
      <Container>
        <div id="pokedex-left">
					<div id="pokemon-types">
            {type.map(pokemonType => (
                <p>{pokemonType.name}</p>
            ))}
          </div>
          <figure id="sprite-container">
            <img src={image} className="sprite-image"/>
          </figure>
					<div id="name-container">
              <span className="pokemon-name">{specie}</span>
              <div id="poke-number">
                <span>No.</span><span>{id}</span>
              </div>
          </div>
          <div id="pokemon-description">
            <p>{flavorText}</p>
          </div>
        </div>
        <div id="pokedex-right">
						<div id="main-stats">
							<div>
                <p>Height</p>
                <p>{height}</p>
              </div>
							<div>
                <p>Weight</p>
                <p>{weight}</p>
              </div>
						</div>
            <div id ="hp-bar">
              <p>hp {stats.hp}</p>
             <ProgressBar bgcolor="#9bcc50" completed={stats.hp}/>
            </div>
						<div id="base-stats">
							<div className="stat"><h1>attack </h1><p>{stats.attack}</p></div>
							<div className="stat"><h1>defense </h1><p>{stats.defense}</p></div>
							<div className="stat"><h1>speed </h1><p>{stats.speed}</p></div>
							<div className="stat"><h1>sp. att. </h1><p>{stats.specialAttack}</p></div>
							<div className="stat"><h1>sp. def. </h1><p>{stats.specialDefense}</p></div>
						</div>
          </div>
					
      </Container>
  );
};
export default Pokemon;
