import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";
import GameField from "@/components/game/game-field";
import {useState} from "react";
import {useGameState} from "@/components/game/use-game-state";

export default function HomePage(){
    const [playersCount] = useState(4);
    const {
        cells,
        currentMove,
        nextMove,
        handleCellClick
    } = useGameState(playersCount);

    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            <Header/>
            <GameContainer>
                <GameTitle playersCount={playersCount}/>
                <GameInfo playersCount={playersCount} currentMove={currentMove}/>
                <GameField playersCount={playersCount}
                           cells={cells}
                           currentMove={currentMove}
                           nextMove={nextMove}
                           handleCellClick={handleCellClick}
                />
            </GameContainer>
        </div>
    )
}