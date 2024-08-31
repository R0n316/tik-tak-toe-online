export default function GameGrid({children}) {
    return (
        <div className={'flex w-full justify-center'}>
            <div className={'grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] mt-3'}>
                {children}
            </div>
        </div>
    )
}