import Image from "next/image";
import GameRating from "@/components/game/game-rating";

export default function Profile({avatar}) {
    return (
        <div className={'flex'}>
            <Image width={48} height={48} className={'mr-2'} src={avatar} alt={'avatar'} unoptimized/>
            <div className={'flex flex-col h-full mr-3'}>
                <div className={'text-teal-600 text-lg'}>Alex</div>
                <GameRating/>
            </div>
        </div>
    )
}