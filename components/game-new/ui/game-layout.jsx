export function GameLayout({backLink, title, gameInfo, playersList, gameMoveInfo, actions, gameCells}) {
    return (
        <div>
            <div className={'flex flex-col'}>
                {backLink}
                {title}
                {gameInfo}
            </div>
            <div className={'min-h-20 grid grid-cols-2 gap-5 items-center shadow-md' +
                ' rounded-2xl mt-[17px] w-full box-border px-8 py-4 bg-white'}>
                {playersList}
            </div>
            <div className={'mt-6 w-full box-border bg-white px-8 pt-6 pb-7 shadow-md rounded-2xl'}>
                <div className={'flex justify-between'}>
                    {gameMoveInfo}
                    <div className={'flex'}>
                        {actions}
                    </div>
                </div>
                <div className={'flex w-full justify-center'}>
                    <div className={'grid grid-rows-[repeat(19,_30px)] grid-cols-[repeat(19,_30px)] mt-3'}>
                        {gameCells}
                    </div>
                </div>
            </div>
        </div>
    );
}