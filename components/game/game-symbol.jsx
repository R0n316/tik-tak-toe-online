import {GAME_SYMBOLS} from "@/components/game/constants";
import Image from "next/image";
import cross from "@/public/icons/cross.svg";
import zero from "@/public/icons/zero.svg";
import triangle from "@/public/icons/triangle.svg";
import square from "@/public/icons/square.svg";

export default function GameSymbol({ symbol, className }) {
    const icon = {
        [GAME_SYMBOLS.CROSS]: cross,
        [GAME_SYMBOLS.ZERO]: zero,
        [GAME_SYMBOLS.TRIANGLE]: triangle,
        [GAME_SYMBOLS.SQUARE]: square,
    }[symbol] ?? cross;
    return <Image className={className + ' w-3 h-3'} src={icon} alt={icon}/>;
}
