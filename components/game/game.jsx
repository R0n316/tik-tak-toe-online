import {useGameState} from "./use-game-state";
import {GameField} from "./game-field";

export default function Game() {
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleRestartButtonClick,
        winnerSymbol,
        isDraw
    } = useGameState()

    return (
        <GameField cells={cells}
                   currentStep={currentStep}
                   winnerSequence={winnerSequence}
                   handleCellClick={handleCellClick}
                   handleRestartButtonClick={handleRestartButtonClick}
                   winnerSymbol={winnerSymbol}
                   isDraw={isDraw}/>
    );
}