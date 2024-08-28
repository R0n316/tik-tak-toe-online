import {GameInfo} from "./game-info";
import {GameLayout} from "./game-layout";
import {ResetButton} from "./reset-button";

export function GameField({cells,currentStep,winnerSequence,handleCellClick,
                              handleRestartButtonClick,winnerSymbol,isDraw}) {
    return <div className={'flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black'}>
        <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep}/>
        <GameLayout cells={cells} winnerSequence={winnerSequence} onClick={handleCellClick}/>
        <ResetButton onClick={handleRestartButtonClick}/>
    </div>
}