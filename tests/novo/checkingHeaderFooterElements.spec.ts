import { test, expect } from '@playwright/test';

// CHECKING THE OPENING OF PAGES, CHECKING OF HEADER ELEMENTS, AND CHECKING OF FOOTER ELEMENTS

let homepage_url = "https://dev-unientwww.euwest01.umbraco.io/";
let footer = "//footer";
let topheader = "//header";
let menubar = "//div[@class='container position-relative z-index-1']";

test('check homepage', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);
    await expect.soft(page).toHaveURL(homepage_url);
    await expect.soft(page).toHaveTitle('Your Versatile Partner for Better Offshoring | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();
});

test('check insights', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);
    await page.locator("//li[contains(@class, 'nav-item me-lg-3')]/a[contains(text(), 'Insights')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'insights/');
    await expect.soft(page).toHaveTitle('Unient Insights for Offshoring and Outsourcing | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check contact us', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator("//li[contains(@class, 'nav-item me-lg-3')]/a[contains(text(), 'Contact Us')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check careers', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator("//li[contains(@class, 'nav-item me-lg-3')]/a[contains(text(), 'Careers')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'careers/');
    await expect.soft(page).toHaveTitle('Careers at Unient | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check teams', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Our Services')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'Offshore Teams')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'teams/');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check infotech', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Our Services')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'Infotech Solutions')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'infotech/');
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check creative and marketing', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Our Services')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'Creative and Marketing Services')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'creatives/');
    await expect.soft(page).toHaveTitle('High-Impact Offshore Creative Design and Digital Marketing | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check bpo', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Our Services')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'BPO Solutions')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'bpo/');
    await expect.soft(page).toHaveTitle('End-to-End Offshore BPO Solutions With a Human Touch | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("a.dropdown-item > img[src='/media/2pkhuig5/aus-flag-min.webp']");
    await expect.soft(page.locator("#contactNoFooter")).toHaveText("+61 1800 864 368");
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator("#contactNoFooter")).toHaveText("+63 32 402 0605");
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator("#contactNoFooter")).toHaveText("+91 9686 862 570");
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check our journey', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Why Unient')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'Our Journey')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'why-unient/#our-journey');
    await expect.soft(page).toHaveTitle('Driven by Innovation and Powered by Technology | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator(menubar+"//img[@src='/assets/img/logo/Unient-Logo-White.svg']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check our advantages', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    await page.locator(topheader+"//ul[@id='menu']//a[contains(text(),'Why Unient')]").hover();
    await page.locator(topheader+"//li/div/a[contains(text(), 'Our Advantages')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'why-unient/#our-advantages');
    await expect.soft(page).toHaveTitle('Driven by Innovation and Powered by Technology | Unient');

    // VERIFY MENU BAR CONTENT
    await expect.soft(page.locator("#dropdownMenuButton")).toBeVisible();
    await page.locator("#dropdownMenuButton").click();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Australia')]/img[@src='/media/2pkhuig5/aus-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//div[@class='dropdown-menu bg-white dropdown-country-codes show']/a[contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']")).toBeVisible();
    await expect.soft(page.locator(topheader+"//span[contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await expect.soft(page.locator(topheader+"//a[@href='/contact-us' and contains(.,'Get your free quote')]")).toBeVisible();
    
    await expect.soft(page.locator("img[src='/assets/img/logo/Unient-Logo.svg'][alt='logo development']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Home') and @href='/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']")).toBeVisible();
    await page.click(menubar+"//a[contains(text(),'Our Services')][@data-bs-toggle='dropdown']");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]")).toBeVisible();
    await page.click(menubar+"//a[@href='/why-unient/'][contains(text(),'Why Unient')]");
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-journey'][contains(text(),'Our Journey')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//div[@class='submenu dropdown-menu dropdown-menu-end show']//a[@href='/why-unient/#our-advantages'][contains(text(),'Our Advantages')]")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Insights') and @href='/insights/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Careers') and @href='/careers/']")).toBeVisible();
    await expect.soft(page.locator(menubar+"//a[contains(text(),'Contact Us') and @href='/contact-us/']")).toBeVisible();
    
    // VERIFY ALL FOOTER CONTENT
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Contact Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-telephone me-3 ']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+61 1800 864 368')]")).toBeVisible();
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/tpfn1fjq/phl-flag-min.webp'][contains(.,'Philippines')]/img[@src='/media/tpfn1fjq/phl-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+63 32 402 0605')]")).toBeVisible();
    
    await page.click("#dropdownMenuButton");
    await page.click("//a[@data-country-flag='/media/0xch5hpz/ind-flag-min.webp'][contains(.,'India')]/img[@src='/media/0xch5hpz/ind-flag-min.webp']");
    await expect.soft(page.locator(footer+"//span[@id='contactNoFooter'][contains(text(),'+91 9686 862 570')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//i[@class='bi-envelope-fill me-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//span[contains(text(),'info@unient.biz')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//i[@class='bi-geo-alt  pe-3']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps?ll=-34.8634,138.507387&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=Unit+2/1C+Wilson+St+Royal+Park+SA+5014+Australia']//p[starts-with(text(),'2/1C Wilson St., Royal Park,') and contains(.,'SA, 5014, Australia')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/2778+Rufo+Colina+St,+Cebu+City,+Cebu/@10.3187516,123.9115877,17z/data=!3m1!4b1!4m5!3m4!1s0x33a99913f7b9d143:0x819867043ab5214f!8m2!3d10.3187463!4d123.9137764?shorturl=1']//p[starts-with(text(),'Level 2, 2778 Rufo Colina St.,') and contains(.,'Mabolo, Cebu City, Cebu,') and contains(.,'6000, Philippines')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//p[starts-with(text(),'Tejas Arcade,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'No. 9/1, 1st Main Road,')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.google.com/maps/place/Tejas+Arcade/@13.007698,77.554604,17z/data=!4m6!3m5!1s0x3bae3dd6ba016af9:0x4c2a69b9acf9dd7e!8m2!3d13.0076979!4d77.5546038!16s%2Fg%2F11rj64j9vx?hl=en&entry=ttu']//span[starts-with(text(),'Dr Rajkumar Rd, opp. St. Theresa Hospital,') and contains(.,'A Block, Milk Colony, Subramanyanagar,') and contains(.,'2 State, Bengaluru, Karnataka 560010, India')]")).toBeVisible();

    await expect.soft(page.locator(footer+"//h3[contains(text(),'Useful Links')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/'][contains(text(),'Home')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/teams/'][contains(text(),'Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/infotech/'][contains(text(),'Infotech Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/creatives/'][contains(text(),'Creative and Marketing Services')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/bpo/'][contains(text(),'BPO Solutions')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/why-unient/'][contains(text(),'About Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/insights/'][contains(text(),'Insights')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/careers/'][contains(text(),'Careers')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='/contact-us/'][contains(text(),'Contact Us')]")).toBeVisible();
    
    await expect.soft(page.locator(footer+"//h3[contains(text(),'Follow Us')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://facebook.com/unient.biz']//i[@class='bi bi-facebook fs-2']")).toBeVisible();
    await expect.soft(page.locator(footer+"//a[@href='https://www.linkedin.com/company/unient-biz/']//i[@class='bi bi-linkedin fs-2']")).toBeVisible();

    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//span[contains(text(),'Copyright ©') and contains(.,'2023') and contains(.,'Unient')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/' and contains(text(),'Privacy Policy')]")).toBeVisible();
    await expect.soft(page.locator(footer+"//div[@class='row   bg-white']//a[@href='/privacy-and-cookie-policy/#cookie-policy' and contains(text(),'Cookie Policy')]")).toBeVisible();

});

test('check footer home', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER HOME
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Home')]").click();
    await expect.soft(page).toHaveURL(homepage_url);
    await expect.soft(page).toHaveTitle('Your Versatile Partner for Better Offshoring | Unient');
});

test('check footer teams', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER TEAMS
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Offshore Teams')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'teams/');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
});

test('check footer infotech', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER INFOTECH
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Infotech Solutions')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'infotech/');
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
});

test('check footer creative and marketing', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER CREATIVE AND MARKETING
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Creative and Marketing Services')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'creatives/');
    await expect.soft(page).toHaveTitle('High-Impact Offshore Creative Design and Digital Marketing | Unient');
});

test('check footer bpo', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER BPO
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'BPO Solutions')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'bpo/');
    await expect.soft(page).toHaveTitle('End-to-End Offshore BPO Solutions With a Human Touch | Unient');
});

test('check footer about us', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER ABOUT US
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'About Us')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'why-unient/');
    await expect.soft(page).toHaveTitle('Driven by Innovation and Powered by Technology | Unient');
});

test('check footer insights', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER INSIGHTS
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Insights')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'insights/');
    await expect.soft(page).toHaveTitle('Unient Insights for Offshoring and Outsourcing | Unient');
});

test('check footer careers', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER CAREERS
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Careers')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'careers/');
    await expect.soft(page).toHaveTitle('Careers at Unient | Unient');
});

test('check footer contact us', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL FOOTER CONTACT US
    await page.locator("//ul[contains(@id,'footer-nav-menu')]/li/a[contains(text(), 'Contact Us')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('check privacy policy', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL AND PAGE TITLE
    await page.locator("//*[contains(text(), 'Privacy Policy')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'privacy-and-cookie-policy/');
    await expect.soft(page).toHaveTitle('Privacy and Cookie Policy | Unient');
});

test('check cookie policy', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL AND PAGE TITLE
    await page.locator("//*[contains(text(), 'Cookie Policy')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'privacy-and-cookie-policy/#cookie-policy');
    await expect.soft(page).toHaveTitle('Privacy and Cookie Policy | Unient');
});

test('check get your free quote', async ({ page }) => {
    // OPEN UNIENT WEBSITE HOMEPAGE
    await page.goto(homepage_url);    
    // CHECK URL AND PAGE TITLE IN CONTACT US
    await page.locator("//div[contains(text(), 'Get your free quote') and @class='btn-rise-text text-nowrap ']").click()
    await expect.soft(page).toHaveURL(homepage_url+'contact-us');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});