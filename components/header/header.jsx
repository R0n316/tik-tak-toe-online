import Image from "next/image";
import logoSrc from "@/public/logo.svg";
import avatarSrc from "@/public/avatar.png";
import moreSrc from "@/public/icons/more.svg";
import Profile from "@/components/profile/profile";

export default function Header() {
    return <div className={'px-8 flex items-center h-[100px] bg-white shadow-lg mb-4'}>
        <Image src={logoSrc} alt={'logo'}/>
        <div className={'w-px h-8 bg-slate-200 mx-6'}/>
        <button className={'w-44 px-5 py-2 text-white text-2xl rounded-lg ' +
            'bg-teal-600 flex justify-center items-center hover:bg-teal-500 transition-colors duration-300'}>
            Играть
        </button>
        <button className={'ml-auto flex items-center gap-2 text-start'}>
            <Profile avatar={avatarSrc}/>
            <Image src={moreSrc} alt={'more'}/>
        </button>
    </div>
}