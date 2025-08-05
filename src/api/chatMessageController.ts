// @ts-ignore
/* eslint-disable */
import request from "../utils/http/index";

/** getMessageHistory POST /api/message/getMessageHistory */
export async function getMessageHistoryUsingPost(
  body: API.ChatMessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageChatMessage>(
    "/api/message/getMessageHistory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: body,
      ...(options || {})
    }
  );
}
