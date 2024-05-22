import axiosInstance from "./apiInterceptor";

const apiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const globalGetService = (url, params) =>
  apiRequest("get", url, null, { params });

export const globalPostService = (url, data) =>
  apiRequest("post", url, data);

export const globalPatchService = (url, data) =>
  apiRequest("patch", url, data);

export const globalPutService = (url, data) =>
  apiRequest("put", url, data);

export const globalDeleteService = (url, data) =>
  apiRequest("delete", url, data);

export const globalExportService = (url, queryParams = {}) =>
  apiRequest("get", url, null, { params: queryParams, responseType: "blob" });

export const globalFileUploadService = (url, data, config = {}) =>
  apiRequest("post", url, data, config);

export const globalFileUploadPutService = (url, data, config = {}) =>
  apiRequest("put", url, data, config);
