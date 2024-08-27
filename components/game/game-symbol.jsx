import styles from "./game.module.css";
import {SYMBOL_O, SYMBOL_X} from "./constants";

export function GameSymbol({ symbol }) {
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_X) {
            return 'symbol--x';
        }
        if (symbol === SYMBOL_O) {
            return 'symbol--o';
        }
        return '';
    };
    return <span className={styles[`symbol ${getSymbolClassName(symbol)}`]}>{symbol}</span>;
}