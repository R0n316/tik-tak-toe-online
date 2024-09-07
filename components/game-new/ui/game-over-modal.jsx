import UiModal from "@/components/ui-kit/ui-modal";
import UiButton from "@/components/ui-kit/ui-button";

export function GameOverModal() {
    return (
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
    )
}