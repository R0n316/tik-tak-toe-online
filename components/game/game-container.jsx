export default function GameContainer(props) {
    return (
        <div className={'w-full flex justify-center'}>
            <div className={'flex flex-col w-[616px]'}>
                {props.children}
            </div>
        </div>
    )
}