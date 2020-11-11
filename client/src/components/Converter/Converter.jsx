import React, { Component } from "react";
import Button from "../Button/Button.jsx"

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

let fromCoin = document.getElementById("fromCoin");
let tooCoin = document.getElementById("tooCoin");
let amount = document.getElementById("amount");
let convertedCoin = document.getElementById("result");

const convertCoin = () => {
	if (rates[fromCoin.value] && rates[fromCoin.value][tooCoin.value]) {
		convertedCoin = amount * rates[fromCoin.value][tooCoin.value];
		console.log(convertedCoin);
	}
	return convertedCoin;
};

document.getElementById("convertBtn").addEventListener("click", convertCoin()
})

class Converter extends Component {
	render() {
		return (
			<>
				<h3 styleName="">Currency Converter</h3>
				<form>
					<label for="amount">Amount</label>
					<input type="text" id="amount" value="" />
					<select id="fromCoin">
						<option value="COPPER">Copper </option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>

					<select id="tooCoin">
						<option value="COPPER">Copper </option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<input type="text" id="result" value=""></input>
					<Button><input type="submit" id="convertBtn" value="Convert"/></Button>
				</form>
			</>
		);
	}
}

export default Converter;
