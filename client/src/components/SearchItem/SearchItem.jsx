import React from "react";
import "./searchitem.css";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

const SearchItem = (props) => {

		return (
			<>
				<form styleName= "search" onSubmit={handleSubmit}>
					<select
						value={props.category}
						onChange={props.handleInputChange}
						id="searchCategory"
						name="searchCategory"
					>
						<option>search category...</option>
						<option value="armor">armor</option>
						<option value="weapon">weapon</option>
						<option value="tool">tool</option>
						<option value="magic item">magic item</option>
						<option value="gear">gear</option>
						<option value="mount/vehicle">mounts & vehicles</option>
						<option value="trade good">trade good</option>
						<option value="food and drink">food and drink</option>
						<option value="expense">expense</option>
					</select>
					<Input
						type="text"
						placeholder="Item Name..."
						name="search"
						onChangeFunction={this.handleInputChange}
					/>
					<Button buttonText="Search" onClick = {props.handleFormSubmit} />
				</form>
			</>
		);
	}

export default SearchItem;
