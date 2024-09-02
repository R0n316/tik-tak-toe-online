import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";
import GameField from "@/components/game/game-field";
import {useState} from "react";
import {useGameState} from "@/components/game/use-game-state";

export default function HomePage(){
    const [playersCount] = useState(2);
    const {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence,
        handlePlayerTimeOver,
        winnerSymbol
    } = useGameState(playersCount);

    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            <Header/>
            <GameContainer>
                <GameTitle playersCount={playersCount}/>
                <GameInfo playersCount={playersCount}
                          currentMove={currentMove}
                          hasWinner={winnerSymbol}
                          onPlayerTimeOver={handlePlayerTimeOver}
                />
                <GameField playersCount={playersCount}
                           cells={cells}
                           currentMove={currentMove}
                           nextMove={nextMove}
                           handleCellClick={handleCellClick}
                           winnerSequence={winnerSequence}
                />
            </GameContainer>
        </div>
    )
}