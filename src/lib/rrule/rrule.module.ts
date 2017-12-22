import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultGlobalConfig } from './default-config';
import { GlobalConfig } from './rrule-config';
import { RRuleComponent } from './rrule.component';
import { RRULE_CONFIG } from './rrule-token';

@NgModule({
  declarations: [ RRuleComponent ],
  imports: [ CommonModule ],
  entryComponents: [ RRuleComponent ],
  exports: [ RRuleComponent ]
})
export class RRuleModule {
  constructor(@Optional() @SkipSelf() parentModule: RRuleModule) {
    if (parentModule) {
      throw new Error('RRuleModule is already loaded. It should only be imported in your application\'s main module.');
    }
  }

  // tslint:disable-next-line:member-ordering
  static forRoot(config: Partial<GlobalConfig> = {}): ModuleWithProviders {
    return {
      ngModule: RRuleModule,
      providers: [
        { provide: RRULE_CONFIG, useValue: { config, defaults: DefaultGlobalConfig } }// ,
        // RRuleService,
      ]
    };
  }
}
