import React, { Component } from "react";
import Button from "../Button/Button.jsx";

const rates = {
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
	state = {
		amount: "",
		fromCoin: "COPPER",
		tooCoin: "SILVER",
	};

	// convertHandler = () => {
	// 	if (this.state.fromCoin !== this.state.tooCoin){
	// 		const result = this.state.amount 
	// 	}
	// }

	handleInputChange = event => {
		const target = event.target;
		const value = target.type === "select" ? target.selected : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<>
				<h3 styleName="">Currency Converter</h3>
				<form>
					<label for="amount">Amount</label>
					<input
						name="amount"
						type="text"
						onChange={this.handleInputChange}
						value={this.state.amount}
					/>
					<select
						name="fromCoin"
						type="select"
						onChange={this.handleInputChange}
						value={this.state.fromCoin}
					>
						<option selected value="COPPER">
							Copper{" "}
						</option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>

					<select
						name="tooCoin"
						type="select"
						onChange={this.handleInputChange}
						value={this.state.tooCoin}
					>
						<option value="COPPER">Copper </option>
						<option selected value="SILVER">
							Silver{" "}
						</option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<input type="text" id="result" value=""></input>
					<Button onClick={this.handleFormSubmit}>
						<input type="submit" id="convertBtn" value="Convert" />
					</Button>
				</form>
			</>
		);
	}
}

export default Converter;
