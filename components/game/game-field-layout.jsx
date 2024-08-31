export default function GameFieldLayout({children}) {
    return (
        <div className={'mt-6 w-full box-border bg-white px-8 pt-6 pb-7 shadow-md rounded-2xl'}>
            {children}
        </div>
    )
}