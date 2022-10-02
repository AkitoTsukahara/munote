import { test } from '@playwright/experimental-ct-svelte'
import { expect } from '@playwright/test'
import Anniversary from './Anniversary.svelte'

test.describe('Anniversary for pc', () => {
  test.use({ viewport: { width: 768, height: 100 } });
  test('should render', async ({ mount, page }) => {
    const component = await mount(Anniversary, {
      props: {
        birthday: '2021-10-25T12:00:00+09:00',
        familyDay: '2022-01-15T12:00:00+09:00'
      }
    });
    await page.waitForLoadState('load');
    await expect(component).toHaveScreenshot();
  });
});

test.describe('Anniversary for sp', () => {
  test.use({ viewport: { width: 320, height: 100 } });
  test('should render', async ({ mount, page }) => {
    const component = await mount(Anniversary, {
      props: {
        birthday: '2021-10-25T12:00:00+09:00',
        familyDay: '2022-01-15T12:00:00+09:00'
      }
    });
    await page.waitForLoadState('load');
    await expect(component).toHaveScreenshot();
  });
});
