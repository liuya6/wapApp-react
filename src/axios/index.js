import axios from "axios";
// import { Toast } from "antd-mobile";

axios.defaults.retry = 5; // 重新请求次数
axios.defaults.retryDelay = 5000; // 重新请求间隔
axios.defaults.timeout = 30000; // 超时时间
axios.defaults.loading = false; // 是否显示loading图
axios.defaults.withCredentials = true; // 跨域请求时是否需要使用凭证
// request拦截器
axios.interceptors.request.use(
  config => {
    // 根据配置显示loading页面
    if (config.loading) {
      // Toast.loading("加载中...",0)
    }
    return config;
  },
  error => {
    console.log("===axios.request.[error]===", error.message);
    return Promise.reject(error);
  }
);

// http响应拦截器
axios.interceptors.response.use(
  response => {
    // Toast.hide()
    let responseJson = response.data;
    /* 未签名 1000 */
    if (responseJson.code === 1000) {
      // return Toast.fail("请求签名错误",0)
    }
    /* 未登录跳转代码1001 */
    if (responseJson.code === 1001) {
      // 跳转登录页面
      // let url = "/login";
      // Toast.fail("用户未登录或登录超时",0)
      // router.push({
      //   path: url,
      //   query: { redirect: router.currentRoute.fullPath }
      // });
      // return router.replace(url + "?last=" + router.currentRoute.fullPath);
    }
    /* must需要返回response，否则封装的函数无法得到返回值 */
    return responseJson;
  },
  error => {
    return Promise.reject(error);

    // todo:页面跳转，中断请求
    // let config = error.config;
    // config.baseURL = "";
    // if (!config || !config.retry) return Promise.reject(error);
    // config.__retryCount = config.__retryCount || 0;
    // if (config.__retryCount >= config.retry) {
    //   MessageBox.alert("网络请求错误,请刷新页面").then(action => {
    //     return window.location.reload();
    //   });
    //   return Promise.reject(error);
    // }
    // config.__retryCount += 1;
    // let backOff = new Promise(function(resolve) {
    //   setTimeout(function() {
    //     resolve();
    //   }, config.retryDelay || 1);
    // });
    // return backOff.then(function() {
    //   return axios(config);
    // });
  }
);

// 统一请教模版
export function fetch(config) {
  let data = {};
  let params = {};
  config.method = config.method.toUpperCase();
  switch (config.method) {
    case "GET":
      params = config.params || {};
      if (process.env.VUE_APP_SIGN_SWITCH) {
        params = params;
      }
      break;
    case "POST":
      data = config.data || {};
      if (process.env.VUE_APP_SIGN_SWITCH) {
        data = data;
      }
      break;
  }
  return axios({
    loading: config.loading || false,
    method: config.method, // 请求方法get,post,put,delete
    url: config.url, // 请求地址
    params: params, // get请求数据
    data: data, // post请求数据
    baseURL: "/api", // api的base_url
    headers: {
      // 即将被发送的自定义请求头
      accept: "application/json"
    }
  }).catch(error => {
    return error.message;
  });
}
