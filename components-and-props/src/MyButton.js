import React from 'react'

export const MyButton = (props) => {
	// console.log(props);
	const formatted = props.myText.toUpperCase();
	return (
		<>
			<h1>hello {props.user}, this is your button</h1>
			<button>{formatted}</button>
		</>
	)
}

// export class MyButton extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<h1>hello {this.props.user}, this is your button</h1>
// 				<button>{this.props.myText}</button>
// 			</>
// 		)
// 	}
// }
