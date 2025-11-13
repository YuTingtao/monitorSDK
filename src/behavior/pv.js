import { batchReport } from '../report.js';
import { generateUUID } from '../utils.js';

// pv数据上报
export default function pv() {
  batchReport({
    uuid: generateUUID(),
    type: 'behavior',
    subType: 'pv',
    startTime: Date.now(),
    pageUrl: location.href,
    referror: document.referrer
  });
}
