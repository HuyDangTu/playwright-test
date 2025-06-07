import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: false, // show browser
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 2000, // 👈 slow down by 500ms between steps
    }
  },
});
