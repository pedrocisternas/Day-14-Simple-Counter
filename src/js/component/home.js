import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	const [userNum, setUserNum] = useState(null);
	return (
		<>
			<div className="container-fluid d-flex justify-content-center">
				<button
					className="btn btn-danger btn-lg"
					onClick={() => {
						props.setRun();
					}}>
					Stop / Resume
				</button>
				<button
					className="btn btn-primary btn-lg"
					onClick={() => {
						props.myFunction(0);
					}}>
					Reset
				</button>
				<button
					className="btn btn-success btn-lg"
					onClick={() => {
						props.myFunction(userNum);
					}}>
					Set
				</button>
			</div>
			<div className="container-fluid d-flex justify-content-center input-group input-group-lg m-2">
				<input
					onChange={e => {
						setUserNum(e.target.value);
					}}
					type="number"
					placeholder="Pick a 6 digit number"
					aria-label="Large"
				/>
			</div>
			<div className="container-fluid d-flex justify-content-center ml-2">
				<h1>{props.number1}</h1>
				<h1>{props.number2}</h1>
				<h1>{props.number3}</h1>
				<h1>{props.number4}</h1>
				<h1>{props.number5}</h1>
				<h1>{props.number6}</h1>
			</div>
		</>
	);
}

Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string,
	myFunction: PropTypes.func,
	setRun: PropTypes.func,
	isRunning: PropTypes.bool
};
