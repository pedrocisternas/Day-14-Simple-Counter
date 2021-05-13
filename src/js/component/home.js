import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	const [userNum, setUserNum] = useState(null);
	return (
		<>
			<div>
				<button
					onClick={() => {
						props.myFunction(userNum);
					}}>
					Send
				</button>
				<input
					onChange={e => {
						setUserNum(e.target.value);
					}}
					type="number"
					placeholder="Pick a 6 digit number"
				/>
			</div>
			<div className="container d-flex">
				<div>{props.number1}</div>
				<div>{props.number2}</div>
				<div>{props.number3}</div>
				<div>{props.number4}</div>
				<div>{props.number5}</div>
				<div>{props.number6}</div>
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
	myFunction: PropTypes.func
};
