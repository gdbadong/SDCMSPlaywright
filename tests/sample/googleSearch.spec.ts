import { test, expect } from '@playwright/test';

test('Google Search', async({ page }) => {
    await page.goto("https://www.google.com");
    await page.fill("#APjFqb", "Glenn Badong{Enter}");
})