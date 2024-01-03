import './ScoreBoard.css'
 
export const Score = ({score, xPlayer}) => {
    const {xScore, oScore} = score;

    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlayer && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlayer && "inactive"}`}> O - {oScore}</span>

        </div>
    );
};