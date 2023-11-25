"use client";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";

const Providers = ({ children }) => {
  return <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
};

export default Providers;
