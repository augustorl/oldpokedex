import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

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

const Pokemon: React.FC<PokeProps> = ({
  id,
  type,
  name,
  description,
  height,
  weight,
  hpbar,
  attack,
  deffense,
  speed,
  speedattack,
  speeddeffense,
  ...rest
}) => {
  return (
      <Container>
        <div id="pokedex-left">
					<div id="pokemon-types">
            <p>{this.props.type}</p>
            <p>{this.props.type}</p>
          </div>
          <figure id="sprite-container">
            <img src={this.props.spriteUrl} className="sprite-image"/>
          </figure>
					<div id="name-container">
              <span className="pokemon-name">{this.props.name}</span>
              <span className="pokemon-number">No.</span> <span>{this.props.id}</span>
          </div>
          <div id="pokemon-description">
            <p>{this.props.description}</p>
          </div>
        </div>
					<div id="pokedex-right">
						<div id="main-stats">
							<p className="height"></p>
							<p className="weight"></p>
							<div className="hp-bar"></div>
						</div>

						<div id="base-stats">
							<div className="attack"></div>
							<div className="deffense"></div>
							<div className="speed"></div>
							<div className="speed-attack"></div>
							<div className="speed-deffense"></div>
						</div>
					</div>
      </Container>
  );
};
export default Pokemon;