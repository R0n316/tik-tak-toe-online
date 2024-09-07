import Image from "next/image";
import GameRating from "@/components/game/game-rating";

export default function Profile({avatar, rating, name, className}) {
    return (
        <div className={`flex ${className}`}>
            <Image width={48} height={48} className={'mr-2'} src={avatar} alt={'avatar'} unoptimized/>
            <div className={'flex flex-col h-full mr-3 overflow-hidden'}>
                <div className={'text-teal-600 text-lg overflow-hidden text-ellipsis'}>{name}</div>
                <GameRating rating={rating}/>
            </div>
        </div>
    )
}