import styles from "./game.module.css";
import {SYMBOL_X} from "./constants";
import {GameSymbol} from "./game-symbol";

export function GameCell({ isWinner, onClick, symbol, index }) {
    const symbolClass = isWinner ? (symbol === SYMBOL_X ? styles['cell--o--win'] : styles['cell--x--win']) : '';
    return (
        <button key={index} className={styles[`cell ${symbolClass}`]} onClick={onClick}>
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    );
}