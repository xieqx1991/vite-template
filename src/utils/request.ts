import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import globalConfig from "@/config";

function getUrl() {
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_APP_BASE_URL ?? ""; // 生产环境接口地址
  } else {
    return "/api";
  }
}

/**
 * 默认配置
 */
const defaultConfig: AxiosRequestConfig = {
  // 基础路径，
  baseURL: "/api", //getUrl(),
  // 请求超时时间
  timeout: globalConfig.API_TIMEOUT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  withCredentials: true
};

/**
 * axios实例
 */
const service = axios.create(defaultConfig);

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.headers = {
      "Content-Type": "application/json; charset=utf-8"
    };

    return config;
  },
  function (error) {
    /**
     * TODO: 错误处理
     */
    // console.error("service-req-err", error);

    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  function (response: AxiosResponse<any>) {
    return response;
  },
  function (error) {
    // console.error("service-res-err", error);
    return Promise.reject(error);
  }
);

const http = async <T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  const options: AxiosRequestConfig = Object.assign(
    {
      method: "POST"
    },
    config
  );
  const response = await service.request<ApiResponse<T>>(options);
  const resData = response.data;
  return resData;
};

export default http;
