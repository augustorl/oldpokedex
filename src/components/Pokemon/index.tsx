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
  description: string;
  height: number;
  weight: number;
  hpbar: number;
  attack: number;
  deffense: number;
  speed: number;
  speedattack: number;
  speeddeffense: number;
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
              <span className="pokemon-number">No.</span> <span>1</span>
          </div>
          <div id="pokemon-description">
            <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this PokéMon.</p>
          </div>
        </div>
					<div id="pokedex-right">
						<div id="main-stats">
							<p className="height">10</p>
							<p className="weight">98</p>
							<div className="hp-bar"><p>10</p></div>
						</div>

						<div id="base-stats">
							<div className="attack"><h1>attack:</h1><p>20</p></div>
							<div className="deffense"></div><h1>defense</h1><p>30</p>
							<div className="speed"></div><h1>speed</h1><p>20</p>
							<div className="speed-attack"></div><h1>sp. att.</h1><p>30</p>
							<div className="speed-deffense"></div><h1>sp. def.</h1><p>40</p>
						</div>
					</div>
      </Container>
  );
};
export default Pokemon;