import React, { Component } from "react";
import Button from "../Button/Button.jsx";
import "./converter.css";

const rates =  {
	COPPER: {
		COPPER: 1,
		SILVER: 0.1,
		ELECTRUM: 0.02,
		GOLD: 0.01,
		PLATINUM: 0.001,
	},
	SILVER: {
		COPPER: 10,
		SILVER: 1,
		ELECTRUM: 0.2,
		GOLD: 0.1,
		PLATINUM: 0.01,
	},
	ELECTRUM: {
		COPPER: 50,
		SILVER: 5,
		ELECTRUM: 1,
		GOLD: 0.5,
		PLATINUM: 0.05,
	},
	GOLD: {
		COPPER: 100,
		SILVER: 10,
		ELECTRUM: 2,
		GOLD: 1,
		PLATINUM: 0.1,
	},
	PLATINUM: {
		COPPER: 1000,
		SILVER: 100,
		ELECTRUM: 20,
		GOLD: 10,
		PLATINUM: 1,
	},
};

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: Number(""),
			fromCoin: "",
			tooCoin: "",
			result: Number(""),
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}


	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'select' ? target.selected : target.value;
		const name = target.name
		
		this.setState({
			[name]: value
		})
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.tooCoin === "" || this.state.fromCoin === "") {
			alert("Please select coins");
		} else if (this.state.fromCoin === this.state.tooCoin) {
			this.setState({result: this.state.amount})
		}	else {
			this.setState({result: this.state.amount * rates[this.state.fromCoin][this.state.tooCoin]})
		}
		return parseFloat(this.state.result)
		}


	render() {
		return (
			<>
				<h3 styleName="subtitle">Coin Exchange</h3>
				<form onSubmit={this.handleFormSubmit}>
					<label id="amount">Old coins</label>
					<input
						name="amount"
						type="number"
						onChange={this.handleInputChange}
						value={this.state.amount}
					/>
					<label id="fromCoinLabel">from this coin...</label>
					<select
						name="fromCoin"
						type="select"
						onChange={this.handleInputChange}
						selected={this.state.fromCoin}
					>	<option disabled selected hidden>Select Coin...</option>
						<option value="COPPER">Copper</option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<label id="tooCoinLabel">to this coin</label>
					<select
						name="tooCoin"
						type="select"
						onChange={this.handleInputChange}
						selected={this.state.tooCoin}
					>
						<option disabled selected hidden>Select Coin...</option>
						<option value="COPPER">Copper </option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<label id="amount">New coins</label>
					<input 
						name="result" 
						type="number" 
						readOnly= {true}
						onChange= {this.handleInputChange} 
						value={this.state.result}
					/>
					<Button type="submit" value="Submit" text="Exhange Coins"></Button>
				</form>
			</>
		);
	}
}

export default Converter;
