import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

hydrateRoot(document.getElementById("root")!, <App data={(window as any)._SSR_DATA} />);
