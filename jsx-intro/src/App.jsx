// this is not needed anymore but will be used in older examples
// import React from 'react';

// import the image
import logo23 from './images/logo192.png';

function App() {
	const greet = () => <h1>Hi</h1>
	const greeting = 'Hello everybody';

	// you can only have one root element in a jsx expression
	// <></> this is a react fragment
	// reserved js keywords get replaced in jsx
	// class -> className
	// for -> htmlFor
	// attributes are camelCased
	// onchange -> onChange 
	// onclick -> onClick

	const myStyle = {
		backgroundColor: 'blue'
	}

	const element = <>
		<h1 className="heading" style={{
			backgroundColor: 'pink'
		}}>First</h1>
		<h3 style={myStyle}>Second</h3>
		<img src={logo23} />
	</>

	// return <div>{greet()}</div>
	return element
}

export default App