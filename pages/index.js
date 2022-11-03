import React from "react";
import { About } from "../components/About";
import FocusArea from "../components/FocusArea";
import Iconista from "../components/Iconista";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import { icon, text } from '../data/content-text'
import Team from "../components/Team";
import Mission from "../components/Mission";

export default function Home() {
  return (
    <Layout title="Home">
      <Landing/>
      <About />
      <Iconista item={icon} styling="-translate-y-10 sm:-translate-y-0 sm:my-10" />
      <Mission/>
      <FocusArea/>
      <Iconista item={text} styling="text-white p-10 " />
      <Team/>
    </Layout>
  );
}
