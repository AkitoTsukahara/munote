import { test } from '@playwright/experimental-ct-svelte'
import { expect } from '@playwright/test'
import Date from './Date.svelte'

test.describe('Date for pc', () => {
  test.use({ viewport: { width: 768, height: 100 } })
  test('should render', async ({ mount, page }) => {
    const component = await mount(Date, {
      props: {
        title: '誕生日',
        date: '2021-10-25T12:00:00+09:00'
      }
    })
    await page.waitForLoadState('load')
    await expect(component).toHaveScreenshot()
  })
})

test.describe('Date for sp', () => {
  test.use({ viewport: { width: 320, height: 100 } })
  test('should render', async ({ mount, page }) => {
    const component = await mount(Date, {
      props: {
        title: '誕生日',
        date: '2021-10-25T12:00:00+09:00'
      }
    })
    await page.waitForLoadState('load')
    await expect(component).toHaveScreenshot()
  })
})
