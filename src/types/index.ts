/**
 * 接口返回数据结构 (自定义，与后端协定)
 * 明确定义返回的泛型的类型
 */
interface ApiResponse<T = any> {
  msg: string;
  success: boolean;
  data: T;
}

interface ApiPage<T> {
  total: number;
  list: T[];
  page: number;
  pageSize: number;
}

interface MockRequest {
  url: string;
  type: string;
  body: string;
}
