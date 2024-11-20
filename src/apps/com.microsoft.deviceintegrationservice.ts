import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.deviceintegrationservice',
  name: '连接windows',
  groups: [
    {
      name: '获取授权',
      key: 0,
      snapshotUrls: ['https://i.gkd.li/snapshot/1731895395166'],
      rules: [
        {
          matches: [
            'TextView[id="com.microsoft.deviceintegrationservice:id/positive_button"]',
          ],
        },
      ],
    },
  ],
});
