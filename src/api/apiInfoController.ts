// @ts-ignore
/* eslint-disable */
import request from "../utils/http/index";

/** addApiInfo POST /api/interfaceInfo/add */
export async function addApiInfoUsingPost(
  body: API.ApiInfoAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponselong>("/api/interfaceInfo/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** deleteApiInfo POST /api/interfaceInfo/delete */
export async function deleteApiInfoUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>("/api/interfaceInfo/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** getApiInfoVOById GET /api/interfaceInfo/get/vo */
export async function getApiInfoVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiInfoVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseApiInfoVO>("/api/interfaceInfo/get/vo", {
    method: "GET",
    params: {
      ...params
    },
    ...(options || {})
  });
}

/** listApiInfoByPage POST /api/interfaceInfo/list/page */
export async function listApiInfoByPageUsingPost(
  body: API.ApiInfoQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageApiInfo>("/api/interfaceInfo/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** offlineInterface POST /api/interfaceInfo/offline */
export async function offlineInterfaceUsingPost(
  body: API.IdRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>("/api/interfaceInfo/offline", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}

/** updateApiInfo POST /api/interfaceInfo/update */
export async function updateApiInfoUsingPost(
  body: API.ApiInfoUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseboolean>("/api/interfaceInfo/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    ...(options || {})
  });
}
