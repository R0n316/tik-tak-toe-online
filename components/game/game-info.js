import Profile from "@/components/profile/profile";
import GameAvatar from "@/components/game/game-avatar";
import avatarSrc from "@/public/avatar.png";
import avatar1Src from "@/public/avatar-1.png";
import crossSrc from "@/public/icons/cross.svg";
import zeroSrc from "@/public/icons/zero.svg"

export default function GameInfo() {
    return (
        <div className={'h-20 shadow-md rounded-2xl mt-[17px] w-full box-border px-8 py-4 bg-white flex items-center'}>
            <div className={'w-full flex justify-center items-center'}>
                <div className={'relative'}>
                    <Profile avatar={avatarSrc}/>
                    <GameAvatar icon={crossSrc}/>
                </div>

                <div className={'w-[168px] h-[35px] flex justify-around items-center' +
                    ' box-border px-3 mx-3 border-x-2 border-slate-200'}>
                    <div className={'text-xl font-semibold'}>01:08</div>
                    <div className={'text-xl font-semibold text-orange-600'}>01:08</div>
                </div>

                <div className={'relative'}>
                    <Profile avatar={avatar1Src}/>
                    <GameAvatar icon={zeroSrc}/>
                </div>
            </div>
        </div>
    )
}