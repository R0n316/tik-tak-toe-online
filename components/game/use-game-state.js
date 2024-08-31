import {useState} from "react";
import {GAME_SYMBOLS, MOVE_ORDER} from "@/components/game/constants";

const getNextMove = (currentMove, playersCount) => {
    const slicedMoveOrder = MOVE_ORDER.slice(0,playersCount);
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function useGameState(playersCount) {

    const [{cells, currentMove}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS
    }));

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
        handleCellClick
    }
}