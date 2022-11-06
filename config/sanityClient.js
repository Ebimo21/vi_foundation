import { createClient } from "next-sanity";

export  const client = createClient({
    projectId: "gy5ghu0p",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });

export default client 