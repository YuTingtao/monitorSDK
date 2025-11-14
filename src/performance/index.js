import observeFP from './observeFP.js';
import observeFCP from './observeFCP.js';
import observeLCP from './observeLCP.js';

// 性能监控
export default function performance() {
  observeFP();
  observeFCP();
  observeLCP();
}
