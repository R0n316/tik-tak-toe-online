import PlayerInfo from "@/components/game/player-info";

export default function GameInfo({playersCount, currentMove, hasWinner, onPlayerTimeOver, players}) {
    return (
        <div className={'min-h-20 grid grid-cols-2 gap-5 items-center shadow-md' +
            ' rounded-2xl mt-[17px] w-full box-border px-8 py-4 bg-white'}>
            {players.slice(0, playersCount).map((player, index) => {
                return <PlayerInfo key={player.id}
                                   playerInfo={player}
                                   isRight={index % 2 === 1}
                                   isTimerRunning={currentMove === player.symbol && !hasWinner}
                                   onTimeOver={() => onPlayerTimeOver(player.symbol)}
                />
            })}
        </div>
    )
}