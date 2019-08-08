import Loadable from "react-loadable";
import Loading from "../view/loading";

const user = [
  {
    path: "/user",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/user/user/user"),
      loading: Loading
    }),
    auth: true,
  },
  {
    path: "/register",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "user" */ "../view/user/register/register"),
      loading: Loading
    }),
  },
  {
    path: "/login",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "initiate" */ "../view/user/login/login"),
      loading: Loading
    }),
    keepAlive:true
  },
  {
    path: "/loginpwd",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "user" */ "../view/user/loginpwd/loginpwd"),
      loading: Loading
    }),
    auth: true,
  },
  {
    path: "/newloginpwd",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "user" */ "../view/user/newLoginPwd/newLoginPwd"),
      loading: Loading
    }),
    keepAlive:true
  },
  {
    path: "/about",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ "../view/user/about/about"),
      loading: Loading
    }),
  },
  {
    path: "/announcement",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ "../view/user/announcement/announcement"),
      loading: Loading
    }),
  },
  {
    path: "/set",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ "../view/user/set/set"),
      loading: Loading
    }),
  },
  {
    path: "/notice",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ "../view/user/notice/notice"),
      loading: Loading
    }),
  },
  {
    path: "/amount",
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ "../view/user/amount/amount"),
      loading: Loading
    }),
  }
];

export default user;
