import React, { Component } from 'react';
import './stlyes';

class Pokemon extends Component {
	render() {
		return (
			<div id="pokedex">
				<div id="pokedex-left">
					<div id="pokemon-types"></div>
                        <figure id="sprite-container">
                            <img src={this.props.spriteUrl} className="sprite-image"/>
                        </figure>
						<div id="name-container">
                            <span className="pokemon-name">{this.props.name}</span>
                            <span className="pokemon-number">No.</span> {this.props.id}</span>
                        </div>
                        <div id="pokemon-description">
                            <p>{this.props.description}</p>
                        </div>
                </div>
					<div id="pokedex-right">

						<div id="main-stats">
							<div className="height"></div>
							<div className="weight"></div>
							<div className="hp-bar"><div>
						</div>

						<div id="base-stats">
							<div className="attack"></div>
							<div className="deffense"></div>
							<div className="speed"></div>
							<div className="speed-attack"></div>
							<div className="speed-deffense"></div>
						</div>
					</div>
                </div>
			</div>
	    )
	}
}

export default Pokemon;
