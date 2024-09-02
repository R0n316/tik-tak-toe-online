import {useState} from "react";
import {GAME_SYMBOLS} from "@/components/game/constants";
import {computeWinner, getNextMove} from "@/components/game/model";

export function useGameState(playersCount) {

    const [{cells, currentMove, playersTimeOver}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
        playersTimeOver: []
    }));

    const winnerSequence = computeWinner(cells);
    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

    const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence?.[0];

    const handleCellClick = (index) => {
        setGameState(lastGameState => {
            if (lastGameState.cells[index] !== null) {
                return lastGameState;
            }
            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove, playersCount, playersTimeOver),
                cells: lastGameState.cells.map((cell, i) => {
                    if (i === index) {
                        return lastGameState.currentMove;
                    }
                    return cell;
                })
            };
        });
    }

    const handlePlayerTimeOver = (symbol) => {
        setGameState(lastGameState => {
            return {
                ...lastGameState,
                playersTimeOver: [...lastGameState.playersTimeOver, symbol],
                currentMove: getNextMove(lastGameState.currentMove, playersCount, playersTimeOver)
            };
        });
    }


    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        handlePlayerTimeOver,
        winnerSequence,
        winnerSymbol
    }
}