import React from 'react';

export type ClocktimerWrapper = {
	id: number;
	type: ClocktimerType;
	render: React.JSX.Element;
};

export type ClocktimerType = {
	tid: number;
	name: string;
};

export enum ClocktimerTypeID {
	Invalid,
	Timer,
	Counter
};

export const ClocktimerTypes : ClocktimerType[] = [
	{
		tid: ClocktimerTypeID.Timer,
		name: "Timer",
	},
	{
		tid: ClocktimerTypeID.Counter,
		name: "Counter",
	}
]