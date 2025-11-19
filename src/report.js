import { config } from './config.js';
import { generateUUID } from './utils.js';
import { addCache, getCaches, clearCaches } from './cache.js';

// 图片上报
export function imgReport(data) {
  const img = new Image();
  img.src = `${config.url}?data=${encodeURIComponent(data)}`;
}

// sendBeacon或ajax上报
export function beaconOrAjaxReport(data) {
  if (navigator.sendBeacon) {
    navigator.sendBeacon(config.url, data);
  } else {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('POST', config.url, true);
    xhr.send(data);
  }
}

// 上报
export function report(data) {
  if (!config.url) {
    throw new Error('请设置上传 url 地址');
  }
  const reportData = JSON.stringify({
    uuid: generateUUID(),
    userId: config.userId,
    data
  });

  // 图片上报方式
  if (config.isImgUpload) {
    imgReport(reportData);
  } else {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(
        () => {
          beaconOrAjaxReport(reportData);
        },
        {
          timeout: 3000
        }
      );
    } else {
      setTimeout(() => {
        beaconOrAjaxReport(reportData);
      });
    }
  }
}

// 批量上报
export function batchReport(data) {
  addCache(data);
  const caches = getCaches();
  if (caches.length >= config.batchSize) {
    report(caches);
    clearCaches();
  }
}
