import request from "superagent";

class Http {
  static get(url, headers = {}, isNoCors = false) {
    return request.get(url).set(headers);
    if (isNoCors) {
      return request.get(url).set(headers);
    } else {
      return request.get(url).withCredentials().set(headers);
    }
  }
  static post(url, data = {}, headers = {}, isNoCors = false) {
    if (isNoCors) {
      return request.post(url).send(data).set(headers);
    } else {
      return request.post(url).send(data).withCredentials().set(headers);
    }
  }
}
export default Http;
