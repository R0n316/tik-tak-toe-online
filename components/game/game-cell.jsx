import {SYMBOL_X} from "./constants";
import {GameSymbol} from "./game-symbol";

export function GameCell({ isWinner, onClick, symbol, index }) {
    const symbolClass = isWinner ? (symbol === SYMBOL_X ?
        'bg-red-100 bg-opacity-50' : 'bg-green-400 bg-opacity-50') : '';
    return (
        <button key={index} className={`border border-gray-400 -ml-px -mt-px flex items-center
         justify-center bg-transparent ${symbolClass}`} onClick={onClick}>
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    );
}