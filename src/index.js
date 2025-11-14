import { setConfig } from './config.js';
import performance from './performance/index.js';
import behavior from './behavior/index.js';
import error from './error/index.js';

// 初始化
function init(options) {
  setConfig(options);
  performance();
  behavior();
  error();
}

export default {
  init
};

/*****************
// 使用方法
monitorSDK.init({
  url: 'http://127.0.0.1:4000/api/report',
  appId: 'appId',
  isImgUpload: false,
  batchSize: 5
})
 *****************/
