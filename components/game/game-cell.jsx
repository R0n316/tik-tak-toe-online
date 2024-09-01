export default function GameCell({onClick, children, isWinner, symbol}) {
    return (
        <button
            onClick={onClick}
            className={`border border-slate-200 flex justify-center
             items-center ${isWinner && symbol.background}`}>
            {children}
        </button>
    );
}