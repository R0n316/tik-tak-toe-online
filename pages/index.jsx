import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";
import GameField from "@/components/game/game-field";
import {useState} from "react";
import {useGameState} from "@/components/game/use-game-state";
import UiModal from "@/components/ui-kit/ui-modal";
import UiButton from "@/components/ui-kit/ui-button";
import avatarSrc from "@/public/avatar.png";
import {GAME_SYMBOLS} from "@/components/game/constants";
import avatar1Src from "@/public/avatar-1.png";
import avatar2Src from "@/public/avatar-2.png";
import avatar3Src from "@/public/avatar-3.png";

const players = [
    {id:1, name: 'Alex', rating: 1230, avatar: avatarSrc, symbol: GAME_SYMBOLS.CROSS},
    {id:2, name: 'VereIntedinglapotur', rating: 850, avatar: avatar1Src, symbol: GAME_SYMBOLS.ZERO},
    {id:3, name: 'Kate', rating: 1400, avatar: avatar2Src, symbol: GAME_SYMBOLS.TRIANGLE},
    {id:4, name: 'Vitalik', rating: 760, avatar: avatar3Src, symbol: GAME_SYMBOLS.SQUARE},
];

export default function HomePage(){
    const [playersCount] = useState(2);
    const {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence,
        handlePlayerTimeOver,
        winnerSymbol,
        defineWinner
    } = useGameState(playersCount);

    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            <Header/>
            <GameContainer>
                <GameTitle playersCount={playersCount}/>
                <GameInfo playersCount={playersCount}
                          currentMove={currentMove}
                          hasWinner={winnerSymbol}
                          onPlayerTimeOver={handlePlayerTimeOver}
                          players={players}
                />
                <UiModal width={'md'} isOpen={winnerSymbol} onClose={() => console.log('close modal')}
                         players={players} defineWinner={defineWinner}>
                    <UiModal.Header>Игра завершена!</UiModal.Header>
                    <UiModal.Body>
                        <div className={'text-sm'}>Победитель:
                            <span className={'text-teal-600'}> {defineWinner(players, winnerSymbol)}</span>
                        </div>
                    </UiModal.Body>
                    <UiModal.Footer>
                        <UiButton size={'md'} variant={'outline'}>Вернуться</UiButton>
                        <UiButton size={'md'} variant={'primary'}>Играть снова</UiButton>
                    </UiModal.Footer>
                </UiModal>
                <GameField playersCount={playersCount}
                           cells={cells}
                           currentMove={currentMove}
                           nextMove={nextMove}
                           handleCellClick={handleCellClick}
                           winnerSequence={winnerSequence}
                />
            </GameContainer>
        </div>
    )
}