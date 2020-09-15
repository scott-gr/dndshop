import React from "react";
import { Link } from "gatsby";
import CreateItem from "../components/create-item/create-item.js"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const ItemPage = () => (
  <Layout>
    <h1>Items</h1>
    <CreateItem />

  </Layout>
)
export default ItemPage;
