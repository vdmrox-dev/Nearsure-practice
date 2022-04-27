import axios from "axios";

export default function xhr({ url, method, data, headers = {} }) {
  return axios(url, {
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      accept: "application/vnd.github.v3+json"
    },
    ...headers
  });
}
