import React, { useEffect, useState, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Timer() {

	const [ displayString, setDisplayString ] = useState<string>("00:00:00");
	const [ stopped, setStopped ] = useState<boolean>(true);
	const stoppedRef = useRef<boolean>(stopped);
	const intervalID = useRef<NodeJS.Timeout>();
	const prevTime_ms = useRef<number | null>(null);
	const totalElapsedTime_ms = useRef<number>(0);

	const stopStartClickHandler = (e: React.MouseEvent<HTMLElement>) => {

		setStopped((s) => {

			// set state and mirror ref so value of `stoppedRef.current within
			// the below `setInterval() closure is up-to-date
			stoppedRef.current = !s;
			return !s
		});
	}

	const resetClickHandler = (e: React.MouseEvent<HTMLElement>) => {

		totalElapsedTime_ms.current = 0;
	}

	// component mount
	useEffect(() => {

		intervalID.current = setInterval(() => {
			
			if (prevTime_ms.current == null) {
				prevTime_ms.current = Date.now();
			} else {
				let nowTime_ms = Date.now();

				if (! stoppedRef.current) {
					let elapsed_ms = nowTime_ms - prevTime_ms.current;
					totalElapsedTime_ms.current += elapsed_ms;
				}
					
				let dateString = 
					new Date(totalElapsedTime_ms.current).toUTCString();
				let display = dateString.slice(17, 26);
				setDisplayString(display);

				prevTime_ms.current = nowTime_ms;
			}
		}, 500);

		return () => clearInterval(intervalID.current);

	}, []);

	return (
		<>
			<div className="text-center">
				<p className="h2 fw-bold">{ displayString }</p>
			</div>
			<InputGroup>
				<Form.Control
					type="text"
					placeholder="enter description here" />
				<Button 
					onClick={ stopStartClickHandler }
				>
					{ stopped ? "start" : "stop" }
				</Button>
				<Button 
					onClick={ resetClickHandler }
				>
					reset
				</Button>	
			</InputGroup>
		</>
	);
}