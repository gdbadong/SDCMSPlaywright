import { test, expect} from '@playwright/test';

let currentpage_url = "https://dev-unientwww.euwest01.umbraco.io/creatives/";

test('Creatives page - hero banner', async ({ page }) => {
    let bannercomponent = "//div[@class='col-lg-12 col-sm-12']";
    await page.goto(currentpage_url);

    await expect.soft(page.locator(bannercomponent+"//h1[contains(text(),'High-Impact Creative Design and Digital Marketing for You')]")).toBeVisible();
    await expect.soft(page.locator(bannercomponent+"//p[starts-with(text(),'Unient offers a full suite of creative and digital marketing services to help businesses') and contains(.,'create meaningful connections, tell stories, and drive conversions.')]")).toBeVisible();
    await expect.soft(page.locator(bannercomponent+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]")).toBeVisible();

    await page.locator(bannercomponent+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL("https://dev-unientwww.euwest01.umbraco.io/contact-us/");
    await expect.soft(page).toHaveTitle("Contact Us | Unient");
});

test('Creatives page - component1', async ({ page }) => {
    let component1 = "//div[@class='container position-relative']";
    await page.goto(currentpage_url);

    await expect.soft(page.locator(component1+"//h2[starts-with(text(),'Your Top-Notch Offshore') and contains(.,'Creative Production and Marketing Agency')]")).toBeVisible();
    await expect.soft(page.locator(component1+"//p[starts-with(text(),'Access creative, communications, and marketing specialists ready to execute your vision across every medium') and contains(.,'imaginable. We can function as your dedicated creative agency or collaborate with you on specific projects.') and contains(.,'Unient is ready with white-glove solutions for your creative marketing needs.')]")).toBeVisible();
    await expect.soft(page.locator(component1+"//img[@src='/media/truiqcq1/gal1-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component1+"//img[@src='/media/20wnahmf/gal3-min-2.webp']")).toBeVisible();
    await expect.soft(page.locator(component1+"//img[@src='/media/f5chby2j/gal4-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component1+"//img[@src='/media/3ahjbs2k/gal5-min-2.webp']")).toBeVisible();
    await expect.soft(page.locator(component1+"//img[@src='/media/rcnbjxvk/gal2-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component1+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]")).toBeVisible();

    await page.locator(component1+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL("https://dev-unientwww.euwest01.umbraco.io/contact-us/");
    await expect.soft(page).toHaveTitle("Contact Us | Unient");
});

test('Creatives page - component2', async ({ page }) => {
    let component2 = "//div[@class='col-lg-12 mx-auto']";
    await page.goto(currentpage_url);

    await expect.soft(page.locator(component2+"//h2[starts-with(text(),'Unient') and contains(.,'s Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//span[contains(text(),'Filter by:')]")).toBeVisible();
    
    await page.locator(component2+"//a[contains(text(),'Multimedia Design')]").click();
    await expect.soft(page.locator(component2+"//a[contains(text(),'Multimedia Design')]")).toHaveAttribute('aria-selected','true');
    await expect.soft(page.locator(component2+"//img[@src='/media/zzlcm5wh/md-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Graphics and Illustrations')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Drive business growth and excite your audience with compelling visuals.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/115axwow/md2-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Video Production')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//div[@id='tab4-1']//p[contains(text(),'Tell your story using the most engaging and effective content medium.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/2w0fgsfc/md3-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Audio Visual Presentations (AVP)')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Captivate your audience and get your message heard.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/0efb2erd/md4-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Animation')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Entertain and communicate ideas in a thoroughly unique way.')]")).toBeVisible();

    await page.locator(component2+"//a[contains(text(),'Creative Technology')]").click();
    await expect.soft(page.locator(component2+"//a[contains(text(),'Creative Technology')]")).toHaveAttribute('aria-selected','true');
    await expect.soft(page.locator(component2+"//img[@src='/media/al2h25hd/ct1-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Website Design')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Make sure your business has its best foot forward online.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/mo2dovg1/ct2-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Electronic Direct Mail (EDM) Design')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Stand out in any inbox and achieve your email marketing goals.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/xfkloov2/ct3-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'UI/UX Design')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Delight your users every time and at every interaction.')]")).toBeVisible();

    await page.locator(component2+"//a[contains(text(),'Brand Development')]").click();
    await expect.soft(page.locator(component2+"//a[contains(text(),'Brand Development')]")).toHaveAttribute('aria-selected','true');
    await expect.soft(page.locator(component2+"//img[@src='/media/ew0jzovt/bd1-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Logo and Brand Assets Design')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Make a powerful first impression and set your brand apart.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/3kcpmqty/bd2-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Brand Playbook and Style Guide')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//div[@id='tab4-3']//p[contains(text(),'Tell your story using the most engaging and effective content medium.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/mx0fti1f/bd3-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Marketing Collaterals')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Have the right tools in your marketing tool kit.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/rrzjf2iv/bd4-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Pitch Decks & Presentations')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Communicate effectively and motivate your audience to action.')]")).toBeVisible();

    await page.locator(component2+"//a[contains(text(),'Digital Marketing')]").click();
    await expect.soft(page.locator(component2+"//a[contains(text(),'Digital Marketing')]")).toHaveAttribute('aria-selected','true');
    await expect.soft(page.locator(component2+"//img[@src='/media/4g0bbunj/dm1-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Digital Advertising')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Deliver the right message to the right audience on the right online channel.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/wxna1opg/dm2-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Search Engine Optimization')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Increase your website visibility and get the traffic that matters.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/5tvlmirm/dm3-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Insights and Analytics')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Harness data and employ insights-driven strategies to grow your business.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/zqnn5lqb/dm4-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Content Marketing')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Build trust, drive leads, establish thought leadership and create value.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/byomamft/dm5-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Influencer Management')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Nurture collaborative relationships and develop advocates for your brand.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/jlwjjmdr/dm6-min.webp']")).toBeVisible();
    await expect.soft(page.locator(component2+"//h3[contains(text(),'Digital PR')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'Establish your online presence and craft a powerful brand message.')]")).toBeVisible();
});

test('Creatives page - cta', async ({ page }) => {
    let ctacomponent = "//section[@class='section-cta position-relative vh-50  d-flex align-items-center  jarallax']";
    await page.goto(currentpage_url);

    await expect.soft(page.locator(ctacomponent+"//h2[starts-with(text(),'Make an impact and') and contains(.,'make it count with Unient.')]")).toBeVisible();
    await expect.soft(page.locator(ctacomponent+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]")).toBeVisible();

    await page.locator(ctacomponent+"//a[@href='/contact-us/' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL("https://dev-unientwww.euwest01.umbraco.io/contact-us/");
    await expect.soft(page).toHaveTitle("Contact Us | Unient");
});