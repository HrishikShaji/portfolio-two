export type BoxObj = {
  color: string;
  data?: any;
  flexDirection: "row" | "column";
};

interface LoopProps {
  number: number;
  boxes: BoxObj[];
  paddingTop: string;
  paddingBottom: string;
  paddingRight: string;
  paddingLeft: string;
  boxName: string;
}
export const Loop: React.FC<LoopProps> = ({
  number,
  boxes,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  boxName,
}) => {
  return (
    <div
      className={`box ${boxName}-box relative w-full h-full rounded-xl flex`}
      style={{
        backgroundColor: boxes[number].color,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        flexDirection: boxes[number].flexDirection,
        gap: "20px",
      }}
    >
      {number > 0 ? (
        <Loop
          boxName={boxName}
          boxes={boxes}
          number={number - 1}
          paddingTop={paddingTop}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingBottom={paddingBottom}
        />
      ) : null}
      {boxes[number].data ? boxes[number].data : null}
    </div>
  );
};
