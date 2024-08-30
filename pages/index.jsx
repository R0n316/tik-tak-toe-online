import Header from "../components/header/header";
import GameContainer from "@/components/game/game-container";
import {GameTitle} from "@/components/game/game-title";
import GameInfo from "@/components/game/game-info";

export default function HomePage(){
    return (
        <div className={'bg-slate-50 min-h-screen'}>
            <Header/>
            <GameContainer>
                <GameTitle/>
                <GameInfo/>
            </GameContainer>
        </div>
    )
}