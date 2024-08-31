export default function GameCell({onClick, children}) {
    return (
        <button
            onClick={onClick}
            className={'border border-slate-200 flex justify-center items-center'}>
            {children}
        </button>
    );
}