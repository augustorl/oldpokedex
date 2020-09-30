import styled from "styled-components";
import pokedex from '../../assets/pokedex.png';

export const Container = styled.div`
    background: url(${pokedex}) no-repeat;
    flex-direction: row;
    height: 700px;
    display: flex;
    div#pokedex-left {
        position: relative;
        max-width: 630px;
        padding: 160px 0px 0px 300px;

        div#pokemon-types {
            display: flex;
            justify-content: flex-end;
            margin-left: 150px;
            p {
                padding: 4px;
                margin: 0 0px 5px 5px;
                color: #E4E4E4;
                border: 2px double #000;
                text-transform: uppercase;
                font-size: 12px;
            }
            p:first-child {
                background-color: #9bcc50;
                
            }
            p:last-child {
                background-color: #b97fc9;
            }
        }

        figure#sprite-container {
            img {
                max-width: 250px;
                padding: 50px 0px 30px 70px;
            }
        }
        div#name-container {
            display: flex;
            justify-content: space-around;
            span {
                color: #000;
                text-transform: uppercase;
            }
            div#poke-number {
                margin-right: 15px;
            }
        }
        div#pokemon-description {
            max-width: 270px;
            margin: 62px 0px 0px 24px;
            color: #E4E4E4;
        }
    }
    div#pokedex-right {
        position: relative;
        max-width: 630px;
        padding: 270px 300px 0px 160px;
        text-transform: uppercase;
        color: #E4E4E4;

        div#main-stats {
            display: flex;
            justify-content: space-between;
            width: 275px;
            padding-right: 30px;
            font-size: 18px;
            p {
                padding: 7px;
                padding-left: 2px;
            }
        }

        div#base-stats {
            width: 275px;
            padding-top: 70px;
            padding-right: 30px;
            height: 270px;
            display: flex;
            flex-direction: column;
            
            h1, p {
                font-size: 18px;
            }
            h1 {
                margin-right: 40px;
            }            
            div {
                display: flex;
                padding: 10px;
                justify-content: space-between;
            }
            
        }
    }


`;