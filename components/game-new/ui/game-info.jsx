import Image from "next/image";
import starSrc from "@/public/icons/star.svg";
import usersCountSrc from "@/public/icons/users-count.svg";
import timeSrc from "@/public/icons/time.svg";

export default function GameInfo({playersCount, isRatingGame, timeMode}) {
    return (
        <div className={'flex mb-px items-center text-xs text-slate-400'}>
            {isRatingGame && <Image src={starSrc} alt={'star'} className={'mr-3'}/>}
            <Image src={usersCountSrc} alt={'users count'} className={'mr-1'}/>
            <span className={'text-xs mr-3 text-slate-400'}>{playersCount}</span>
            <Image src={timeSrc} alt={'time'} className={'mr-1'}/>
            <span>{timeMode}</span>
        </div>
    );
}