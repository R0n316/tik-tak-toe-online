import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";
import GameField from "@/components/game/game-field";
import crossSrc from "@/public/icons/cross.svg";
import zeroSrc from "@/public/icons/zero.svg";
import {useState} from "react";

export default function HomePage(){
    const [playersCount] = useState(2);

    return (
        <div className={'bg-slate-50 min-h-screen pb-[124px]'}>
            <Header/>
            <GameContainer>
                <GameTitle playersCount={playersCount}/>
                <GameInfo playersCount={playersCount}/>
                <GameField playersCount={playersCount} currentMove={zeroSrc} nextMove={crossSrc}/>
            </GameContainer>
        </div>
    )
}