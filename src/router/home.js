import Loadable from "react-loadable";
import Loading from "../view/loading";

const home = [
  {
    path: "/",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/home/home/home"),
      loading: Loading
    }),
    exact: true,
  },
];



export default home;
