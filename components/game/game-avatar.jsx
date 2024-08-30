import Image from "next/image";

export default function GameAvatar({icon}) {
    return (
        <div className={'w-5 h-5 rounded-full bg-white shadow absolute' +
            ' -left-1 -top-1 flex justify-center items-center'}>
            <Image src={icon} alt={'move icon'}/>
        </div>
    )
}