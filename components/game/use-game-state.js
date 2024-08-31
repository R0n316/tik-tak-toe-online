import {useState} from "react";
import {GAME_SYMBOLS} from "@/components/game/constants";
import {computeWinner, getNextMove} from "@/components/game/model";

export function useGameState(playersCount) {

    const [{cells, currentMove}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS
    }));

    const winnerSequence = computeWinner(cells);
    const nextMove = getNextMove(currentMove, playersCount);

    const handleCellClick = (index) => {
        setGameState(lastGameState => {
            if (lastGameState.cells[index] !== null) {
                return lastGameState;
            }
            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove, playersCount),
                cells: lastGameState.cells.map((cell, i) => {
                    if (i === index) {
                        return lastGameState.currentMove;
                    }
                    return cell;
                })
            };
        });
    }


    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence
    }
}