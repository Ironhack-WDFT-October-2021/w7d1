import React from 'react'

export default function Detail(props) {
	return (
		<>
			<h1>These are the user details</h1>
			<h3>Name: {props.name}</h3>
			<h3>Email: {props.email}</h3>
		</>
	)
}
