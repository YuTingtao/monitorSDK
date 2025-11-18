import { batchReport } from '../report';
// FP监控
export default function observeFP() {
  const entryHandler = (list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-paint') {
        observer.disconnect();
        const json = entry.toJSON();
        batchReport({
          ...json,
          type: 'performance',
          subType: entry.name,
          pageUrl: location.href
        });
      }
    }
  };

  const observer = new PerformanceObserver(entryHandler);
  // buffered: true 确保观察到所有paint事件
  observer.observe({ type: 'paint', buffered: true });
}
