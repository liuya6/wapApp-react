import Loadable from "react-loadable";
import Loading from "../view/loading";

const activity = [
  {
    path: "/hall",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/activity/activity/activity"),
      loading: Loading
    }),
  },
];

export default activity;
