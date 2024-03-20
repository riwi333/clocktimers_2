import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// integer up-down counter with a reset (0)

export default function Counter() {

	const [ count, setCount ] = useState<number>(0);

	return (
		<>
			<div className="text-center">
				<p className="h2 fw-bold">{ count }</p>
			</div>
				<InputGroup>
					<Form.Control 
						type="text" 
						placeholder="enter description here" />
					<Button 
						onClick={ () => setCount(c => c + 1) }
					>
						+1
					</Button>
					<Button
						onClick={ () => setCount(c => c - 1) }
					>
						-1
					</Button>
					<Button 
						onClick={ () => setCount(0) }
					>
						0
					</Button>
				</InputGroup>
		</>
	);
}