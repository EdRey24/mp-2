import styled from "styled-components"
import type {Game} from "../interfaces/Game.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: #f3e5f5;
    justify-content: center;
`;

const SingleCharDiv=styled.div`
    width: 40%;
    margin: 2%;
    padding: 1%;
    background-color: #7b1fa2;
    color: white;
    border: 3px #4a148c solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: 90%;
        margin: 5% auto;
    }
`;

const ImageStyle=styled.img`
    width: 80%;
`;

const ImageLink=styled.a`
    text-decoration: none;
`;

const OriginalPrice=styled.p`
    text-decoration: line-through;
    color: #f44336;
    font-size: calc(2px + 1.5vw);
`;

const SalePrice=styled.p`
    color: #4caf50;
    font-size: calc(2px + 1.5vw);
`;

const Title=styled.h1`
    height: calc(3.6 * (2px + 1vw)); /* Make around 2 lines of space for title*/
    overflow: hidden;
    position: relative;
    line-height: 1.2;
    margin: 0 0 5% 0;
    font-size: calc(2px + 1.5vw);
`;

export default function GameGiveaways(props : { data: Game[] } ){
    return (
        <AllCharsDiv>
            {
                props.data.map((game: Game) =>
                    <SingleCharDiv key={game.gameID}>
                        <Title>{game.title}</Title>
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