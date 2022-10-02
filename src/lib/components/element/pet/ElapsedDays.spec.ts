import { test } from '@playwright/experimental-ct-svelte'
import { expect } from '@playwright/test'
import ElapsedDays from './ElapsedDays.svelte'

test.describe('ElapsedDays for pc', () => {
  test.use({ viewport: { width: 768, height: 100 } })
  test('should render', async ({ mount, page }) => {
    const component = await mount(ElapsedDays, {
      props: {
        date: '2021-10-25T12:00:00+09:00'
      }
    })
    await page.waitForLoadState('load')
    await expect(component).toHaveScreenshot()
  })
})

test.describe('ElapsedDays for sp', () => {
  test.use({ viewport: { width: 320, height: 100 } })
  test('should render', async ({ mount, page }) => {
    const component = await mount(ElapsedDays, {
      props: {
        date: '2021-10-25T12:00:00+09:00'
      }
    })
    await page.waitForLoadState('load')
    await expect(component).toHaveScreenshot()
  })
})
