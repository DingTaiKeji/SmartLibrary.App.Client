import { observable, action, computed } from 'mobx';
import { Toast } from 'antd-mobile';
import { loginByAccount, loginByMobile, loginByToken } from '../../service/auth'
import authority from '../../utils/authority';
import config from '../../utils/config';


class Auth {
  @observable loading = false;
  @observable item = '认证相关';

  // 登陆
  @action async login(param) {
    this.loading = true;
    const request = await loginByAccount({
      ...param,
      ...config.loginModel
    })
    Toast.info(request.Message);
    console.log(request);
    // return authority.setToken("value");
    this.loading = false;
  }

  @computed get total() {
    console.log(this.loading);
    return !this.loading;
  }

  // 退出
  @action logout() {
    return authority.clearToken();
  }
}

const auth = new Auth();

export default auth;
export { Auth };