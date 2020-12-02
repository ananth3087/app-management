import http from "../utils/js/http";
export function get(url, headers = {}, isNoCors = false) {
  return http.get(url, headers, isNoCors).then(
    response => {
      return response.body;
    },
    error => {
      if (error.name && error.name === "Error") {
        return { error: error.message };
      }
    }
  );
}
export function post(url, jsonData, headers = {}, isNoCors = false) {
  return http.post(url, jsonData, headers, isNoCors).then(
    response => {
      return response.body;
    },
    error => {
      if (error.name && error.name === "Error") {
        return { error: error.message };
      }
    }
  );
}
