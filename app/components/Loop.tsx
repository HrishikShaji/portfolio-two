interface LoopProps {
	number: number;
	colors: string[];
	paddingTop: string;
	paddingBottom: string;
	paddingRight: string;
	paddingLeft: string;
}
export const Loop: React.FC<LoopProps> = ({
	number,
	colors,
	paddingTop,
	paddingLeft,
	paddingRight,
	paddingBottom,
}) => {
	return (
		<div
			className="box w-full h-full"
			style={{
				backgroundColor: colors[number],
				paddingTop: paddingTop,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				paddingBottom: paddingBottom,
			}}
		>
			{number > 0 ? (
				<Loop
					colors={colors}
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
