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