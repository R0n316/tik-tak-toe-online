import {useState} from "react";
import {SYMBOL_O, SYMBOL_X} from "./constants";

const computeWinner = (cell) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
            return [a, b, c];
        }
    }
};

export function useGameState(){
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentStep, setCurrentStep] = useState(SYMBOL_X);
    const [winnerSequence, setWinnerSequence] = useState();
    const [isDraw, setIsDraw] = useState(false);

    const handleRestartButtonClick = () => {
        setCells(Array(9).fill(null));
        setCurrentStep(SYMBOL_X);
        setWinnerSequence(undefined);
        setIsDraw(false);
    };

    const handleCellClick = (index) => {
        if (winnerSequence || cells[index] || isDraw) {
            return;
        }
        const cellsCopy = [...cells];
        cellsCopy[index] = currentStep;

        const winner = computeWinner(cellsCopy);
        if (!winner && !cellsCopy.includes(null)) {
            setIsDraw(true);
        }
        setCells(cellsCopy);
        setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
        setWinnerSequence(winner);
    };
    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
    return {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleRestartButtonClick,
        winnerSymbol,
        isDraw
    }
}