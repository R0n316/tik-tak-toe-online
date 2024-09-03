import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";
import GameField from "@/components/game/game-field";
import {useState} from "react";
import {useGameState} from "@/components/game/use-game-state";
import UiModal from "@/components/ui-kit/ui-modal";
import UiButton from "@/components/ui-kit/ui-button";

export default function HomePage(){
    const [playersCount] = useState(2);
    const {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence,
        handlePlayerTimeOver,
        winnerSymbol
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
                />
                <UiModal width={'md'} isOpen={winnerSymbol} onClose={() => console.log('close modal')}>
                    <UiModal.Header>Игра завершена!</UiModal.Header>
                    <UiModal.Body>
                        <div className={'text-sm'}>Победитель: <span className={'text-teal-600'}>Alex</span></div>
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