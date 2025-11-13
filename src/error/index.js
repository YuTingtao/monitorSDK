import { batchReport } from '../report.js';
import { generateUUID } from '../utils.js';

// 错误监控
export default function error() {
  // 资源加载错误上报
  window.addEventListener(
    'error',
    function (e) {
      const target = e.target;
      if (target.src || target.href) {
        const url = target.src || target.href;
        batchReport({
          uuid: generateUUID(),
          type: 'error',
          subType: 'resource',
          startTime: Date.now(),
          url,
          html: target.outerHTML,
          pageUrl: location.href,
          path: e.path
        });
      }
    },
    true
  );

  // js错误上报
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    batchReport({
      uuid: generateUUID(),
      type: 'error',
      subType: 'js',
      startTime: Date.now(),
      msg,
      url,
      lineNo,
      columnNo,
      stack: error.stack,
      pageUrl: location.href
    });
  };

  // Promise错误上报
  window.addEventListener(
    'unhandledrejection',
    function (e) {
      batchReport({
        type: 'error',
        subType: 'promise',
        startTime: Date.now(),
        reason: e.reason?.stack,
        pageUrl: location.href
      });
    },
    true
  );
}
