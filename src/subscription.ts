import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 23198238133,
  name: 'Subscription',
  version: 0,
  author: 'sherylynn',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/sherylynn/subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
