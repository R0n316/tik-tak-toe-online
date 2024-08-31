export default function GameCell({onClick, children, isWinner}) {
    return (
        <button
            onClick={onClick}
            className={`border border-slate-200 flex justify-center
             items-center ${isWinner && 'bg-orange-600/10'}`}>
            {children}
        </button>
    );
}