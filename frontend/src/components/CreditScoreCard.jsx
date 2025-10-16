import { getScoreColor } from "../utils";

const CreditScoreCard = ({ score }) => {
    const scoreColorClass = getScoreColor(score);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Credit Score</h2>
            <div className={`text-6xl font-bold ${scoreColorClass}`}>{score}</div>
            <p className="text-gray-500 text-sm mt-2">out of 900</p>
        </div>
    );
};

export default CreditScoreCard;