export type BoxObj = {
	color: string;
	data?: any;
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
			className="box w-full h-full rounded-xl"
			style={{
				backgroundColor: boxes[number].color,
				paddingTop: paddingTop,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				paddingBottom: paddingBottom,
			}}
		>
			{boxes[number].data ? boxes[number].data : null}
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
		</div>
	);
};
