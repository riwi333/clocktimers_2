import React, { useEffect, useState, useRef } from 'react';

export default function Timer() {

	const [ displayString, setDisplayString ] = useState<string>("00:00:00");
	const intervalID = useRef<NodeJS.Timeout>();

	// component mount
	useEffect(() => {

	}, []);

	return (
		<>
			{ displayString }
		</>
	);
}