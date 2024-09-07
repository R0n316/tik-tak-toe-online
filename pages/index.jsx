import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import avatarSrc from "@/public/avatar.png";
import {GAME_SYMBOLS} from "@/components/game/constants";
import avatar1Src from "@/public/avatar-1.png";
import avatar2Src from "@/public/avatar-2.png";
import avatar3Src from "@/public/avatar-3.png";
import Game from "@/components/game-new/game";

const players = [
    {id:1, name: 'Alex', rating: 1230, avatar: avatarSrc, symbol: GAME_SYMBOLS.CROSS},
    {id:2, name: 'VereIntedinglapotur', rating: 850, avatar: avatar1Src, symbol: GAME_SYMBOLS.ZERO},
    {id:3, name: 'Kate', rating: 1400, avatar: avatar2Src, symbol: GAME_SYMBOLS.TRIANGLE},
    {id:4, name: 'Vitalik', rating: 760, avatar: avatar3Src, symbol: GAME_SYMBOLS.SQUARE},
];

export default function HomePage(){

    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            <Header/>
            <GameContainer>
                <HomePageLayout>
                    <Game/>
                </HomePageLayout>
            </GameContainer>
        </div>
    )
}

function HomePageLayout({children}) {
    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            {children}
        </div>
    );
}