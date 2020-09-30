import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { Container } from  './styles';

interface PokeProps {
  id: number;
  type: string;
  name: string;
  height: number;
  weight: number;
}

const Pokemon: React.FC = () => {
  return (
      <Container>
        <div id="pokedex-left">
					<div id="pokemon-types">
            <p>Grass</p>
            <p>Poison</p>
          </div>
          <figure id="sprite-container">
            <img src="https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png" className="sprite-image"/>
          </figure>
					<div id="name-container">
              <span className="pokemon-name">Bulbasaur</span>
              <div id="poke-number">
                <span>No.</span> <span>1</span>
              </div>
          </div>
          <div id="pokemon-description">
            <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this PokéMon.</p>
          </div>
        </div>
        <div id="pokedex-right">
						<div id="main-stats">
							<p className="height">Height <div><p>10</p></div></p>
							<p className="weight">Weight <div><p>98</p></div></p>
						</div>

						<div id="base-stats">
							<div className="stat"><h1>attack </h1><p>20</p></div>
							<div className="stat"><h1>defense </h1><p>30</p></div>
							<div className="stat"><h1>speed </h1><p>20</p></div>
							<div className="stat"><h1>sp. att. </h1><p>30</p></div>
							<div className="stat"><h1>sp. def. </h1><p>40</p></div>
						</div>
          </div>
					
      </Container>
  );
};
export default Pokemon;
