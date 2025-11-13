import { batchReport } from '../report.js';
import { generateUUID } from '../utils.js';

// 页面访问记录上报
export default function pageChange() {
  // hash histroy
  let oldUrl = '';
  window.addEventListener(
    'hashchange',
    function (event) {
      const newUrl = event.newURL;
      batchReport({
        uuid: generateUUID(),
        type: 'behavior',
        subType: 'hashchange',
        startTime: Date.now(),
        form: oldUrl,
        to: newUrl
      });
      oldUrl = newUrl;
    },
    true
  );

  // web histroy
  let from = '';
  window.addEventListener(
    'popstate',
    function (event) {
      const to = location.href;
      batchReport({
        uuid: generateUUID(),
        type: 'behavior',
        subType: 'popstate',
        startTime: Date.now(),
        form: from,
        to: to
      });
      from = to;
    },
    true
  );
}
