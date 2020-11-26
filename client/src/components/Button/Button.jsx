import React from "react";
import "./button.css";

export default class Button extends React.Component {
	render() {
		return <button type={this.props.type}>{this.props.text}</button>;
	}
}
