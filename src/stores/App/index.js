import { observable, action } from 'mobx';

class App {
  @observable isLoadingComplete = false;

  @observable item = '这是整个App初始化配置';

  @action setItem(data) {
    this.item = data;
  }
}

const app = new App();

export default app;
export { App };