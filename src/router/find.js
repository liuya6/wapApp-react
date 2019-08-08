import Loadable from "react-loadable";
import Loading from "../view/loading";

const find = [
  {
    path: "/find",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/find/find/find"),
      loading: Loading
    }),
  },
];

export default find;
