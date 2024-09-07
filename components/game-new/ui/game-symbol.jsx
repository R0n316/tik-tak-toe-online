import {GAME_SYMBOLS} from "@/components/game-new/constants";
import Image from "next/image";
import cross from "@/public/icons/cross.svg";
import zero from "@/public/icons/zero.svg";
import triangle from "@/public/icons/triangle.svg";
import square from "@/public/icons/square.svg";

export default function GameSymbol({ symbol, className }) {
    const icon = {
        [GAME_SYMBOLS.CROSS.value]: cross,
        [GAME_SYMBOLS.ZERO.value]: zero,
        [GAME_SYMBOLS.TRIANGLE.value]: triangle,
        [GAME_SYMBOLS.SQUARE.value]: square,
    }[symbol.value] ?? cross;
    return <Image className={className} src={icon} alt={icon}/>;
}
