import React from "react";

const ResumeDS = () => {
	return (
		<div>
			<iframe
				src={process.env.PUBLIC_URL + "/Gregory Glatzer Resume.pdf"}
				title="PDF Viewer"
				width="100%"
				height="500px"
			/>
		</div>
	);
};

const ResumeSWE = () => {
	return (
		<div>
			<iframe
				src={process.env.PUBLIC_URL + "/Gregory Glatzer Resume - SWE.pdf"}
				title="PDF Viewer"
				width="100%"
				height="500px"
			/>
		</div>
	);
};

export { ResumeDS, ResumeSWE };
