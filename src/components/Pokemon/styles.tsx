import styled from "styled-components";
import pokedex from '../../assets/11.png';

export const Container = styled.div`
    background: url(${pokedex}) no-repeat;
    flex-direction: row;
    height: 600px;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    margin-top: 30px;

    div#pokedex-left {
        width: 500px;
        padding: 80px 0px 40px 210px;

        div#pokemon-types {
            display: flex;
            max-width: 255px;
            justify-content: flex-end;
            p {
                padding: 4px;
                margin: 0px 0px 5px 5px;
                color: #E4E4E4;
                border: 2px double #000;
                text-transform: uppercase;
                font-size: 8px;
            }
            p:first-child {
                background-color: #9bcc50;
                
            }
            p:last-child {
                background-color: #b97fc9;
            }
        }

        figure#sprite-container {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            width: 300px;
            img {
                width: 140px;
                height: 140px;
                margin-top: 45px;
                margin-right: 35px;
            }
        }
        div#name-container {
            margin-top: 15px;
            margin-bottom: 10px;
            margin-left: 30px;
            font-size: 14px;
            display: flex;
            justify-content: space-around;
            flex-shrink: none;
            flex-grow: none;
            span {
                color: #000;
                text-transform: uppercase;
            }
            div#poke-number {
                margin-right: 55px;
                margin-left: 30px;
                display: flex;
                justify-content: flex-end;
            }
        }
        
        div#pokemon-description {
            max-width: 200px;
            height: 140px;
            font-size: 11.5px;
            margin: 33px 0px 0px 40px;
            color: #E4E4E4;
        }
    }
    div#pokedex-right {
        width: 500px;
        padding: 110px 300px 20px 60px;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #E4E4E4;

        div#hp-bar {    
            margin-left: 15px;
            p {
                margin-left: 2px;
                margin-bottom: 1px;
                margin-top: 1px;
            }
        }

        div#main-stats {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            width: 230px;
            padding-right: 10px;
            padding-left: 20px;
            font-size: 14px;
            p {
                padding: 4px;
                padding-left: 2px;
            }
        }

        div#base-stats {
            width: 220px;
            padding-top: 7px;
            height: 270px;
            display: flex;
            flex-direction: column;
            
            h1, p {
                font-size: 14px;
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
