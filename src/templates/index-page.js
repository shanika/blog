import React from "react";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = () => (
  <div>
    <BlogRoll />
  </div>
);

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
