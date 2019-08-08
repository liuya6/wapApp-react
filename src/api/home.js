import { fetch } from "../axios";

export function initHomeData () {
  return fetch({
    url: "",
    method: "get",
    loading: true
  })
}
