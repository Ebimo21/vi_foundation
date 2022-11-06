import React from "react";
import { About } from "../components/About";
import FocusArea from "../components/FocusArea";
import Iconista from "../components/Iconista";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import { icon, text } from '../data/content-text'
import Team from "../components/Team";
import Mission from "../components/Mission";
import SendMessage from "../components/SendMessage";
import client from '../config/sanityClient'


export default function Home({menuItem, fc, core , team}) {
  
  return (
    <Layout title="Home" menu={menuItem}>
      <Landing />
      <About />
      <Iconista item={icon} styling="-translate-y-5 sm:-translate-y-0 sm:my-10" />
      <Mission data={core}/>
      <FocusArea data={fc}/>
      <Iconista item={text} styling="text-white p-10 " />
      <SendMessage />
      <Team data={team}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const focusArea = await client.fetch(`*[_type == "focusArea"]`);
  const fc = focusArea[0]
  const core = await client.fetch(`*[_type == "core"]`);
  const teams = await client.fetch(`*[_type == "team"]`);
  const team = teams[0]
  
  return {
    props: { menuItem, fc, core, team }
  };
}
