import {GameCell} from "./game-cell";

export function GameLayout({cells, winnerSequence, onClick}) {
    return <div className={'grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]'}>
        {cells.map((symbol, index) => (
            <GameCell
                key={index}
                symbol={symbol}
                isWinner={winnerSequence?.includes(index)}
                onClick={() => onClick(index)}
            />
        ))}
    </div>
}