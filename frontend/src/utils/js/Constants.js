const API_BASE_URL = "http://localhost:5000/";
const Constants = {
  URLs: {
    API: {
      BASE_URL: API_BASE_URL,
      ADD_APP: API_BASE_URL + "api/v1/app",
      GET_APP_LIST: API_BASE_URL + "api/v1/app",
    },
  },

  HEADER: {
    TITLE: "App Management",
  },

  MESSAGE: {
    ERROR: {
      APP_NOT_FOUND: "App list not found",
    },
  },
  FOOTER: {
    LABEL: "Developed by: ",
    DEVELOPER_NAME: "Ananth",
  },
};

export default Constants;
