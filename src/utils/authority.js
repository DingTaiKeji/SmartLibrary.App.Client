import storage from './storage';

const TOKEN_KEY = "SmartLibraryToken";

// 设置Token
function setToken(value) {
  return storage.set(TOKEN_KEY, value);
}
// 获取Token
function getToken(){
  return storage.get(TOKEN_KEY, null);
}
// 清除Token
function clearToken(){
  return storage.remove(TOKEN_KEY);
}

export default {
  setToken,
  getToken,
  clearToken,
}