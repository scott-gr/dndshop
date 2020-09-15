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
        <h2>Create New Item</h2>
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
        <textarea name="itemDescription" value={this.state.itemDescription} onChange={this.handleChange} rows="8" cols="30">This item protects you from mosquitos.</textarea>
				<label id="reqAttunementLabel">Requires Attunement?</label>
        <select value={this.state.value} onChange={this.handleChange} id="reqAttunement" name="reqAttunement">
          <option value="yes">yes</option>
          <option value="no">no</option>
          <option value="yesSpecific">yes, by a...</option>
        </select>
        <input type="text" name="specificAttune" id="specific-attune" />
        <button type="submit">Create Item</button>
			</form>
		);
	}
}

export default CreateItem;
