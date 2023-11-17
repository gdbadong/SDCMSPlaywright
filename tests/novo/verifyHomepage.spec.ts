import { test, expect } from '@playwright/test';

let homepage_url = "https://dev-unientwww.euwest01.umbraco.io/";
// let homepage_url = "https://www.unient.biz/"

test('check homepage button - hero banner', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//div[@class='col-lg-12 col-sm-12']/*/div[contains(text(), 'Get your free quote') and @class='btn-rise-text']").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('check homepage button - CTA', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//div[@class='container position-relative text-center mb-6 ']//a[@href='/contact-us/' and @title='Get your free quote']/div[contains(text(),'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('check homepage link - Book your discovery call', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//a[@title='Book your discovery call →']").click();
    await expect.soft(page).toHaveURL(homepage_url+'teams/');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
});

test('check homepage link - Develop and deploy your custom tech', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//a[@title='Develop and deploy your custom tech →']").click();
    await expect.soft(page).toHaveURL(homepage_url+'infotech/');
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
});

test('check homepage link - Maximise your impact online', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//a[@title='Maximise your impact online →']").click();
    await expect.soft(page).toHaveURL(homepage_url+'creatives/');
    await expect.soft(page).toHaveTitle('High-Impact Offshore Creative Design and Digital Marketing | Unient');
});

test('check homepage link - Streamline your operations', async ({ page }) => {
    await page.goto(homepage_url);    
    await page.locator("//a[@title='Streamline your operations →']").click();
    await expect.soft(page).toHaveURL(homepage_url+'bpo/');
    await expect.soft(page).toHaveTitle('End-to-End Offshore BPO Solutions With a Human Touch | Unient');
});

test('validate text content in homepage', async ({ page }) => {
    await page.goto(homepage_url);    
    await expect.soft(page.locator("//h1[contains(text(), 'Your Versatile Partner for Better Offshoring')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='col-lg-12 col-sm-12']/*/p[contains(.,'Empower your organisation to function onshore and offshore as one enterprise with our diversified portfolio of solutions and regional service delivery.')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='col-lg-12 col-sm-12']/*/div[contains(text(),'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator("//h2[contains(.,'Adapt, Evolve, and Accelerate Your Business Growth with Offshoring')]")).toBeVisible();
    await page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Cost-Savings')]").click();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Cost-Savings')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/p[contains(.,'Improve your financial bottom line with direct and opportunity cost savings.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@alt='Section Image1 - 1']")).toBeVisible();

    await page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Expanded Talent Pool')]").click();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Expanded Talent Pool')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/p[contains(.,'Close skills gaps and fill shortages with world-class professionals and niche specialists.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@alt='Section Image1 - 2']")).toBeVisible();

    await page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Sustainable Scalability')]").click();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Sustainable Scalability')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/p[contains(.,'Scale operations up and down based on your business and growth objectives.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@alt='Section Image1 - 3']")).toBeVisible();

    await page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Quality')]").click();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/h3[contains(text(), 'Quality')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row align-items-center justify-content-between']/div/div/a/div/div/p[contains(.,'Access best-in-class resources with a perpetual resource replacement guarantee.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@alt='Section Image1 - 4']")).toBeVisible();

    await expect.soft(page.locator("//h2[contains(.,'Remote-First Distributed Operations in ')]")).toBeVisible();
    await expect.soft(page.locator("//h2[contains(.,' India and the Philippines')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Future-proof your business and remove barriers to expansion by embracing tech-enabled possibilities.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@alt='Offshore Header-1']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(.,'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Set up your dedicated offshore team, hire out-of-house experts, or extend your capacity with staff augmentation. Unient enables you to meet demand at scale with our fully flexible engagement models.')]")).toBeVisible();
    await expect.soft(page.locator("//a[@title='Book your discovery call →']")).toBeVisible();

    await expect.soft(page.locator("//img[@alt='Offshore Header-2']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(.,'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Be truly agile, speed up your product’s time-to-market, and expand your development capabilities. Jump-start innovation with Unient')]")).toBeVisible();
    await expect.soft(page.locator("//a[@title='Develop and deploy your custom tech →']")).toBeVisible();

    await expect.soft(page.locator("//img[@alt='Offshore Header-3']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(.,'Creative and Digital Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Delight your audience with stunning visuals and build your brand with impactful creative communications. Unient offers design solutions and marketing services for all your digital channels.')]")).toBeVisible();
    await expect.soft(page.locator("//a[@title='Maximise your impact online →']")).toBeVisible();

    await expect.soft(page.locator("//img[@alt='Offshore Header-4']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(.,'Business Process Outsourcing (BPO) Solutions')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Boost productivity and create exceptional customer experiences. Entrust your business functions and crucial admin tasks with Unient’s intelligent front-office and back-office support services.')]")).toBeVisible();
    await expect.soft(page.locator("//a[@title='Streamline your operations →']")).toBeVisible();

    // CHECKING CAROUSEL
    await expect.soft(page.locator("//h2[contains(.,'What Our Clients Are Saying')]")).toBeVisible();
    // await expect.soft(page.locator("//h2[contains(.,'What Our Clients Are Saying')]")).toBeVisible();
   
    await page.locator('//span[@aria-label="Go to slide 1"]').click();
    // check icon
    await expect.soft(page.locator("//div[@id='swiper-testimonial']//div[@class='swiper-slide swiper-testimonial-slide col-12 swiper-slide-duplicate swiper-slide-duplicate-active' and @aria-label='1 / 5']//a[@href='https://www.1-stop.biz/']/img[@src='/media/rymkpzm0/one-stop-200x200.webp']")).toBeVisible();
    // check body text
    await expect.soft(page.locator("//div[@class='swiper-slide swiper-testimonial-slide col-12 swiper-slide-active']//p[contains(text(), 'At OneStop, we connect people, goods & technology by creating simple software solutions for the global freight and logistics community. Unient has been our trusted partner for over 3 years in scaling up our offshore presence and providing us with ongoing team augmentation for key enterprise projects.') and @class='content-align']")).toBeVisible();
    // check author text
    await expect.soft(page.locator("//div[@class='swiper-slide swiper-testimonial-slide col-12 swiper-slide-active']//p[contains(., 'Head of People & Culture') and @class='content-align']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide swiper-testimonial-slide col-12 swiper-slide-active']//p[contains(text(), 'OneStop') and @class='content-align']")).toBeVisible();
    
    await expect.soft(page.locator("//img[@id='imgCountryFlag']")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Through their diligent work practices, professional communications, and seamless coordination with multiple parties, Unient successfully manages projects with geographically dispersed teams and clients. This is truly a testament to the great staff at Unient who can, not only work well with their Unient colleagues, but also with external customers. With self-starters and self-sufficient staff that display a can-do attitude, Unient provides the kind of high-level service that Symphonic trusts')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Co-Founder and Managing Director')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Symphonic Management Consulting')]")).toBeVisible();
    
    // checking dnx solutions
    await expect.soft(page.locator("//a[@href='https://dnx.solutions/']/img[@src='/media/iropl3xz/dnx-200x200.webp']")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Working with start-ups, small businesses, and enterprises from different sectors requires a high degree of responsiveness in all areas, including People Management. Unient')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'s adaptive talent recruitment and resource planning services allow us the flexibility we need to drive the outcomes we want for ourselves and our clients.')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Chief Operating Officer')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'DNX Solutions')]")).toBeVisible();
    
    // checking click and connect
    await expect.soft(page.locator("//a[@href='https://clickandconnect.com.au/']/img[@src='/media/qbylroi2/clickandconnect-200x200.webp']")).toBeVisible();
    await expect.soft(page.locator("//span[contains(.,'At Click and Connect we help homes and businesses make the most of technology. From product advice and selection to tailored technology services for business support, we are with them every step of the way. To assist on this front, we engage Unient to help us provide our clients with expert and timely helpdesk support for all channels—phone, chat, and email. We are passionate about delivering the best tailored solutions to ensure customer satisfaction, a mission we happen to share with Unient!')]")).toBeVisible();
    await expect.soft(page.locator("//div[@aria-label='3 / 5']//p[contains(.,'Managing Director')]")).toBeVisible();
    await expect.soft(page.locator("//div[@aria-label='3 / 5']//p[2][contains(.,'Click and Connect')]")).toBeVisible();

    // Checking CTA
    await expect.soft(page.locator("//h2[contains(.,'Take the next step in')]")).toBeVisible();
    await expect.soft(page.locator("//h2[contains(.,'transforming your business today!')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//div[contains(text(), 'Get your free quote')]")).toBeVisible();
});