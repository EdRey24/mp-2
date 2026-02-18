import GameGiveaways from "./components/GameGiveaways.tsx";
import styled from "styled-components";
import { useEffect, useState } from 'react'
import type {Game} from "./interfaces/Game.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: 0 auto;
    border: 5px #4a148c solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Game[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1");
            const games = await rawData.json();
            setData(games);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <GameGiveaways data={data}/>
        </ParentDiv>
    )
}