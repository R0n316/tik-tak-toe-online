import styles from "./game.module.css";
import {useGameState} from "./use-game-state";
import {GameInfo} from "./game-info";
import {GameCell} from "./game-cell";

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
        <div className={styles['game']}>
            <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
            <div className={styles['game-field']}>
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                    />
                ))}
            </div>
            <button className={styles['restart-button']} onClick={handleRestartButtonClick}>
                Начать заново
            </button>
        </div>
    );
}