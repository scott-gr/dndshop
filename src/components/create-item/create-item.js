import { Link } from "gatsby";
import Layout from "../layout";
import React, { Component } from "react";
import styles from "./create-item.module.css";

class CreateItem extends Component {
	state = {
		itemName: "",
		itemType: "",
	};

	render() {
		return (
			<form>
				<label>
					Item Name
					<input type="text" name="itemName" />
				</label>
				<label for="itemCategory">What category?</label>
				<select value={this.state.value} onChange={this.handleChange} id="itemCategory" name="itemCategory">
					<option value="armor">armor</option>
					<option value="weapon">weapon</option>
					<option value="tool">tool</option>
					<option value="magic-item">magic item</option>
          <option value="gear">gear</option>
          <option value="mount-vehicle">mounts & vehicles</option>
          <option value="expense">expense</option>
          <option value="other">other</option>
				</select>
				<button type="submit">Create Item</button>
			</form>
		);
	}
}

export default CreateItem;
