import GameSymbol from "@/components/game-new/ui/game-symbol";

export default function GameCell({disabled, onClick, isWinner, symbol}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`border border-slate-200 flex justify-center
             items-center ${isWinner && symbol.background}`}>
            {symbol && <GameSymbol className={'w-5 h-5'} symbol={symbol}/>}
        </button>
    );
}