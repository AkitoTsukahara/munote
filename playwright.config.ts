import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	reporter: 'html',
	retries: 1,
	expect: {
		timeout: 20000
	}
};

export default config;
