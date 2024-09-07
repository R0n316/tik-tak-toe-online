import {GameLayout} from "@/components/game-new/ui/game-layout";
import BackLink from "@/components/game-new/ui/back-link";
import GameTitle from "@/components/game-new/ui/game-title";
import GameInfo from "@/components/game-new/ui/game-info";
import {PLAYERS} from "@/components/game-new/constants";
import PlayerInfo from "@/components/game-new/ui/player-info";
import GameMoveInfo from "@/components/game-new/ui/game-move-info";
import {useGameState} from "@/components/game-new/model/use-game-state";
import GameCell from "@/components/game-new/ui/game-cell";
import {GameOverModal} from "@/components/game-new/ui/game-over-modal";

const PLAYERS_COUNT = 2;

export default function Game() {

    const {
        cells,
        currentMove,
        nextMove,
        winnerSequence,
        handleCellClick,
        winnerSymbol
    } = useGameState(PLAYERS_COUNT);

    const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

    return (
        <>
        <GameLayout
            backLink={<BackLink/>}
            title={<GameTitle/>}
            gameInfo={<GameInfo
                isRatingGame={true}
                playersCount={PLAYERS_COUNT}
                timeMode={'1 минута на ход'}
            />}
            playersList={
                PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) =>
                <PlayerInfo
                    key={player.id}
                    playerInfo={player}
                    isRight={index % 2 === 1}
                    seconds={60}
                />)
            }
            gameMoveInfo={<GameMoveInfo
                currentMove={currentMove}
                nextMove={nextMove}
            />}
            gameCells={cells.map((cell, index) => {
                return <GameCell
                    key={index}
                    isWinner={winnerSequence?.includes(index)}
                    onClick={() => handleCellClick(index)}
                    symbol={cell}
                    disabled={winnerSymbol}
                />
            })}
        >
        </GameLayout>
        <GameOverModal players={
            PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => <PlayerInfo
                key={player.id}
                playerInfo={player}
                isRight={index % 2 === 1}
                seconds={60}
            />)}
           winnerName={winnerPlayer?.name}
        />
        </>
    )
}