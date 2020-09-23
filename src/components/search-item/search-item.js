import { Link } from "gatsby";
import Layout from "../layout";
import React, { Component } from "react";
import styles from "./search-item.module.css";

class SearchItem extends Component {
  state = {
    itemName: "",
    searchCategory:"",
    itemSearched:"",
  };
  
	render() {
		return (
			<div>
				<h1>Search items</h1>
				<label for="searchCategory">What category?</label>
				<select
					value={this.state.value}
					onChange={this.handleChange}
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
				<label>
					What item?
					<input type="text" name="itemSearched" />
				</label>
			</div>
		);
	}
}

export default SearchItem;
