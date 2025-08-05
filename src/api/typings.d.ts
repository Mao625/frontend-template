declare namespace API {
  type ApiInfo = {
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type ApiInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type ApiInfoQueryRequest = {
    current?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type ApiInfoUpdateRequest = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type ApiInfoVO = {
    createTime?: string;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type BaseResponseApiInfoVO = {
    code?: number;
    data?: ApiInfoVO;
    message?: string;
  };

  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseClientInfoVO = {
    code?: number;
    data?: ClientInfoVO;
    message?: string;
  };

  type BaseResponseint = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListUser = {
    code?: number;
    data?: User[];
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageApiInfo = {
    code?: number;
    data?: PageApiInfo;
    message?: string;
  };

  type BaseResponsePageChatMessage = {
    code?: number;
    data?: PageChatMessage;
    message?: string;
  };

  type BaseResponsePageClientInfo = {
    code?: number;
    data?: PageClientInfo;
    message?: string;
  };

  type BaseResponsePagePostVO = {
    code?: number;
    data?: PagePostVO;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsePostVO = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponsestring = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type ChatMessage = {
    content?: string;
    contentType?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    isLast?: boolean;
    isRead?: string;
    receiver?: number;
    remarks?: string;
    sender?: number;
    status?: string;
    type?: number;
  };

  type ChatMessageQueryRequest = {
    current?: number;
    myMemberId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    youMemberId?: number;
  };

  type ClientInfo = {
    allowedUrls?: string;
    appId?: string;
    appKey?: string;
    createTime?: string;
    id?: number;
    name?: string;
    publicKey?: string;
    status?: number;
    updateTime?: string;
  };

  type ClientInfoAddRequest = {
    allowedUrls?: string;
    name?: string;
    publicKey?: string;
    status?: number;
  };

  type ClientInfoQueryRequest = {
    createTime?: string;
    current?: number;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    updateTime?: string;
  };

  type ClientInfoUpdateRequest = {
    allowedUrls?: string;
    id?: number;
    name?: string;
    publicKey?: string;
    status?: number;
  };

  type ClientInfoVO = {
    allowedUrls?: string;
    createTime?: string;
    id?: number;
    name?: string;
    publicKey?: string;
    status?: number;
    updateTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getApiInfoVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getClientInfoVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    email?: string;
    gender?: number;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | "ACCEPTED"
      | "ALREADY_REPORTED"
      | "BAD_GATEWAY"
      | "BAD_REQUEST"
      | "BANDWIDTH_LIMIT_EXCEEDED"
      | "CHECKPOINT"
      | "CONFLICT"
      | "CONTINUE"
      | "CREATED"
      | "DESTINATION_LOCKED"
      | "EXPECTATION_FAILED"
      | "FAILED_DEPENDENCY"
      | "FORBIDDEN"
      | "FOUND"
      | "GATEWAY_TIMEOUT"
      | "GONE"
      | "HTTP_VERSION_NOT_SUPPORTED"
      | "IM_USED"
      | "INSUFFICIENT_SPACE_ON_RESOURCE"
      | "INSUFFICIENT_STORAGE"
      | "INTERNAL_SERVER_ERROR"
      | "I_AM_A_TEAPOT"
      | "LENGTH_REQUIRED"
      | "LOCKED"
      | "LOOP_DETECTED"
      | "METHOD_FAILURE"
      | "METHOD_NOT_ALLOWED"
      | "MOVED_PERMANENTLY"
      | "MOVED_TEMPORARILY"
      | "MULTIPLE_CHOICES"
      | "MULTI_STATUS"
      | "NETWORK_AUTHENTICATION_REQUIRED"
      | "NON_AUTHORITATIVE_INFORMATION"
      | "NOT_ACCEPTABLE"
      | "NOT_EXTENDED"
      | "NOT_FOUND"
      | "NOT_IMPLEMENTED"
      | "NOT_MODIFIED"
      | "NO_CONTENT"
      | "OK"
      | "PARTIAL_CONTENT"
      | "PAYLOAD_TOO_LARGE"
      | "PAYMENT_REQUIRED"
      | "PERMANENT_REDIRECT"
      | "PRECONDITION_FAILED"
      | "PRECONDITION_REQUIRED"
      | "PROCESSING"
      | "PROXY_AUTHENTICATION_REQUIRED"
      | "REQUESTED_RANGE_NOT_SATISFIABLE"
      | "REQUEST_ENTITY_TOO_LARGE"
      | "REQUEST_HEADER_FIELDS_TOO_LARGE"
      | "REQUEST_TIMEOUT"
      | "REQUEST_URI_TOO_LONG"
      | "RESET_CONTENT"
      | "SEE_OTHER"
      | "SERVICE_UNAVAILABLE"
      | "SWITCHING_PROTOCOLS"
      | "TEMPORARY_REDIRECT"
      | "TOO_EARLY"
      | "TOO_MANY_REQUESTS"
      | "UNAUTHORIZED"
      | "UNAVAILABLE_FOR_LEGAL_REASONS"
      | "UNPROCESSABLE_ENTITY"
      | "UNSUPPORTED_MEDIA_TYPE"
      | "UPGRADE_REQUIRED"
      | "URI_TOO_LONG"
      | "USE_PROXY"
      | "VARIANT_ALSO_NEGOTIATES";
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageApiInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ApiInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChatMessage = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ChatMessage[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageClientInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ClientInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    content?: string;
    contentType?: number;
    createTime?: string;
    email?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    maxContentTime?: string;
    nums?: number;
    openId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    email?: string;
    gender?: number;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type userLoginByWxMiniUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    email?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserPasswordResetRequest = {
    checkCode?: string;
    checkPassword?: string;
    email?: string;
    userPassword?: string;
  };

  type UserPasswordUpdateRequest = {
    checkCode?: string;
    checkPassword?: string;
    email?: string;
    oldPassword?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    email?: string;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkCode?: string;
    checkPassword?: string;
    email?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    email?: string;
    gender?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    email?: string;
    gender?: number;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type View = {
    contentType?: string;
  };
}
