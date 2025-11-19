import { setConfig } from './config.js';
import performance from './performance/index.js';
import behavior from './behavior/index.js';
import error from './error/index.js';
import { batchReport, report } from './report.js';

// 初始化
function init(options) {
  setConfig(options);
  performance();
  behavior();
  error();
}

export default {
  init,
  setConfig,
  batchReport,
  report
};
