//used for Sanity backend

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import dotenv from "dotenv";
// dotenv.config();

export const client = sanityClient({
  projectId: "k1op5x2u",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sksleTJmiIoAqB7I2I264DJ8MzQBPoDsztzlZJQ0WIqtDW3OyOkdPNruWltcDnr9DVDLgllXGRCsX4BrPKTwvQKLUbTkTQcwnei8sEJq9NEUYYyeySvo6RioPEtO3xMvmOPePzputJgT4DgT2SiDqZCPqJdkgMtJjXf6Lu2cRRFR23WjHu8M",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
