import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);

root.render(<h1>CAT</h1>);
