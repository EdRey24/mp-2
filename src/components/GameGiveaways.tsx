import styled from "styled-components"
import type {Game} from "../interfaces/Game.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: bisque;
    justify-content: center;
`;

const SingleCharDiv=styled.div`
    width: 40%;
    margin: 2%;
    padding: 1%;
    background-color: darkorange;
    color: white;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

const ImageStyle=styled.img`
    width: 80%;
`;

const ImageLink=styled.a`
    text-decoration: none;
`;

const OriginalPrice=styled.p`
    text-decoration: line-through;
    color: red;
`;

const SalePrice=styled.p`
    color: green;
`;

export default function GameGiveaways(props : { data: Game[] } ){
    return (
        <AllCharsDiv>
            {
                props.data.map((game: Game) =>
                    <SingleCharDiv key={game.gameID}>
                        <h1>{game.title}</h1>
                        <span>Original Price: </span>
                        <OriginalPrice> ${game.normalPrice} </OriginalPrice>
                        <span>Sale Price: </span>
                        <SalePrice> ${game.salePrice} </SalePrice>
                        <ImageLink href={"https://store.steampowered.com/app/" + game.steamAppID} target={"_blank"}>
                            <ImageStyle src={game.thumb} alt={`image of ${game.title}`}></ImageStyle>
                        </ImageLink>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}