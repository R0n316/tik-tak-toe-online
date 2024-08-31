import avatarSrc from "@/public/avatar.png";
import avatar1Src from "@/public/avatar-1.png";
import avatar2Src from "@/public/avatar-2.png";
import avatar3Src from "@/public/avatar-3.png";
import PlayerInfo from "@/components/game/player-info";
import {GAME_SYMBOLS} from "@/components/game/constants";

const players = [
    {id:1, name: 'Alex', rating: 1230, avatar: avatarSrc, symbol: GAME_SYMBOLS.CROSS},
    {id:2, name: 'VereIntedinglapotur', rating: 850, avatar: avatar1Src, symbol: GAME_SYMBOLS.ZERO},
    {id:3, name: 'Kate', rating: 1400, avatar: avatar2Src, symbol: GAME_SYMBOLS.TRIANGLE},
    {id:4, name: 'Vitalik', rating: 760, avatar: avatar3Src, symbol: GAME_SYMBOLS.SQUARE},
];

export default function GameInfo({playersCount, currentMove}) {
    return (
        <div className={'min-h-20 grid grid-cols-2 gap-5 items-center shadow-md' +
            ' rounded-2xl mt-[17px] w-full box-border px-8 py-4 bg-white'}>
            {players.slice(0, playersCount).map((player, index) => {
                return <PlayerInfo key={player.id}
                                   playerInfo={player}
                                   isRight={index % 2 === 1}
                                   isTimerRunning={currentMove === player.symbol}
                />
            })}
        </div>
    )
}