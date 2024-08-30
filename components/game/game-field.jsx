import Image from "next/image";
import UiButton from "@/components/ui-kit/ui-button";

let cells = new Array(19);
for(let i = 0; i < cells.length; i++) {
    cells[i] = new Array(19).fill(null);
}

export default function GameField({currentMove, nextMove}) {
    return (
        <div className={'mt-6 w-full box-border bg-white px-8 pt-6 pb-7 shadow-md rounded-2xl'}>
            <div className={'flex justify-between'}>
                <div className={'flex flex-col justify-center'}>
                    <div className={'flex items-center'}>
                        <span className={'text-xl font-semibold mr-1'}>Ход:</span>
                        <Image src={currentMove} alt={'current move'}/>
                    </div>
                    <div className={'flex items-center'}>
                        <span className={'text-xs text-slate-400 mr-1'}>Следующий:</span>
                        <Image src={nextMove} alt={'next move'}/>
                    </div>
                </div>
                <div className={'flex'}>
                    <UiButton variant={'primary'} size={'md'} className={'mr-[11px] self-center'}>Ничья</UiButton>
                    <UiButton variant={'outline'} size={'md'} className={'self-center'}>Сдаться</UiButton>
                </div>
            </div>
            <div className={'flex w-full justify-center'}>
                <div className={'grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] mt-3'}>
                    {cells.map((cellRow, rowIndex) => {
                        return cellRow.map((_, colIndex) => {
                            return (
                                <button key={`${rowIndex}-${colIndex}`}
                                        className={'border border-slate-200 flex justify-center items-center'}>
                                </button>
                            )
                        })
                    })}
                </div>
            </div>
        </div>
    )
}