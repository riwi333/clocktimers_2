import React, { useState } from 'react';

export default function Counter() {

	const [ count, setCount ] = useState<number>(0);

	return (
		<>
			{ count }
		</>
	);
}