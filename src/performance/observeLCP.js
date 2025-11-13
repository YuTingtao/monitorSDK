import { batchReport } from '../report.js';

// LCP监控
export default function observerLCP() {
  const entryHandler = (list) => {
    if (observer) {
      observer.disconnect();
    }
    for (const entry of list.getEntries()) {
      const json = entry.toJSON();
      batchReport({
        ...json,
        type: 'performance',
        subType: entry.name,
        pageUrl: location.href
      });
    }
  };

  const observer = new PerformanceObserver(entryHandler);
  // buffered: true 确保观察到所有paint事件
  observer.observe({ type: 'largest-contentful-paint', buffered: true });
}
