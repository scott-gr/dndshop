import React, { Component } from "react";
import "./createitem.css"

class CreateItem extends Component {
	state = {
		itemName: "",
		itemCategory: "",
		itemDescription: "",
		reqAttunement: "",
		itemPrice: "",
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.togglePanel = this.togglePanel.bind(this);
	}
	togglePanel(e) {
		this.setState({ open: !this.state.open });
	}

	render() {
		return (
			<div>
				<button
					onClick={e => this.togglePanel(e)}
					stylename= "collapsebutton"
				>
					{this.props.title}Create Item
				</button>
				{this.state.open ? (
					<div stylename= "collapsecontent">
						{this.props.children}
						<form>
							<h2>Create New Item</h2>
							<label>
								Item Name
								<input type="text" name="itemName" />
							</label>
							<label for="itemCategory">What category?</label>
							<select
								value={this.state.value}
								onBlur={this.handleChange}
								id="itemCategory"
								name="itemCategory"
							>
								<option>choose category</option>
								<option value="armor">armor</option>
								<option value="weapon">weapon</option>
								<option value="tool">tool</option>
								<option value="magic-item">magic item</option>
								<option value="gear">gear</option>
								<option value="mount-vehicle">mounts & vehicles</option>
								<option value="expense">expense</option>
								<option value="other">other</option>
							</select>
							<textarea
								name="itemDescription"
								value={this.state.itemDescription}
								onBlur={this.handleChange}
								rows="8"
								cols="30"
							>
								This item protects you from mosquitos.
							</textarea>
							<label id="reqAttunementLabel" for="reqAttunement">
								Requires Attunement?
							</label>
							<select
								value={this.state.value}
								onBlur={this.handleChange}
								id="reqAttunement"
								name="reqAttunement"
							>
								<option value="yes">yes</option>
								<option value="no">no</option>
							</select>
							<label>
								Price
								<input type="number" name="itemPrice" />
							</label>
							<button type="submit">Create Item</button>
						</form>
					</div>
				) : null}
			</div>
		);
	}
}

export default CreateItem;