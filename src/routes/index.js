import { get as getIndex } from "../controllers/index.js";
import { get as getData } from "../controllers/data.js";

const routes = [
  {
    path: "/",
    method: "GET",
    handleRequest: getIndex,
  },
  { path: "/data", method: "GET", handleRequest: getData },
];

export default routes;
