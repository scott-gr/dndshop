import React, { Component } from "react";

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

if (rates[select.value] && rates[select.value][select1.value]) {
	result.value = amount * rates[select.value][select1.value];
}

class Converter extends Component {
	render() {
		return (
			<>
				<h3 styleName="">Currency Converter</h3>
				<form>
					<label for="amount">Amount</label>
					<input type="text" id="amount" value="" />
					<select id="from">
						<option value= "COPPER" >Copper </option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<select id="too">
          <option value= "COPPER" >Copper </option>
						<option value="SILVER">Silver </option>
						<option value="ELECTRUM">Electrum </option>
						<option value="GOLD">Gold </option>
						<option value="PLATINUM">Platinum </option>
					</select>
					<input type="text" id="result" value=""></input>
				</form>
			</>
		);
	}
}

export default Converter;
