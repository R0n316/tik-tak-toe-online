export function GameLayout({backLink, title, gameInfo, playersList}) {
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
        </div>
    );
}