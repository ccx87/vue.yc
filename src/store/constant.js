// 'http://192.168.2.108:8080/'
//测试库 http://192.168.2.17:8089/
export const BASE_HTTP = 'http://192.168.2.108:8080/'//基地址
export const UPLOAD_IMAGE_URL = 'http://192.168.2.51:8081/zhaoyinqian_file/prepress/uploadTaskFile'//上传图片

export const LOGIN = BASE_HTTP + '/enterpriseUser/userLogin'
export const LOGOUT = BASE_HTTP + 'enterpriseUser/out'
export const REGISTER = BASE_HTTP + '/enterpriseUser/registerEmail'
export const GET_ALL_FACTORY = BASE_HTTP + '/enterpriseUser/findAllFactory'
export const GET_FORGET_CODE =  BASE_HTTP + '/enterpriseUser/sendEmailMsg'
export const RESET_PASSWORD = BASE_HTTP +'/enterpriseUser/setPassword'
export const CREATE_TASK= BASE_HTTP + 'enterprise/createTask'
export const GET_ENTERPRISE_TASK = BASE_HTTP + 'enterprise/queryCustomerTaskList'
export const GET_AUDIT_TASK = BASE_HTTP +'enterprise/queryAuditTaskList'
export const GET_PRODUCT_TASK = BASE_HTTP +'enterprise/queryProducersTaskList'
export const GET_TASK_FACTORY = BASE_HTTP +'enterprise/taskGetFactory'//获取发布任务可接单的工厂
export const GET_TASK_NUMBER = BASE_HTTP +'enterprise/getTaskNo'//获取订单编号
