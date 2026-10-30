const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (configuredSiteUrl || "https://thedavidolumidebrandportfolio.netlify.app").replace(/\/$/, "");

export const SITE_NAME = "David Olumide Daniel";
