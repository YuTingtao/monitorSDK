import { cloneDeep } from 'lodash-es';

let caches = [];

export function addCache(data) {
  caches.push(data);
}

export function getCaches() {
  return cloneDeep(caches);
}

export function clearCaches() {
  caches = [];
}
