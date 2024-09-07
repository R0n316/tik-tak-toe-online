import {GameLayout} from "@/components/game-new/ui/game-layout";
import BackLink from "@/components/game-new/ui/back-link";
import GameTitle from "@/components/game-new/ui/game-title";
import GameInfo from "@/components/game-new/ui/game-info";
import {PLAYERS} from "@/components/game-new/constants";
import PlayerInfo from "@/components/game-new/ui/player-info";

export default function Game() {
    return (
        <GameLayout
            backLink={<BackLink/>}
            title={<GameTitle/>}
            gameInfo={<GameInfo
                isRatingGame={true}
                playersCount={4}
                timeMode={'1 минута на ход'}
            />}
            playersList={
                PLAYERS.map((player, index) => <PlayerInfo
                    key={player.id}
                    playerInfo={player}
                    isRight={index % 2 === 1}
                    seconds={60}

                />)
            }
        >

        </GameLayout>
    )
}