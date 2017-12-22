import { InjectionToken } from '@angular/core';

import { GlobalConfig } from './rrule-config.d';

export interface RRuleToken {
  config: GlobalConfig;
  defaults: any;
}

export const RRULE_CONFIG = new InjectionToken<RRuleToken>('RRuleConfig');
