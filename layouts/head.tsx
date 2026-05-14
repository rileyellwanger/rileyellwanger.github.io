import React from "react";
import NextHead from "next/head";

import { siteConfig, siteUrl } from "@/config/site";

const ogImage = `${siteUrl}/corn-background.jpg`;

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta content={siteUrl} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content={ogImage} property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={siteConfig.name} name="twitter:title" />
      <meta content={siteConfig.description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
