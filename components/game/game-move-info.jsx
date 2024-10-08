import UiButton from "@/components/ui-kit/ui-button";
import GameSymbol from "@/components/game/game-symbol";

export default function GameMoveInfo({currentMove, nextMove}) {
    return (
        <div className={'flex justify-between'}>
            <div className={'flex flex-col justify-center'}>
                <div className={'flex items-center'}>
                    <span className={'text-xl font-semibold mr-1'}>Ход:</span>
                    <GameSymbol symbol={currentMove} className={'w-5 h-5'}/>
                </div>
                <div className={'flex items-center'}>
                    <span className={'text-xs text-slate-400 mr-1'}>Следующий:</span>
                    <GameSymbol symbol={nextMove} className={'w-3 h-3'}/>
                </div>
            </div>
            <div className={'flex'}>
                <UiButton variant={'primary'} size={'md'} className={'mr-[11px] self-center'}>Ничья</UiButton>
                <UiButton variant={'outline'} size={'md'} className={'self-center'}>Сдаться</UiButton>
            </div>
        </div>
    )
}