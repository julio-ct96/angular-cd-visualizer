export const APP_MODE = {
  NGZONE: 'ngzone',
  ZONELESS: 'zoneless',
  NGZONE_URL: 'http://localhost:4200',
  ZONELESS_URL: 'http://localhost:4201',
} as const satisfies Record<string, string>;
