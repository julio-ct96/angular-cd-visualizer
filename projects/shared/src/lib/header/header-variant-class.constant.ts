import { APP_MODE } from './app-mode.constant';

export const HEADER_VARIANT_CLASS: Record<string, string> = {
  [APP_MODE.NGZONE]: 'app-header--ngzone',
  [APP_MODE.ZONELESS]: 'app-header--zoneless',
} as const;
