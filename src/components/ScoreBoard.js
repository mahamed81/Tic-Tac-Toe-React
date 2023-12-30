
 
export const Score = ({score}) => {
    const {xScore, oScore} = score;

    return (
        <div>
            <span>{xScore}</span>
            <span>{oScore}</span>

        </div>
    );
};