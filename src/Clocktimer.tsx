import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Counter from './Counter';
import Timer from './Timer';
import { ClocktimerType, ClocktimerTypeID, ClocktimerWrapper } from './common';
import XIcon from '../assets/bootstrap-icons/x.svg';

type ClocktimerProps = {
	id: number;
	type: ClocktimerType;
	activeCt: ClocktimerWrapper[];
	setActiveCt: React.Dispatch<React.SetStateAction<ClocktimerWrapper[]>>;
}

export default function Clocktimer({ id, type, activeCt, setActiveCt }: 
	ClocktimerProps) {
	
	const closeClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		setActiveCt((act) => act.filter(ct => ct.id != id));
	}

	let render : React.ReactElement;
	switch (type.tid) {
		case ClocktimerTypeID.Timer:

			render = <Timer />;

			break;

		case ClocktimerTypeID.Counter:

			render = <Counter />;

			break;
			
		default:	// [todo]
			throw "default";
	}

	const styling : React.CSSProperties = {
		width: "40%",
	};

	return (
		<Card style={ styling }>
			<Card.Header>
				<Row>
					<Col>{ type.name }</Col>
					<Col className="col-auto">
						<img src={ XIcon } onClick={ closeClickHandler } />
					</Col>
				</Row>
			</Card.Header>
			<Card.Body>
				{ render }
			</Card.Body>
		</Card>
	);
}