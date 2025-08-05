// @ts-ignore
/* eslint-disable */
import request from "../utils/http/index";

/** addClientInfo POST /api/client/add */
export async function addClientInfoUsingPost(
  body: API.ClientInfoAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponselong>("/api/client/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deleteClientInfo POST /api/client/delete */
export async function deleteClientInfoUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>("/api/client/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getClientInfoVOById GET /api/client/get/vo */
export async function getClientInfoVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClientInfoVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseClientInfoVO>("/api/client/get/vo", {
    method: "GET",
    params: {
      ...params
    },
    ...(options || {})
  });
}

/** listClientInfoByPage POST /api/client/list/page */
export async function listClientInfoByPageUsingPost(
  body: API.ClientInfoQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageClientInfo>("/api/client/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** updateClientInfo POST /api/client/update */
export async function updateClientInfoUsingPost(
  body: API.ClientInfoUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>("/api/client/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
