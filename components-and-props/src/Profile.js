import React from 'react'
import Detail from './Detail';
import Picture from './Picture';

export default function Profile(props) {
	console.log(props.data);
	return (
		<>
			<h1>This is the profile page</h1>
			<Detail name={props.data.name} email={props.data.email} />
			<Picture src={props.data.picture} />
		</>
		// Picture
		// Detail
	)
}
