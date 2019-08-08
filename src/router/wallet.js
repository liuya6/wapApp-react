import Loadable from "react-loadable";
import Loading from "../view/loading";

const wallet = [
  {
    path: "/wallet",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/wallet/wallet/wallet"),
      loading: Loading
    }),
  },
];
export default wallet;
