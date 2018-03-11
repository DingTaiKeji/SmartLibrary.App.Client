import request from '../utils/request';

//Token登录
export async function loginByToken(params) {
  return request('/api/Account/loginByToken', {
    method: 'POST',
    body: params,
  });
}

//账号登陆
export async function loginByAccount(params) {
  return request('/api/Account/loginByAccount', {
    method: 'POST',
    body: params,
  });
}

//获取验证码
export async function sendCaptcha(params) {
  return request('/api/Account/SendCaptcha', {
    method: 'POST',
    body: params,
  });
}

//手机号登陆
export async function loginByMobile(params) {
  return request('/api/Account/loginByMobile', {
    method: 'POST',
    body: params,
  });
}