import packageConfig from "../../package.json";

console.warn("VERSION", packageConfig.version);

export default {
  /* 版本号 */
  VERSION: packageConfig.version,
  /* mock 数据 */
  OPEN_MOCK: true,
  /* api 接口超时时间 */
  API_TIMEOUT: 30 * 1000,
  /* element 提示持续时间 */
  EL_DURATION: 1200
};
