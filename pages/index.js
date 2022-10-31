import Script from "next/script";
import React from "react";
import Landing from "../components/Landing";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Landing/>
    </Layout>
  );
}
