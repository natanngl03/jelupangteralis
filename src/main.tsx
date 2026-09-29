import { ViteReactSSG } from "vite-react-ssg";
import { Routes } from "./Routes";

const router = [...Routes];

export const createRoot = ViteReactSSG({ routes: router });
