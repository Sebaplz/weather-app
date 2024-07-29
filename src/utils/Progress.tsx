interface ProgressProps {
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  return (
    <div className="w-[90%] bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Progress;
