import { batchReport } from '../report.js';
import { generateUUID } from '../utils.js';

// 点击数据上报
export default function onClick() {
  ['mousedown', 'touchstart'].forEach((eventType) => {
    window.addEventListener(eventType, (e) => {
      const target = e.target;
      if (target.tagName) {
        batchReport({
          uuid: generateUUID(),
          type: 'behavior',
          subType: 'click',
          startTime: Date.now(),
          target: target.tagName,
          innerHtml: target.innerHTML,
          outerHtml: target.outerHTML,
          width: target.offsetWidth,
          height: target.offsetHeight,
          eventType,
          path: e.path
        });
      }
    });
  });
}
