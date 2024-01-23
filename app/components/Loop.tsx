export type BoxObj = {
	color: string;
	data?: any;
	flexDirection?: string;
};

interface LoopProps {
	number: number;
	boxes: BoxObj[];
	paddingTop: string;
	paddingBottom: string;
	paddingRight: string;
	paddingLeft: string;
}
export const Loop: React.FC<LoopProps> = ({
	number,
	boxes,
	paddingTop,
	paddingLeft,
	paddingRight,
	paddingBottom,
}) => {
	return (
		<div
			className="box relative w-full h-full rounded-xl flex"
			style={{
				backgroundColor: boxes[number].color,
				paddingTop: paddingTop,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				paddingBottom: paddingBottom,
				flexDirection: boxes[number]?.flexDirection
					? boxes[number].flexDirection
					: "row",
				gap: "20px",
			}}
		>
			{number > 0 ? (
				<Loop
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
