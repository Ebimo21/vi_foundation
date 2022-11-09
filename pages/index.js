// import { icon, text, core, focusArea, team} from '../data/content-text'
import React from "react";
import { About } from "../components/About";
import FocusArea from "../components/FocusArea";
import Iconista from "../components/Iconista";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Team from "../components/Team";
import Mission from "../components/Mission";
import SendMessage from "../components/SendMessage";
import client from '../config/sanityClient'

import menuItem from "../data/menuItem";
export default function Home({menuItem, focusArea, core , team, heading, about, getintouch, icon}) {
  console.log(icon)
  return (
    <Layout title="Home" menu={menuItem}>
      <Landing menu={heading} />
      <About data={about} />
      <Iconista items={icon} styling="-translate-y-5 sm:-translate-y-0 sm:my-10" />
      <Mission data={core}/>
      <FocusArea data={focusArea}/>
      <SendMessage data={getintouch} />
      <Team data={team}/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const menuItem = await client.fetch(`*[_type == "Link"] | order(id asc)`);
  const focusAreas = await client.fetch(`*[_type == "focusArea"]`);
  const focusArea = focusAreas[0];
  const core = await client.fetch(`*[_type == "core"]`);
  const teams = await client.fetch(`*[_type == "team"]`);
  const team = teams[0];
  const headings = await client.fetch(`*[_type == "landing"]`);
  const heading = headings[0]
  const abouts = await client.fetch(`*[_type == "about"]`);
  const about = abouts[0]
  const getintouchs = await client.fetch(`*[_type == "getintouch"]`);
  const getintouch = getintouchs[0]
  const icon = await client.fetch(`*[_type == "icon"]`);
  
  return {
    props: { menuItem, focusArea, core, team, heading, about, getintouch, icon }
  };
}
