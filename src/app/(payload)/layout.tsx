/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import { RootLayout } from "@payloadcms/next/layouts";
import config from "../../../payload.config";
import React from "react";

import { importMap } from "./admin/importMap";
import "./custom.css";
import "@payloadcms/next/css";

type Args = {
  children: React.ReactNode;
};

import { handleServerFunctions } from "@payloadcms/next/layouts";

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    //@ts-ignore
    suppressHydrationWarning={true}
    importMap={importMap}
    serverFunction={async (args) => {
      "use server";
      return handleServerFunctions({
        ...args,
        config,
        importMap,
      });
    }}
  >
    {children}
  </RootLayout>
);

export default Layout;
