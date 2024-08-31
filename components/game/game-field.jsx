import GameFieldLayout from "@/components/game/game-field-layout";
import GameMoveInfo from "@/components/game/game-move-info";
import GameGrid from "@/components/game/game-grid";
import GameCell from "@/components/game/game-cell";
import GameSymbol from "@/components/game/game-symbol";

export default function GameField({cells, currentMove, nextMove, handleCellClick}) {

    return (
        <GameFieldLayout>
            <GameMoveInfo currentMove={currentMove} nextMove={nextMove}/>
            <GameGrid>
                {cells.map((symbol, index) => {
                    return (
                        <GameCell key={index} onClick={() => handleCellClick(index)}>
                            {symbol && <GameSymbol className={'w-5 h-5'} symbol={symbol}/>}
                        </GameCell>
                    )
                })}
            </GameGrid>
        </GameFieldLayout>
    );
}