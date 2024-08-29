import Image from "next/image";
import logoSrc from "../../public/logo.svg";
import avatarSrc from "../../public/avatar.png";
import moreSrc from "../../public/more.svg";

export default function Header() {
    return <div className={'px-8 flex items-center h-[100px] bg-white shadow-lg'}>
        <Image src={logoSrc} alt={'logo'}/>
        <div className={'w-px h-8 bg-slate-200 mx-6'}/>
        <button className={'w-44 px-5 py-2 text-white text-2xl rounded-lg ' +
            'bg-teal-600 flex justify-center items-center hover:bg-teal-500 transition-colors duration-300'}>
            Играть
        </button>
        <button className={'ml-auto flex items-center gap-2 text-start'}>
            <Image width={48} height={48} className={'mr-2'} src={avatarSrc} alt={'avatar'} unoptimized/>
            <div className={'flex flex-col h-full mr-3'}>
                <div className={'text-teal-600 text-lg'}>Alex</div>
                <div className={'text-slate-400 text-xs'}>Рейтинг: 1230</div>
            </div>
            <Image src={moreSrc} alt={'more'}/>
        </button>
    </div>
}