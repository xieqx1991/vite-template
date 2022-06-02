import http from "@/utils/request";

import { LoginResType } from "@/types/auth";

export function login(data: { username: string; password: string }) {
  return http<LoginResType>({
    url: "/user/login",
    data
  });
}
