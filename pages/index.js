import React from "react";
import { About } from "../components/About";
import FocusArea from "../components/FocusArea";
import Iconista from "../components/Iconista";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
// import { icon, text, core, focusArea, team} from '../data/content-text'
import { icon, text} from '../data/content-text'
import Team from "../components/Team";
import Mission from "../components/Mission";
import SendMessage from "../components/SendMessage";
import client from '../config/sanityClient'

import menuItem from "../data/menuItem";
export default function Home({menuItem, focusArea, core , team}) {
  
  return (
    <Layout title="Home" menu={menuItem}>
      <Landing />
      <About />
      <Iconista item={icon} styling="-translate-y-5 sm:-translate-y-0 sm:my-10" />
      <Mission data={core}/>
      <FocusArea data={focusArea}/>
      <Iconista item={text} styling="text-white p-10 " />
      <SendMessage />
      <Team data={team}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const focusAreas = await client.fetch(`*[_type == "focusArea"]`);
  const focusArea = focusAreas[0]
  const core = await client.fetch(`*[_type == "core"]`);
  const teams = await client.fetch(`*[_type == "team"]`);
  const team = teams[0]
  
  return {
    props: { menuItem, focusArea, core, team }
  };
}
