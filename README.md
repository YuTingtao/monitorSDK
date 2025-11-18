# monitorSDK 前端监控SDK

```
// 使用方法
monitorSDK.init({
  api: 'http://127.0.0.1:4000/api/report', // 上报接口
  appId: 'appId', // 应用ID
  isImgUpload: false, // 是否上传图片
  batchSize: 5, // 批量上报数量
})
```

## 性能指标

| 指标                          | 作用             | 标准          |
| ----------------------------- | ---------------- | ------------- |
| FP(First Paint)               | 首次绘制         | 标准 ≤1秒     |
| FCP(First Contentful Paint)   | 首次内容绘制     | 标准 ≤1秒     |
| LCP(Largest Contentful Paint) | 最大内容绘制时间 | 标准 ≤2秒     |
| FID(first input delay)        | 首次输入延迟     | 标准 ≤100毫秒 |
| CLS(Cumulative Layout Shift)  | 累积布局偏移     | 标准 ≤100毫秒 |
| TTFB(Time to First Byte)      | 首字节时间       | 标准 ≤100毫秒 |
