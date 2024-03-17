import React, { useState, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Stack from 'react-bootstrap/Stack';

import { ClocktimerWrapper, ClocktimerTypes, ClocktimerType } from './common';
import Clocktimer from './Clocktimer';

export default function App() {

	const [ activeCt, setActiveCt ] = useState<ClocktimerWrapper[]>([]);
	const totalCtCount = useRef<number>(0);

	// console.log(activeCt);

	const addClickHandlers = 
		new Map<ClocktimerType, (e: React.MouseEvent<HTMLElement>) => void>();
	ClocktimerTypes.forEach((t) => {
		addClickHandlers.set(t, function(e : React.MouseEvent<HTMLElement>) {
			setActiveCt([
				...activeCt,
				{
					id: totalCtCount.current,
					type: t,
					render: (
						<Clocktimer 
							id={ totalCtCount.current }
							type={ t } 
							activeCt={ activeCt }
							setActiveCt={ setActiveCt } />
					),
				}
			]);
			
			totalCtCount.current++;
		});
	});
	
	const toolbarRender : React.ReactElement[] = ClocktimerTypes.map((t) => {
		return (
			<Button 
				key={ t.tid }
				onClick={ addClickHandlers.get(t) }
			>
				Add { t.name }
			</Button>
		);
	});

	const ctRender : React.ReactElement[] = activeCt?.map((ct) => {
		return (
			<li key={ ct.id }>
				{ ct.render }
			</li>
		);
	});

	return (
		<>
			<ButtonGroup>
				{ toolbarRender }
			</ButtonGroup>
			<div className="m-2 d-grid gap-3">
				{ ctRender }
			</div>
		</>
	);
}