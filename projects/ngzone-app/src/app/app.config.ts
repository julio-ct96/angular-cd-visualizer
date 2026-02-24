import { ApplicationConfig, provideZoneChangeDetection, provideCheckNoChangesConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideCheckNoChangesConfig({ exhaustive: true, interval: 1000 }),
  ]
};
