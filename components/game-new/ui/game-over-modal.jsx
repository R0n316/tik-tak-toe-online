import UiModal from "@/components/ui-kit/ui-modal";
import UiButton from "@/components/ui-kit/ui-button";

export function GameOverModal({winnerName, players}) {
    return (
        <UiModal width={'md'} isOpen={winnerName}
                 onClose={() => console.log('close modal')}
                 players={players}>
            <UiModal.Header>Игра завершена!</UiModal.Header>
            <UiModal.Body>
                <div className={'text-sm'}>Победитель:
                    <span className={'text-teal-600'}> {winnerName}</span>
                </div>
                <div className={'min-h-20 grid grid-cols-2 gap-5 items-center' +
                    ' rounded-2xl mt-[17px] w-full box-border px-8 py-4 bg-white'}>
                    {players}
                </div>
            </UiModal.Body>
            <UiModal.Footer>
                <UiButton size={'md'} variant={'outline'}>Вернуться</UiButton>
                <UiButton size={'md'} variant={'primary'}>Играть снова</UiButton>
            </UiModal.Footer>
        </UiModal>
    )
}