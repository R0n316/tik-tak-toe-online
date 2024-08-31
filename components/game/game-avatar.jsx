import GameSymbol from "@/components/game/game-symbol";

export default function GameAvatar({symbol}) {
    return (
        <div className={'w-5 h-5 rounded-full bg-white shadow absolute' +
            ' -left-1 -top-1 flex justify-center items-center'}>
            <GameSymbol symbol={symbol}/>
        </div>
    )
}