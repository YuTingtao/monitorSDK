import pv from './pv.js';
import pageChange from './pageChange.js';
import onClick from './onClick.js';

// 行为监控
export default function behavior() {
  pv();
  pageChange();
  onClick();
}
