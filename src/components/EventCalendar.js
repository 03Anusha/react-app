
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalendar extends Component {

	render() {
		return (
			<div>
				<FullCalendar

					defaultView="dayGridMonth"
					plugins={[dayGridPlugin]}
					events={[
						{ title: 'order:1', date: '2021-11-17' },
						{ title: 'order:2', date: '2021-1-10' },
						{ title: 'order:3', date: '2021-10-17' },
						{ title: 'order:4', date: '2020-11-17' },
						{ title: 'order:5', date: '2021-1-10' },
						{ title: 'order:6', date: '2020-11-16' },
						{ title: 'order:7', date: '2021-1-5' },
						{ title: 'order:8', date: '2021-9-5' },
						{ title: 'order:9', date: '2020-11-15' },
					]}
				/>
			</div>
		)
	}
}