import Profile from "@/components/profile/profile";
import GameAvatar from "@/components/game/game-avatar";

export default function PlayerInfo({playerInfo, isRight }) {
    return (
        <div className={`relative flex items-center ${isRight ? 'flex-row-reverse' : ''}`}>
            <div className={'relative'}>
                <Profile avatar={playerInfo.avatar}
                         rating={playerInfo.rating}
                         name={playerInfo.name}
                         className={'w-[180px]'} />
                <GameAvatar symbol={playerInfo.symbol} />
            </div>
            <div className={'w-px bg-slate-200 h-8 mx-4'}/>
            <div className={'text-xl font-semibold'}>01:08</div>
        </div>
    );
}
