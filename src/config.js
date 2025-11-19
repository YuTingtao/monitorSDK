export const config = {
  api: 'http://127.0.0.1:4000/api',
  appId: 'appId',
  isImgUpload: false,
  batchSize: 5,
  userId: ''
};

export function setConfig(options) {
  if (!options || typeof options !== 'object') {
    return;
  }
  for (const key in config) {
    if (options[key]) {
      config[key] = options[key];
    }
  }
}
