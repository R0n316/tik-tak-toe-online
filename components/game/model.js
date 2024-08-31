import {MOVE_ORDER} from "@/components/game/constants";

export function getNextMove(currentMove, playersCount) {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
    const gap = Math.floor(sequenceSize / 2);

    const compareElements = (indexes) => {
        let result = true;
        for (let i = 1; i < indexes.length; i++) {
            result &&= !!cells[indexes[i]];
            result &&= cells[indexes[i]] === cells[indexes[i - 1]];
        }
        return result;
    }

    const getSequenceIndexes = (index) => {
        const result = [
            [], // -
            [], // \
            [], // /
            [] // |
        ]
        for (let i = 0; i < sequenceSize; i++) {
            result[0].push(i - gap + index);
            result[1].push(fieldSize * (i - gap) + (i - gap) + index);
            result[2].push(-fieldSize * (i - gap) + (i - gap) + index);
            result[3].push(fieldSize * (i - gap) + index);
        }
        return result;
    }
    for (let i = 0; i < cells.length; i++) {
        if (cells[i]) {
            const indexRows = getSequenceIndexes(i);
            const winnerIndexes = indexRows.find(row => compareElements(row));
            if (winnerIndexes) {
                return winnerIndexes;
            }
        }
    }
    return undefined;
}