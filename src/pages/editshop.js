import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./editshop.module.css";
import SearchItem from "../components/search-item/search-item.js";
import CreateItem from "../components/create-item/create-item.js";


const EditShopPage = () => (
	<Layout>
		<SEO title="Edit Shop" />
		<div className={styles.newitemcontainer}>
			<div className={styles.newitemcolumn}> 
        <SearchItem />      
        <CreateItem />
      </div>
			<div className={styles.editshopcolumn}>
        <h1 id={styles.editshopheader}>Edit Shop</h1>
      </div>
		</div>
	</Layout>
);

export default EditShopPage;
