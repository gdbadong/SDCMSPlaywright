import { test, expect} from '@playwright/test';

let currentpage_url = "https://dev-unientwww.euwest01.umbraco.io/careers/";
let bannercomponent = "//div[@class='row align-items-center text-center ms-lg-20 me-lg-20']";

test('Careers page - hero banner', async ({ page }) => {
    await page.goto(currentpage_url);

    await expect.soft(page.locator(bannercomponent+"//h1[contains(text(),'Build Your Future With Unient')]")).toBeVisible();
    await expect.soft(page.locator(bannercomponent+"//p[starts-with(text(),'If you\’re up for the challenge of working in a fast-paced, collaborative') and contains(.,'environment, you’ll fit right in.')]")).toBeVisible();
    await expect.soft(page.locator(bannercomponent+"//p[contains(text(),'Click to check out our open positions.')]")).toBeVisible();

    // CHECKING LINKEDIN
    await page.locator(bannercomponent+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL("https://dev-unientwww.euwest01.umbraco.io/contact-us/");
    await expect.soft(page).toHaveTitle("Contact Us | Unient");

    // CHECKING NAUKRI
});