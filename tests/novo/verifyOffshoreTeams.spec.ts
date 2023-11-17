import { test, expect } from '@playwright/test';

let currentpage_url = "https://dev-unientwww.euwest01.umbraco.io/teams/";

test('check teams page - hero banner', async ({ page }) => {
    await page.goto(currentpage_url);   
    await expect.soft(page.locator("//h1[starts-with(text(),'Flexible and Simplified') and contains(., 'Offshore Team Solutions')]")).toBeVisible(); 
    await expect.soft(page.locator("//p[starts-with(text(),'Access premium talent pools for scalable team augmentation and') and contains(., 'seamless global expansion.')]")).toBeVisible(); 
    await page.locator("//div[@class='col-lg-12 col-sm-12']//a[@title='Get your free quote' and @href='#BookMyConsultation' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'#BookMyConsultation');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
});

test('check teams page - engage onboard and scale your offshore team', async ({ page }) => {
    await page.goto(currentpage_url);  
    
    // verifying component elements
    await expect.soft(page.locator("//h2[starts-with(text(),'Engage, Onboard, and Scale') and contains(., 'Your Offshore Team')]")).toBeVisible();  
    await expect.soft(page.locator("//p[starts-with(text(),'Unient Offshore Teams allows you to tap into our network of in-demand skills to build the team you need and') and contains(., 'to reconfigure to meet your changing business needs.')]")).toBeVisible();  
    await expect.soft(page.locator("//img[@src='/media/k1tprvyp/offshore-article-1-2476x1448.webp']")).toBeVisible();  
    await expect.soft(page.locator("//span[contains(text(),'Team augmentation offers a responsive and flexible solution to a variety of staffing challenges that impede productivity and innovation.')]")).toBeVisible();  
    await expect.soft(page.locator("//span[contains(text(),'With Unient as your offshore team provider, you get access to top vetted professionals in diverse fields and specialties. Quickly select and onboard the roles you need to ease the load of your in-house staff or build an entirely new team.')]")).toBeVisible();  
    await expect.soft(page.locator("//span[contains(text(),'Unient Teams is a cost-effective, time-saving, and efficient alternative to the traditional employment models that are holding you back. Build your team with us and fast-track your growth.')]")).toBeVisible();  
    
    // clicking of red button
    await page.locator("//div[@class='container pb-lg-11 pb-5']//a[@title='Get your free quote' and @href='#BookMyConsultation' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'#BookMyConsultation');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
});

test('check teams page - unient offshore teams component', async ({ page }) => {
    let component2 = "//div[@class='row justify-content-lg-around  align-items-center']";
    await page.goto(currentpage_url);    

    // verifing component elements
    await expect.soft(page.locator(component2+"//h2[contains(text(),'Unient Offshore Teams')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[contains(text(),'All-inclusive offshore team augmentation solutions to help you scale faster and achieve more for less.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//span[contains(text(),'Quality — Best-in-industry professionals with onshore performance equivalence and a perpetual replacement guarantee.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//span[contains(text(),'Affordable — Savings of up to 60% compared to onshore hiring.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//span[contains(text(),'Verifiable — Simplified hourly billing, domestic invoicing and customizable to-the-minute time accounting reports.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//span[contains(text(),'Hassle-free — Our resource hourly rates are inclusive of your own Operations Manager and Client Success Manager to handle day-to-day People Management.')]")).toBeVisible();
    await expect.soft(page.locator(component2+"//p[starts-with(text(),'Unient offers a') and contains(.,', not an Employer of Record service. From day-to-day people management to comprehensive operational functions, we are your partner every step of the way.' )][a[@href='/insights/managed-resources-setting-your-offshore-team-up-for-success/']]")).toBeVisible();
    await expect.soft(page.locator(component2+"//img[@src='/media/cfbnigsx/diagram-offshore-with-title-9-11-2023.webp']")).toBeVisible();

    // clicking of red button
    await page.locator("//div[@class='row justify-content-lg-around  align-items-center']//a[@title='Get your free quote' and @href='#BookMyConsultation' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'#BookMyConsultation');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
});

test('check teams page - typical roles component', async ({ page }) => {
    await page.goto(currentpage_url);  

    // verifying component elements
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h2[contains(text(), 'Typical Roles We Provide')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//p[contains(text(), 'We bridge the gap between your business goals and the expert skills needed to achieve them.')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/gvtjej52/it-roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Information Technology')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Software Engineer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Solutions Architect')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Manual & Automation Tester')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Project Manager')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Business Analyst')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/4yvhdg0o/hr-roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Human Resources')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'HR Manager')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'HR Generalist')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Recruiter')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Employee Relations Officer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'HR Data Analyst')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/kirjvuuz/engineering-support-roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Customer Support and Success')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Customer Support Associate')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Technical Support Associate')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Customer Success Manager')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Customer Services Director')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Service Desk Specialist')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/sjihvtki/creative-roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Creative and Marketing')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Graphic Designer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Video Editor')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Digital Marketer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'SEO Specialist')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'UI & UX and Web Designer')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/zuwfexiw/accountancy-roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Accounting and Finance')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Certified Public Accountant')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Project Accountant')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Bookkeeper')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Tax Consultant')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Payroll Admin')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/emshk4x3/engineering_roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Engineering')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Civil, Mechanical, and Chemical Engineer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Electronics/Electrical Engineer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'CAD Operator')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Construction Estimator')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/p4gdbtx2/architecture_roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Architecture and Design')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//div[@class=' column-responsive text-center pt-9 '][7]//li[contains(text(),'Architect')][1]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Draftsperson')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Interior Designer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Urban Planner')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Architecture Consultant')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/wyentxm1/legal_roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Legal and Compliance')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Legal Counsel')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Paralegal')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Legal and Compliance Officer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Liaison Officer')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Legal Secretary')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/q2dbd2u2/admin_roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Administrative Assistants')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Virtual Assistant')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Admin Assistant')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Admin Manager')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Scheduling Coordinator')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Records Manager')]")).toBeVisible();
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//img[@src='/media/onsjrcxt/sales_roles.webp']")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h4[contains(text(),'Sales & Business Development')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Inbound Sales Associate')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Outbound Sales Associate')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'Business Development Manager')]")).toBeVisible();
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//li[contains(text(),'CRM Specialist')]")).toBeVisible();    
    
    await expect.soft(page.locator("//section[@class='section-white position-relative  d-lg-block d-md-block d-none overflow-hidden']//h5[contains(text(),'Augment your existing teams or build one from the ground up with Unient!')]")).toBeVisible();
   
    // clicking of buttons
    await page.locator("//div[@class='row justify-content-lg-around   align-items-center']//a[@title='Get your free quote' and @href='#BookMyConsultation' and contains(.,'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'#BookMyConsultation');
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/information-technology/']/h4[contains(text(),'Information Technology')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'information-technology/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Information Technology Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/human-resources/']/h4[contains(text(),'Human Resources')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'human-resources/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Human Resources Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/customer-support-and-success/']/h4[contains(text(),'Customer Support and Success')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'customer-support-and-success/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Customer Support and Success Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/creative-and-marketing/']/h4[contains(text(),'Creative and Marketing')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'creative-and-marketing/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Creative and Marketing Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/accounting-and-finance/']/h4[contains(text(),'Accounting and Finance')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'accounting-and-finance/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Accounting and Finance Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/engineering/']/h4[contains(text(),'Engineering')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'engineering/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Engineering Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/architecture-and-design/']/h4[contains(text(),'Architecture and Design')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'architecture-and-design/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Architecture & Design Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/legal-and-compliance/']/h4[contains(text(),'Legal and Compliance')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'legal-and-compliance/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Legal and Compliance Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/administrative-assistants/']/h4[contains(text(),'Administrative Assistants')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'administrative-assistants/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Administrative Support Team | Unient');
    
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await page.locator("//div[@class='row  reverse-triangle']//a[@href='/teams/sales-business-development/']/h4[contains(text(),'Sales & Business Development')]").click();
    await expect.soft(page).toHaveURL(currentpage_url+'sales-business-development/');
    await expect.soft(page).toHaveTitle('Your Dedicated Offshore Sales & Business Development Team | Unient');
});

test('check teams page - is a dedicated offshore team right for you', async ({ page }) => {
    await page.goto(currentpage_url);
    await expect.soft(page).toHaveTitle('Flexible and Simplified Offshore Team Solutions | Unient');
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//h2[contains(text(),' Is a Dedicated Offshore Team Right for You?')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//img[@src='/media/1bphu5zu/offshore_team.webp']")).toBeVisible();

    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'What is a dedicated offshore team?')]")).toBeVisible();
    await page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'What is a dedicated offshore team?')]").click();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//h2[@class='accordion-header']//button[contains(text(),'What is a dedicated offshore team?')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-body']//span[contains(.,'s dedicated offshore team model allows you to build your dream team of skilled professionals from our pre-vetted pool of talents from different industries and different skill levels. Shore up your existing in-house capabilities and fill in skills gaps with your offshore team or jumpstart entire projects with cross-functional experts who are working exclusively for your organisation. You determine the goals, scope, and workstream while Unient takes on the operational load of daily management, monitoring, and delivering results.')]")).toBeVisible();

    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'Why work with a dedicated offshore team?')]")).toBeVisible();
    await page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'Why work with a dedicated offshore team?')]").click();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//h2[@class='accordion-header']//button[contains(text(),'Why work with a dedicated offshore team?')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-body']//span[contains(text(),'Unient Teams offers scalability, flexibility, cost-efficiency, and access to experts. Bypass the staffing challenges that are draining your resources, wasting your time and money, preventing you from pursuing innovation, and ultimately stalling your growth with a dedicated offshore team.')]")).toBeVisible();
    
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'When should you consider offshore team augmentation?')]")).toBeVisible();
    await page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//button[contains(text(),'When should you consider offshore team augmentation?')]").click();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-item mb-3']//h2[@class='accordion-header']//button[contains(text(),'When should you consider offshore team augmentation?')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='row justify-content-lg-around  align-items-center']//div[@class='accordion-body']//p[contains(text(),'If you are ready to scale up or expand operations but you’re working on a tight budget and a tight deadline, or if you are pursuing a project that demands flexibility and specific expertise, Unient Teams is here to help. Reduce costs and time-to-market and unburden your in-house resources with a dedicated offshore team.')]")).toBeVisible();
});

test('check teams page - take the next step in transforming your business today form', async ({ page }) => {
    await page.goto(currentpage_url);    
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//h2[contains(text(),'Take the next step in transforming your business today!')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//form[@id='bookMyConsultation']//label[@for='inputName' and contains(text(),'Name')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputName']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Job Title')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputJobTitle']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Company Email')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputCompanyEmail']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Company Name')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputCompanyName']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Country')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputCountry']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Contact Number')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//input[@id='inputContactNumber']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//label[contains(text(),'Message')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//textarea[@id='inputMessage']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//button[@id='BookMyConsultationButton']")).toBeDisabled();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//div[starts-with(text(),'Submitting your information means you agree to Unient') and contains(text(),'s')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='container position-relative text-center mb-6 ']//a[@href='/privacy-and-cookie-policy' and contains(text(),'Privacy and Cookie Policy.')]")).toBeVisible();
    
    await page.fill("//input[@id='inputName']", "Test Name");
    await page.fill("//input[@id='inputJobTitle']", "Test Job Title");
    await page.fill("//input[@id='inputCompanyEmail']", "glenn.badong+automation@unient.biz");
    await page.fill("//input[@id='inputCompanyName']", "Test Company Name");
    await page.fill("//input[@id='inputCountry']", "Philippines");
    await page.fill("//input[@id='inputContactNumber']", "09152596888");
    await page.fill("//textarea[@id='inputMessage']", "Test Message");
    await page.locator("//div[@class='container position-relative text-center mb-6 ']").click();
    
    await page.locator("//button[@id='BookMyConsultationButton']").click();

    // POPUP WILL APPEAR, AND CHECK ALL ELEMENTS IN THE POPUP
    // // await page.on('dialog', async dialog => {
    //     await expect.soft(page.locator("//button[@id='BookMyConsultationButton' and contains(text(),'Processing...')]")).toBeDisabled();
    //     await expect.soft(page.locator("//div[@class='modal-content']//img[@src='/media/p2mdwvkx/check-mark-green.webp']")).toBeVisible();
    //     await expect.soft(page.locator("//div[@class='modal-content']//h2[contains(text(),'Thank you for your submission!')]")).toBeVisible();
    //     await expect.soft(page.locator("//div[@class='modal-content']//p[contains(text(),'Your form was successfully submitted.')]")).toBeVisible();
    //     await expect.soft(page.locator("//div[@class='modal-content']//p[contains(text(),'Our Solutions Consultants will get in touch with you for the next step.')]")).toBeVisible();
    //     await expect.soft(page.locator("//div[@class='modal-content']//button[contains(text(),'Continue browsing →')]")).toBeVisible();
    //     await page.locator("//div[@class='modal-content']//button[contains(text(),'Continue browsing →')]").click();
    // // });
    
    // await expect.soft(page.locator("//div[@class='modal-content']")).toBeHidden();
});

