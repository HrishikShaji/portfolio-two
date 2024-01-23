interface LoopProps {
  number: number;
}
const Loop: React.FC<LoopProps> = ({ number }) => {
  return (
    <div
      className={`bg-neutral-900 border-white border-4  w-full h-full pl-20 py-10 pr-5`}
    >
      {number > 0 ? <Loop number={number - 1} /> : null}
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="h-screen w-full pl-10 py-10 pr-5">
      <Loop number={7} />
    </div>
  );
};
