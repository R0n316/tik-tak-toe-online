import Profile from "@/components/profile/profile";
import GameAvatar from "@/components/game-new/ui/game-avatar";

export default function PlayerInfo({playerInfo, isRight, isTimerRunning, seconds}) {
    const minutesString = String(Math.floor(seconds / 60)).padStart(2,'0');
    const secondsString = String(seconds % 60).padStart(2,'0')
    const isDanger = seconds < 10;
    return (
        <div className={`relative flex items-center ${isRight ? 'flex-row-reverse' : ''}`}>
            <div className={'relative'}>
                <Profile avatar={playerInfo.avatar}
                         rating={playerInfo.rating}
                         name={playerInfo.name}
                         className={'w-[180px]'}/>
                <GameAvatar symbol={playerInfo.symbol}/>
            </div>
            <div className={'w-px bg-slate-200 h-8 mx-4'}/>
            <div className={`text-xl font-semibold
             ${isDanger ? 'text-orange-600' : ''}
             ${!isTimerRunning ? 'text-gray-300' : ''}`}>
                {minutesString}:{secondsString}
            </div>
        </div>
    );
}