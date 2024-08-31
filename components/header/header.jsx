import Image from "next/image";
import logoSrc from "@/public/logo.svg";
import avatarSrc from "@/public/avatar.png";
import moreSrc from "@/public/icons/more.svg";
import Profile from "@/components/profile/profile";
import UiButton from "@/components/ui-kit/ui-button";

export default function Header() {
    return <div className={'px-8 flex items-center h-[100px] bg-white shadow-lg mb-4'}>
        <Image src={logoSrc} alt={'logo'}/>
        <div className={'w-px h-8 bg-slate-200 mx-6'}/>
        <UiButton className={'w-44'} variant={'primary'} size={'lg'}>Играть</UiButton>
        <button className={'ml-auto flex items-center gap-2 text-start'}>
            <Profile avatar={avatarSrc} rating={1230} name={'Alex'}/>
            <Image src={moreSrc} alt={'more'}/>
        </button>
    </div>
}