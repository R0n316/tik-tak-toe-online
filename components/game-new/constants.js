import avatarSrc from "@/public/avatar.png";
import avatar1Src from "@/public/avatar-1.png";
import avatar2Src from "@/public/avatar-2.png";
import avatar3Src from "@/public/avatar-3.png";

export const GAME_SYMBOLS = {
    ZERO: {
        value: 'zero',
        background: 'bg-green-300/30'
    },
    CROSS: {
        value: 'cross',
        background: 'bg-red-300/30'
    },
    TRIANGLE: {
        value: 'triangle',
        background: 'bg-purple-300/30'
    },
    SQUARE: {
        value: 'square',
        background: 'bg-pink-300/30'
    }
}

export const MOVE_ORDER = [
    GAME_SYMBOLS.CROSS,
    GAME_SYMBOLS.ZERO,
    GAME_SYMBOLS.TRIANGLE,
    GAME_SYMBOLS.SQUARE
];

export const PLAYERS = [
    {id:1, name: 'Alex', rating: 1230, avatar: avatarSrc, symbol: GAME_SYMBOLS.CROSS},
    {id:2, name: 'VereIntedinglapotur', rating: 850, avatar: avatar1Src, symbol: GAME_SYMBOLS.ZERO},
    {id:3, name: 'Kate', rating: 1400, avatar: avatar2Src, symbol: GAME_SYMBOLS.TRIANGLE},
    {id:4, name: 'Vitalik', rating: 760, avatar: avatar3Src, symbol: GAME_SYMBOLS.SQUARE},
];