import { test, expect } from '@playwright/test';
import exp from 'constants';

let currentpage_url = "https://dev-unientwww.euwest01.umbraco.io/infotech/";
let homepage_url = "https://dev-unientwww.euwest01.umbraco.io/";

test('check infotech button - hero banner', async ({ page }) => {
    await page.goto(currentpage_url);    
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
    await expect.soft(page.locator("//h1[contains(text(),'Custom Tech Solutions')]")).toBeVisible();
    await expect.soft(page.locator("//h1[contains(.,'Delivered the Right Way')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Gain a competitive edge in any industry with software-intensive products') and contains(.,'tailor-made for your unique business needs.')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 col-sm-12']//a[@href='/contact-us/' and @title='Get your free quote']/div[contains(text(), 'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('check infotech button - carousel', async ({ page }) => {
    await page.goto(currentpage_url);    
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
    await page.locator("//div[@class='col-lg-12 pb-3  me-xl-auto overflow-hidden']//a[@href='/contact-us/' and @title='Get your free quote']/div[contains(text(), 'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('check infotech button - CTA', async ({ page }) => {
    await page.goto(currentpage_url);    
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
    await expect.soft(page.locator("//h2[starts-with(text(),'Stay ahead of the curve and') and contains(.,'beat disruption with Unient!')]")).toBeVisible();
    await page.locator("//div[@class='container position-relative text-center mb-6 ']//a[@href='/contact-us/' and @title='Get your free quote']/div[contains(text(), 'Get your free quote')]").click();
    await expect.soft(page).toHaveURL(homepage_url+'contact-us/');
    await expect.soft(page).toHaveTitle('Contact Us | Unient');
});

test('validate text content in Infotech', async ({ page }) => {
    await page.goto(currentpage_url);    
    await expect.soft(page).toHaveTitle('Custom Offshore Tech Solutions Delivered the Right Way | Unient');
    
    // CHECKING CAROUSEL COMPONENT
    await expect.soft(page.locator("//section[@class='section-white-slider position-relative   d-flex align-items-center  text-dark jarallax pb-6']//h2[contains(text(), 'How Unient Works With You')]")).toBeVisible();
   
    await page.locator("//span[@aria-label='Go to slide 1']").click();
    await expect.soft(page.locator("//div[@class='swiper-button-next me-3 me-lg-0' and @aria-label='Next slide']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//div[contains(text(), '01')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//img[@src='/media/02mjxblj/2unient-works-with-you-4planning-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//h3[contains(text(), 'Planning')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//p[contains(text(), 'Mapping out team and technical requirements')]")).toBeVisible();

    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//div[contains(text(), '02')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//img[@src='/media/j4yn1ovc/2unient-works-with-you-4analysis-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//h3[contains(text(),'Analysis')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//p[contains(text(),'Breaking down business process requirements')]")).toBeVisible();

    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//div[contains(text(), '03')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//img[@src='/media/basbelt2/2unient-works-with-you-4design-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//h3[contains(text(), 'Design')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//p[contains(text(), 'Outlining the details and create the blueprint')]")).toBeVisible();

    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//div[contains(text(), '04')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//img[@src='/media/3dudjgw0/2unient-works-with-you-4development-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//h3[contains(text(), 'Development')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4']//p[contains(text(), 'Building the product from concept to reality')]")).toBeVisible();

    await page.locator("//span[@aria-label='Go to slide 2']").click();
    await expect.soft(page.locator("//div[@class='swiper-button-prev ms-3 ms-lg-0' and @aria-label='Previous slide']")).toBeVisible();

    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//div[contains(text(), '04')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//img[@src='/media/3dudjgw0/2unient-works-with-you-4development-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//h3[contains(text(), 'Development')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-active']//p[contains(text(), 'Building the product from concept to reality')]")).toBeVisible();

    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//div[contains(text(), '05')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//img[@src='/media/14nlyntz/2unient-works-with-you-5testing-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//h3[contains(text(), 'Testing')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='swiper-slide col-12 col-sm-6 col-md-6 col-lg-4 swiper-slide-next']//p[contains(text(), 'Making sure it does what it is supposed to do')]")).toBeVisible();

    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//div[contains(text(), '06')]")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//img[@src='/media/4ippivdg/2unient-works-with-you-6implementation-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//h3[contains(text(), 'Implementation')]")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//p[contains(text(), 'Ensuring successful roll-out')]")).toBeVisible();

    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//div[contains(text(), '07')]")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//img[@src='/media/jhmfp0rz/2unient-works-with-you-4maintenance-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//h3[contains(text(), 'Maintenance and Warranty')]")).toBeVisible();
    await expect.soft(page.locator("//div[@style='transition-duration: 0ms; transform: translate3d(-849px, 0px, 0px);']//p[contains(text(), 'Building the product from concept to reality')]")).toBeVisible();

    // CHECKING FILTER COMPONENT
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//h2[contains(.,'Unient\’s Infotech Services')]")).toBeVisible();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//span[contains(.,'Filter by:')]")).toBeVisible();
    
    // Across the board services tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Across-the-Board Services')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Across-the-Board Services')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Across-the-Board Services')]")).toBeEnabled();
    await expect.soft(page.locator("//img[@src='/media/rzmfoxsj/abs1-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(), 'Project Management')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(), 'Unient Project Management is a flexible service helping businesses deliver infotech projects of any scale and scope on schedule and within budget from initiation to implementation. Our Project Managers are equipped and up-to-date with the necessary professional certifications and are trained in different methodologies, such as Waterfall and Agile.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@src='/media/fh1pdfyb/abs2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(), 'Business Analysis')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(., 'Tap into our wealth of experience and diverse skillsets to advance your business, improve processes, or implement change. Our Business Analysts work across all levels of an organisation to identify critical business requirements, develop strategy, create an enterprise architecture, support development, or take the lead role in delivering desired outcomes. Unient')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(., 's Business Analysis service includes Process Mapping, Data Mapping and Business and Technical Analysis.')]")).toBeVisible();

    // design and experience tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Design and Experience')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Design and Experience')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Design and Experience')]")).toBeEnabled();
    await expect.soft(page.locator("//img[@src='/media/bhlfrvp3/de1-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'User Interface (UI) Design')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(.,'Unient') and contains(., 's skilled and design-obsessed UI team works with businesses to create beautiful and functional front-end applications which reflect the brand vision. We get to know your users, understand their needs and anticipate their wants.') and contains(.,'Our team brings together a solid grasp of information architecture, interaction design and visual design. The result: an on-brand and smart UI design with intuitive navigation and accessible features.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/5afozm23/de2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'User Experience (UX) Design')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'User experience is an inextricable part of brand-building. Partner with Unient to create an empathic and accessible UX design for a branded digital experience that leads to better conversions and enhances satisfaction every time your target audience interacts with your product. Good UX is not only about optimal and effortless usability but also inclusivity. We ensure a variety of voices are being heard when designing for diverse populations.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/jrzp1os3/de3-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Prototyping')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(.,'Validate your product ideas, turn concepts into tangible designs and refine functionalities with Unient') and contains(.,'s prototype development services. From concept and development to testing, our highly skilled team of experts offers a quick, collaborative, transparent, iterative, and cost-effective delivery model. We follow precise and proven methodologies that begin with a comprehensive understanding of your strategic intent and stakeholder requirements. Partner with Unient to bring your vision to life.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/rormk4nw/de4-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Wireframing')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Websites and mobile apps are critical investments for any business and we offer Wireframing services to help you get it right at the structural level. With the user journey front and centre, our design team creates wireframes that serve as blueprints for how websites or apps will be built, how they will appear, and how they will work. Make sure your business requirements are met and refine user experience in this stage of your website or app design or redesign with Unient.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/2hsjy3dz/de5-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Solution Architecture')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(.,'Unient') and contains(., 's Solution Architecture services help businesses evaluate existing technology environments and architectural systems to determine how to leverage IT to achieve their goals. We assess feasible technology stacks and convert your requirements into technical build specifications, which cover infrastructure, architectural layouts, and technical tools and systems. Our team is up to date with evolving industry standards and is equipped and licensed with various certifications such as AZURE and AWS.')]")).toBeVisible();

    // software development tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Software Development')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Software Development')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Software Development')]")).toBeEnabled();
    await expect.soft(page.locator("//img[@src='/media/4t4l0xjz/sd1-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Custom Software Development')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Unient partners with your business to develop a product to address your exact requirements. We offer Custom Software Development services that cover planning, design, development, automated and manual testing, implementation, and maintenance. Our highly skilled development team create new software solutions, improve current software, or upgrade and integrate new systems.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/vx0owmzf/sd2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'E-commerce Development')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Get maximum ROI for your e-commerce website. Unient') and contains(text(),'s team of developers, designers and QA specialists work together to deliver a high-functioning e-commerce website built to drive conversion and stand out from the competition. We offer storefront hosting, payment processing, inventory management, data security, order tracking for your customers and other unique functionalities your business may require.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/btnbcsmd/sd3-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Mobile App Development (Android / iOS)')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Be accessible anywhere and from any device. Unient offers custom mobile app development services to suit your unique business needs. We work with you to develop a mobile strategy to meet your goals, whether it') and contains(text(),'s to streamline operations, stay connected to your users, or increase your customer base. Our team of developers stays up-to-date on the latest mobile application technologies for various operating systems such as IOS, Android and Windows.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/fjqh1sba/sd4-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'SaaS Development')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Unient offers businesses premium Software-as-a-Service (SaaS) solutions to help streamline operations. Partner with us for unparalleled security, accessibility and scalability to accommodate your business') and contains(text(),'s unique and growing needs. We offer effortless upgrades, strong encryption for your all-sensitive data and high compatibility with your other existing software by using an API.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/cisnwvwz/sd5-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Custom Web Development')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Unient offers tailor-made websites that are secure, fast and fully aligned with your business goals and brand identity. Our Custom Web Development team has a broad range of experience supporting different types of businesses across diverse industries. We are equipped and knowledgeable in the latest tools and technologies, as well as in industry-specific and niche applications that give your business an edge over the competition.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/fdtduphc/sd6-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Internet of Things (IoT)')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Unient provides smart and innovative end-to-end IoT solutions for every business. We are your partner in developing and implementing of IoT-empowered products and services in line with your business objectives. Whether you are looking to improve automation and efficiency or enable smarter data collection and decision-making, we create and customise solutions for you. Our team is experienced in providing IoT solutions in logistics and is equipped to work across various industries and verticals.')]")).toBeVisible();
    
    await expect.soft(page.locator("//img[@src='/media/qwehy3us/sd7-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Minimum Viable Product (MVP) Development')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Launching your product with Unient as your partner sets you on the road to success. We work with businesses to get their product to market swiftly and in alignment with their objectives. Our cross-functional team of engineers and product experts are on hand every step of the way to deliver end-to-end Minimum Viable Product development, from refining the product idea, defining core features, mapping out the user flow, creating proof of concept to product development and launching your MVP.')]")).toBeVisible();

    // quality assurance tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Quality Assurance')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Quality Assurance')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Quality Assurance')]")).toBeEnabled();
    await expect.soft(page.locator("//img[@src='/media/lezeu3nx/qa1-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Automation Testing')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Unient offers first-rate software automation testing services to all types of businesses. We work with you to achieve maximum test coverage, improve efficiency, accelerate processes, and ensure flawless quality. Our Automation Testing team is composed of engineers with diverse and in-depth domain knowledge and industry experience. We select testing tools, maintain the test environment and develop and execute automation frameworks and strategies at the critical stages in the development process.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/rsnbxatl/qa2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Manual Testing')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(.,'Our experts conduct an analysis of requirements, create a clear test plan and complete a rigorous manual testing procedure that covers all your business requirements.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Included are the following stages:')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Unit Testing - The functionality of individual components.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Integration Testing - How the different components work together to achieve the desired result.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'System Testing - All the integrated modules of the software as a whole')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Acceptance Testing - Performed by our team and your business.')]")).toBeVisible();

    // support tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Support')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Support')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Support')]")).toBeEnabled();

    await expect.soft(page.locator("//img[@src='/media/3f4plhjz/support-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'24/7 Customer and Technical Support')]")).toBeVisible();
    await expect.soft(page.locator("//span[starts-with(text(),'Make customer care your competitive advantage with Unient') and contains(text(),'s suite of customer support solutions. This includes Call, Live Chat, Email and Electronic Data Interchange (EDI) support. We offer businesses a tailored support model to fit their existing processes and functionalities.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Service Level Options:')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Level-2 Support: Unient will triage the issue and resolve it with business processes or data updates.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Level-3 Support: Unient will perform actual code changes to resolve the issues.')]")).toBeVisible();

    // cloud and infrastructure tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Cloud and Infrastructure')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Cloud and Infrastructure')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Cloud and Infrastructure')]")).toBeEnabled();

    await expect.soft(page.locator("//img[@src='/media/1ntg1qxo/ci1-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Azure/AWS Certified Team')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Unient') and contains(text(),'s Azure and AWS Certified Team provides businesses with Azure or AWS services business support, enhanced technical support and architectural guidance. Get instant and round-the-clock feedback for inquiries and troubleshooting assistance from our Azure and AWS Certified community.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/00mbhlog/ci2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Azure/AWS Monitoring')]")).toBeVisible();
    await expect.soft(page.locator("//p[starts-with(text(),'Unient') and contains(text(),'s Azure / AWS Monitoring services deliver complete solutions for collecting, analysing, and acting on telemetry data gathered from cloud and on-premises environments. Partnering with us helps your business optimise the performance of its applications and services by boosting your Azure / AWS visibility and preventing service disruptions by early detection of abnormal behaviour, as well as by identifying irregularities in performance, security and operations.')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/ipshbi4d/ci3-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Monitoring-as-a-Service (MaaS)')]")).toBeVisible();
    await expect.soft(page.locator("//span[starts-with(text(),'Unient') and contains(text(),'s security monitoring service or Monitoring as a Service (MaaS), is for businesses dependent on IT infrastructure with monitoring requirements. We ensure that your solutions and applications are managed well through a ready-to-use monitoring tool with a customisable dashboard, a patching system to keep your security up to date and round-the-clock assistance for any issue that may arise.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Our MaaS can monitor the different functionalities of the following assets:')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Servers and Systems')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Database')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Networking')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Storage')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Application')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Cloud')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Virtual Infrastructure')]")).toBeVisible();

    await expect.soft(page.locator("//img[@src='/media/ikleavdp/ci4-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Integration-Platform-as-a-Service (iPaaS)')]")).toBeVisible();
    await expect.soft(page.locator("//span[starts-with(text(),'Unient helps your business become more connected and easier to manage as you deepen your cloud dependency. We offer Integration-Platform-as-a-Service (iPaaS) that allows you to manage cloud applications and control your organisation') and contains(text(),'s integration flows in one centralised console.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Our iPaaS infrastructure features and capabilities are:')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Integration with new data sources and other business processes')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Data reliability, uptime, and security')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Management solutions, including API')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Monitoring solutions that provide end-to-end visibility')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Ability to scale and adapt to meet evolving enterprise needs')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Data storage on-premises, in the cloud and in hybrid scenarios')]")).toBeVisible();
    
    // other infotech services tab
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Other Infotech Services')]")).toBeVisible();
    await page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Other Infotech Services')]").click();
    await expect.soft(page.locator("//div[@class='col-lg-12 mx-auto']//a[contains(.,'Other Infotech Services')]")).toBeEnabled();

    await expect.soft(page.locator("//img[@src='/media/4rep0yyx/ois-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'CTO')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Unient CTO-on-demand service helps businesses leverage existing and emerging technologies to enhance their products and services. We bridge the gap between your business needs and the technology infrastructure required to implement them.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Our team offers C-level expertise and experience to help your business in the following areas:')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Infrastructure Oversight - For data, security maintenance and network.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Strategic Planning - Taking the lead in technological strategy and infrastructure to achieve business goals.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Customer Liaison - Customer-focused approach in delivering projects to market.')]")).toBeVisible();
    await expect.soft(page.locator("//span[contains(text(),'Innovation - Creating new business models and processes.')]")).toBeVisible();
    await expect.soft(page.locator("//img[@src='/media/w1wbwrg0/ois2-min.webp']")).toBeVisible();
    await expect.soft(page.locator("//h3[contains(text(),'Rescue and Recovery')]")).toBeVisible();
    await expect.soft(page.locator("//p[contains(text(),'Get your troubled business projects back on track. Unient brings a fresh pair of eyes to work out the current state of your project and the technical expertise to guide you to the next steps. We work to address problems, sharpen project objectives, and rebuild performance baselines and thresholds. We have extensive experience in implementing recovery plans and in delivering successful Quality Improvement programs for a diverse range of industries.')]")).toBeVisible();
});
