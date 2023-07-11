import React from "react";

const ResumeDS = () => {
	const [height, setHeight] = React.useState(0);
	React.useEffect(() => {
		setHeight(document.getElementById("flex-container").clientHeight);
	}, []);
	return (
		<div>
			<iframe
				src={process.env.PUBLIC_URL + "/Gregory Glatzer Resume.pdf"}
				title="Gregory Glatzer Data Science Resume"
				width="100%"
				height={`${height}px`}
			/>
		</div>
	);
};

const ResumeSWE = () => {
	const [height, setHeight] = React.useState(0);
	React.useEffect(() => {
		setHeight(document.getElementById("flex-container").clientHeight);
	}, []);
	return (
		<div>
			<iframe
				src={process.env.PUBLIC_URL + "/Gregory Glatzer Resume - SWE.pdf"}
				title="Gregory Glatzer Software Engineering Resume"
				width="100%"
				height={`${height}px`}
			/>
		</div>
	);
};

export { ResumeDS, ResumeSWE };
