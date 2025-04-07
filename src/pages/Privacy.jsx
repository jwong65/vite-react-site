import React from 'react'
import './privacy.css'
import privacyImage from "../assets/privacyImage.png"
import privacyImage2 from "../assets/privacyImage2.png"

export default function Privacy() {
  return (
      <div className='page-wrapper'>
        <div className='privacy-hero-section-wrapper'>
          <div className='privacy-box'>
            <div className='privacy-header'>Privacy Policy</div>
            <div className='privacy-subheader'>Last Updated: April 6, 2025</div>
          </div>
        </div>
        <div className='privacy-content-wrapper'>
          <div className='privacy-text'>
            <div className='text-box-privacy'>
            Thunder Monetize provides monetization tools to our customer that allow for revenue generation through digital advertising.This 'Privacy Policy' describes how Thunder Monetize collects, uses and shares personal information in connection with (i) Thunder Monetize services; and (ii) our public-facing business websites found at <a href='https://thunder-monetize.com' className='privacy-link' target="_blank" rel="noopener noreferrer">www.thunder-monetize.com</a>('Site').
            </div>
            <div className='privacy-text-header-1'>Definition of Terms</div>
            <div className='text-box-privacy'>
              Throughout this <span className='highlight-privacy'>Privacy Policy</span>, we use some phrases that are unique to our business or the technology underlying our <span className='highlight-privacy'>Services</span> or may just be new to you. The following are definitions of some of the key terms that you’ll need to know to make it easier to understand this <span className='highlight-privacy'>Privacy Policy</span>:
            </div>
            <div className='text-box-privacy'>
              <ul>
                <li>“<span className='highlight-privacy'>Advertiser</span>” means an entity providing ads to be placed on publisher properties (websites, mobile apps, connected-tv channels).</li>
                <li>“<span className='highlight-privacy'>Interest-Based Advertising</span>” is an umbrella term used throughout this Privacy Policy to indicate cross-device targeting, targeted advertising, cross-contextual behavioral advertising, and similar activities related to the use of profiles to understand the browsing and/or purchasing behaviors of consumers.</li>
                <li>“<span className='highlight-privacy'>Non-Personal Information</span>” means information that is not associated with or linked to Personal Information including aggregate or de-identified information.</li>
                <li>“<span className='highlight-privacy'>Personal Information</span>” means any information that can be used to directly or indirectly identify a natural person, such as contact information (i.e., name, address, e-mail address, and/or phone number), and/or information that uniquely and persistently identifies a browser or device, such as an IP address, mobile advertising identifier, unique online identifiers, email address that has been hashed to generate an alphanumeric identifier, or combination of information about a browser or device (such as IP address and browser type/settings).</li>
                <li>“<span className='highlight-privacy'>Publishers</span>” are properties (websites, mobile apps or connected tv channel) that use Thunder Monetize services, or natural persons who interact with Thunder Monetize on behalf of such properties (websites, mobile apps or connected tv channels). Publishers are also Thunder Monetize customers.</li>
                <li>“<span className='highlight-privacy'>Users</span>'' are individuals who visit our Publishers’ properties or the Site.</li>
                <li>“<span className='highlight-privacy'>Thunder Monetize</span>” or “<span className='highlight-privacy'>we</span>,” “<span className='highlight-privacy'>us</span>,” or “<span className='highlight-privacy'>our</span>” means THUNDER MONETIZATION PTE. LTD. and HONGKONG THUNDER SOLUTION LIMITED with our affiliates (including those not under the Thunder Monetize brand).</li>
              </ul>
            </div>

            <div className='privacy-text-header-1'>Description of Thunder Monetize Services</div>
            <div className='text-box-privacy'>The Thunder Monetize Services that collect information from Users are</div>
            <div className='text-box-privacy'>
              <ul>
                <li>Exchange and Ad Management for <a href='https://bbbaccountabilityprogram.freshdesk.com/support/solutions/articles/35000046312-what-is-interest-based-advertising-' className='privacy-link' target="_blank" rel="noopener noreferrer">Interest-based Advertising</a>;</li>
                <li>Signal for viewer engagement metrics.</li>
              </ul>
            </div>
            <div className='text-box-privacy'>In order to provide the Services, we collect Personal Information from our Publishers as described in our Publisher contractual agreements, and this Privacy Policy.</div>
            <div className='text-box-privacy'>In addition to the Services, Thunder Monetize collects Personal Information through interactions with the Site. By visiting or submitting Personal Information through the Site, you acknowledge the processing of your Personal Information in accordance with this Privacy Policy.</div>
            
            <div className='privacy-text-header'>Information We Collect</div>
            <div className='text-box-privacy'>
              The information we collect allows us to see browsing habits at an individual device level, but we do not attempt to identify the exact individual who is browsing. Here we outline the types of information used in Interest-Based Advertising, as well as what to expect when visiting our Site.
            </div>
            <div className='text-box-privacy'>
              Thunder Monetize Services and Site collects both Personal Information and Non-Personal Information. Thunder Monetize does not collect personally identifiable information (“PII”) about Users that could directly identify them to Thunder Monetize, such as names, surnames, plain-text email addresses, physical addresses, or phone numbers, unless provided to us through the Site when requesting materials or information from us.
            </div>
            <div className='text-box-privacy'>
              The following provides more detail into the types of Personal Information we may collect (and in some instances purchase from partners) and use in conjunction with the Thunder Monetize Services and Site:
            </div>
            <img src={privacyImage} alt="Privacy information" className="privacy-image" />

            <div className='privacy-text-header'>How We Collect Information</div>
            <div className='text-box-privacy'>
              Thunder Monetize uses various technologies to collect both Personal- and Non-Personal Information, such as cookies, web beacons, tracking pixels, or scripts. We also collect information voluntarily provided through our Site. The term ‘cookies’ is used as an umbrella term for these technologies; for convenience, these technologies are collectively referred to in this Privacy Policy as “cookies.”
            </div>
            <div className='text-box-privacy'>
              Both session cookies (which expire once the web browser is closed) and persistent cookies (which stay on a device until deleted or expire) are used to collect viewing and search behaviors by both Thunder Monetize Services and the Site.
            </div>

            <div className='privacy-text-header-1'>Through our Site</div>
            <div className='text-box-privacy'>We collect Personal Information submitted to us voluntarily, such as name and contact information. For example, when signing up to receive our newsletter or to participate in a webinar we collect your email address. When contacting us via email, we will collect the email contents.</div>
            
            <div className='privacy-text-header-1'>Through Thunder Monetize Services</div>
            <div className='text-box-privacy'>The information we gather about browsing preferences and purchasing behaviors using cookies helps us provide Thunder MonetizeServices to our Publishers, which in turn provides meaningful Interest-based Advertising to Users.</div>
            <div className='text-box-privacy'>
              <ul>
                <li>
                  <div className='text-box-privacy'><span className='highlight-privacy'>Users</span>. We set cookies (where allowed) at the first visit to any of the Publisher properties that deploy Thunder Monetize Services. If our cookie is already set on a browser, we recognize a returning User and log data using the existing cookie. Users have the option to use tools provided by browsers to decline to receive cookies or to clear cookies, which will result in us treating the User as a new visitor when encountering Thunder Monetize Services. However, in order to stop Interest-based Advertising by Thunder Monetize, individuals must explicitly opt-out as described in the “<a href="#opt-out" className='privacy-link'>How to Opt-Out</a>” section.</div>
                  <div className='text-box-privacy'>Some of our business partners (for example, Google Analytics) may set or use their own cookies on our Publisher properties or through Thunder Monetize Services where Thunder Monetize has no access to or control over these cookies. Specific to Google Analytics, opt-out by visiting <a href='https://tools.google.com/dlpage/gaoptout/' className='privacy-link' target="_blank" rel="noopener noreferrer" >https://tools.google.com/dlpage/gaoptout/</a></div>
                </li>
                <li>
                  <div className='text-box-privacy'><span className='highlight-privacy'>Publishers</span>. Publishers provide Personal Information about themselves when registering to use Thunder Monetize Services. Personal Information collected at registration may include: a valid email address, username and password, first and last name, telephone number, website(s) URLs, software, mobile applications, log-in IP address(es), physical address, ZIP code, and country of residence for the Publisher contact.</div>
                  <div className='text-box-privacy'>When using the Thunder Monetize Platform to manage your account, we will also set cookies that allow us to remember your preferences, as well as to collect analytics about how our customers are interacting with the service.</div>
                  <div className='text-box-privacy'>We collect Publisher payment information from those who purchase Thunder Monetize Services.</div>
                  <div className='text-box-privacy'>Publishers may choose not to provide us with certain Personal Information, but this may limit the features of the Thunder Monetize Services available for use.</div>
                </li>
              </ul>
            </div>
            
            <div className='privacy-text-header-1'>Through Internet-Connected Technology</div>
            <div className='text-box-privacy'>As Publishers use the Thunder Monetize Services or Users access or use digital properties within the Thunder Monetize Publisher network (including websites or applications on internet-connected technology, such as computers, mobile devices, or internet-connected televisions), we may also collect web viewing and search activities across non-affiliated websites (including websites accessed through your television), directly through content viewed on an internet-connected television, and mobile applications (“apps”) over time (also known as cross-device tracking). This information may be linked to Personal Information that identifies a browser or device, typically through cookies or tracking pixels/web beacons.</div>
            <div className='text-box-privacy'>Thunder Monetize may store cookies on your device in order to:</div>
            <div className='text-box-privacy'>
              <ul>
                <li>For Publishers, to allow you to use and access secure areas of Thunder Monetize Services. Without these cookies, it may not be possible to load or offer key functionalities, such as logging in to your account, displaying dynamic elements or uploading information.</li>
                <li>For both Publishers and Users, for statistical purposes and to analyze and improve the use and performance of Thunder Monetize and the Site, and to do the same for our Publishers’ websites. We also use cookies for a better online experience, as cookies allow us to load or offer key functionalities on our Site, such as displaying dynamic elements or uploading information.</li>
                <li>For Users, to support Thunder Monetize Services, such as for our analytics and data services and to provide Users with Interest-based Advertising and the ability to opt out of such advertising, all as further described in this Privacy Policy. We also use cookies for social media and multimedia functionalities, where videos and other media often rely on cookies to function correctly. In addition, social media platforms such as Facebook and X can use cookies to see if you are logged in and enable you to “like” content or send it to your friends. When you use these features, such third-party companies can collect information from you. Depending on your settings, these external parties may also use such information for advertising purposes. If you would like to know more about this, please refer to the respective privacy policies of these third parties.</li>
              </ul>
            </div>
            <div className='text-box-privacy'>In some instances, our business partners link the information we gather through cookies to device identifiers associated with the same Reader (also known as cross-device mapping). They will then share the cross-device mapping or other user data with us, for the purpose of Interest-based Advertising.</div>
            <div className='text-box-privacy'>We may also use web beacons or “pixels” to collect Personal Information, which are electronic images that may be used on website(s) (including Publisher websites and the Site) or in emails sent in Publisher campaigns or from Thunder Monetize directly. We use tracking pixels to, for example, collect hashed emails, sync unique online identifiers, deliver cookies, count visits, understand usage and effectiveness of offers, and tell whether an email has been opened and acted upon.</div>
            
            <div className='privacy-text-header-1'>Information from Third-Party Sources</div>
            <div className='text-box-privacy'>We may receive Personal- and Non-Personal Information about you from other sources and combine it with the information that we collect through Thunder Monetize Services or the Site. Sources may include information conveyed to us by telephone, information that we receive from third-party data providers, or information provided to us by third parties through the Thunder Monetize Publisher network.</div>
            
            <div id='use-info' className='privacy-text-header'>How We Use Information</div>
            <div className='text-box-privacy'>We use Personal- and Non-Personal Information to support our commercial interests (Interest-based Advertising, affiliate network marketing, and Data), internal business operations (such as improving the Services, fraud prevention and security), and business intelligence.</div>
            
            <div className='privacy-text-header-1'>Commercial Interests</div>
            <div className='text-box-privacy'>Commercial interests are activities that allow Thunder Monetize and/or our customers and business partners (such partners include data services and data resellers) to earn revenue and include, for example:</div>
            <div className='text-box-privacy'>
              <ul>
                <li>Serving Interest-based Advertising to Readers on behalf of our Publishers and supporting third parties’ Interest-Based Advertising activities. Options for opting-out of such advertising may be found in the “<a href='#opt-out' className='privacy-link'>How to Opt-Out</a>” section of this Privacy Policy.</li>
                <li>Providing Thunder Monetize Services, or any other materials requested through the Site (such as electronic newsletters or promotional emails) to Publishers. Options for opting-out of Thunder Monetize marketing may be found in the “<a href='#opt-out' className='privacy-link'>How to Opt-Out</a>” section of this Privacy Policy.</li>
              </ul>
            </div>

            <div className='privacy-text-header-1'>Internal Business Operations</div>
            <div className='text-box-privacy'>Internal business operations are activities that allow us to meet obligations to Publishers, Users, and third-party partners (including regulatory bodies). Internal business operations do not directly benefit any one person or entity, and include, for example:</div>
            <div className='text-box-privacy'>
              <ul>
                <li>Auditing related to counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance with various data privacy laws and regulations, as well as other standards.</li>
                <li>Debugging to identify and repair errors that impair existing intended functionality of our products, content, services and websites.</li>
                <li>Improve and protect our products, content, services and websites, to the extent the use of the Personal Information is reasonably necessary and proportionate for these purposes.</li>
                <li>Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying Publisher information, processing payments, or providing analytic services.</li>
                <li>Monitoring any Publisher account to prevent, investigate and/or report fraud, terrorism, misrepresentation, security incidents or crime, in accordance with applicable law.</li>
                <li>Compliance with applicable laws and to protect Thunder Monetize’s legitimate business interests and legal rights, including, but not limited to, use in connection with legal claims, compliance, regulatory, investigative purposes (including disclosure of such information in connection with law enforcement requests, legal process or litigation), protecting our and others’ rights, privacy, safety, or property, and enforcing our agreements.</li>
                <li>Responding to comments or complaints or sending service-related communications.</li>
              </ul>
            </div>

            <div className='privacy-text-header-1'>Business Intelligence</div>
            <div className='text-box-privacy'>Business intelligence allows us to analyze and report on the performance of Thunder Monetize Services and the Site, as that performance relates to Publisher or Thunder Monetize campaigns, and includes:</div>
            <div className='text-box-privacy'>
              <ul>
                <li>Monitoring the use of Thunder Monetize Services to support Publisher analytics and reporting.</li>
                <li>Undertaking internal research for technological development and demonstration.</li>
                <li>Performing Analytical Analysis. We work with third parties that collect data about User use of the Site and other websites or online services over time for non-advertising purposes. For example, we use Google Analytics and other third-party services to improve the performance of Thunder Monetize Services and for analytics and marketing purposes. For more information about how Google Analytics collects and uses data, visit <a href='https://policies.google.com/technologies/partner-sites' className='privacy-link' target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a>. Opt-out of Google Analytics by visiting <a href='https://tools.google.com/dlpage/gaoptout/' className='privacy-link' target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout/</a>.</li>
              </ul>
            </div>

            <div id='information-sharing' className='privacy-text-header-1'>Our Information Sharing Practices</div>
            <div className='text-box-privacy'>Thunder Monetize shares the Personal Information collected through our Services, procured through our data partners, or our Site with the following third parties and as otherwise described in this Privacy Policy:</div>
            <div className='text-box-privacy'>
              <ul>
                <li><span className='highlight-privacy'>Affiliates:</span> Thunder Monetize may share some or all User Personal Information with our Affiliates (i.e. companies which are under common control, such as subsidiaries or joint ventures), in which case we will require our Affiliates to honor this Privacy Policy in all material respects.</li>
                <li><span className='highlight-privacy'>Business Transitions:</span> In the event Thunder Monetize goes through a business transition such as a merger, acquisition by another company, or sale of all or a portion of its assets including in bankruptcy, Personal Information may be among the assets transferred.</li>
                <li><span className='highlight-privacy'>Law Enforcement, Government Authorities, and Private Parties:</span> We may disclose Personal Information if we believe in good faith that such disclosure is necessary to (a) comply with relevant laws or to respond to subpoenas or warrants served on us; (b) to protect and defend the rights or property of Thunder Monetize, Publishers, or third parties; or (c) for the other compliance, fraud prevention, and safety purposes described in this Privacy Policy.</li>
                <li><span className='highlight-privacy'>Publishers:</span> We may disclose Personal Information that identifies a device or browser to Publishers and their service providers to provide the Thunder Monetize Services, such as measuring the effectiveness of advertising, advertising attribution, and preventing advertising fraud, or to indicate User preferences for Interest-Based Advertising.</li>
                <li><span className='highlight-privacy'>Other Third-Party Customers:</span> We may disclose Personal Information that identifies a device or browser to our third-party customers that include, for example, other advertising services and data enrichment services, who will use and disclose the information for their own purposes. We may also share Non-Personal Information such as aggregated reports derived in part from the information we have collected. The information we share may also be combined with third-party data to provide an even broader service to our customers. Please see <a href='#opt-out' className='privacy-link'>How to Opt-Out</a> for more information on choices related to this practice.</li>
                <li><span className='highlight-privacy'>Service Providers:</span> We may provide Personal Information to third-party service providers (sub-/processors) who work on behalf of or with us to provide the Thunder Monetize Services including to help us communicate with you. Examples of such services include our ability to send email, perform data analysis, provide marketing assistance, process payments (including credit card payments, through a third-party service), and provide customer service.</li>
                <li><span className='highlight-privacy'>Advertising Partners:</span> We may share your Personal Information with third parties that we partner with to engage in Interest-Based Advertising, including through the use of cookies and similar technologies. These third party advertising companies may collect information about your activity over time through the Services and across other online services to serve you advertisements.</li>
                <li><span className='highlight-privacy'>Professional Advisors:</span>We may share Personal Information with persons, companies, or professional firms providing Thunder Monetize with advice and consulting in accounting, administrative, legal, tax, financial, debt collection, and other matters.</li>
              </ul>
            </div>

          <div id='opt-out' className='privacy-text-header'>How To Opt Out</div>
          <div className='text-box-privacy'>Thunder Monetize supports various opt-out mechanisms, where each option provides different results related to cross-device tracking and targeted advertising. While using these mechanisms may prevent Interest-based Advertising or the sale of your Personal Information, there are no mechanisms for preventing advertising altogether.</div>
          
          <div className='privacy-text-header-1'>Opting Out of Thunder Monetize’s Interest-based Advertising</div>
          <div className='text-box-privacy'>Just as there are different mechanisms for providing Interest-based Advertising (such as through a web browser, apps on your mobile device and connected televisions), there are multiple ways you can limit the use of your personal information for targeted advertising purposes and the sale or sharing of your personal information.</div> 
          <div className='text-box-privacy'>To simplify the management of Interest-based Advertising preferences, Thunder Monetize participates in the Digital Advertising Alliance (DAA) AdChoices program that allows a user to manage their Interest-based Advertising preferences on their browser(s) or device(s) across all participating DAA members.</div>
          <div className='text-box-privacy'>For more information on how to opt-out of the sale or sharing of personal information, please see the section, “<a href='#california-rights' className='privacy-link'>Your California Privacy Rights</a>” located in the “<a href='#us-disclosure' className='privacy-link'>Country and US State Specific Disclosures</a>” section, below.</div> 

          <div className='privacy-text-header-1'>Cookies and Unique Online Identifiers Used by Web Browsers</div>
          <div className='text-box-privacy'>Your opt-out choice will apply to the browser or device where you make the choice. This means that Thunder Monetize will not deliver Interest-based Advertising to this browser or device and we will not otherwise use or transfer data collected on this browser or device for Interest-based Advertising.</div>
          <div className='text-box-privacy'>Users who wish to opt out of Thunder Monetize’s collection, use, or transfer of such data from a browser for Interest-based Advertising purposes can visit <a href='https://www.aboutads.info/' className='privacy-link'>https://www.aboutads.info/</a> to learn more about Interest-based Advertising. There, you may also access the <a href='https://optout.aboutads.info/?c=2&lang=EN' className='privacy-link' target="_blank" rel="noopener noreferrer" >DAA WebChoices</a> tool for managing preferences on web browsers, and to exercise opt-out choice with respect to Thunder Monetize and other companies participating in the DAA’s self-regulatory program.</div>

          <div className='privacy-text-header-1'>Identifiers used by connected TVs and mobile devices / apps</div>
          <div className='text-box-privacy'>Users who wish to opt-out of Thunder Monetize’s collection, use, or transfer of such data from apps on a mobile device for Interest-based Advertising purposes can download the <a href='https://youradchoices.com/appchoices' className='privacy-link' target="_blank" rel="noopener noreferrer"> DAA’s AppChoices application</a> to manage preferences on mobile platforms like Android or Apple iOS devices. More information on your options for opting out of targeted advertising provided through your connected television streaming devices can be found on the <a href='https://thenai.org/opt-out/connected-tv-choices/' className='privacy-link' target="_blank" rel="noopener noreferrer">Network Advertising Initiative (NAI)</a> site.</div>
          <div className='text-box-privacy'>When using DAA’s opt-out tools, choice will be effective only on the browser or device where choice has been exercised. If using a different device or browser, the opt-out choice(s) will need to be renewed for the new device or browser. Our opt-out tool for browsers is cookie-based, so that an opt-out choice can only be honored if a browser is set to accept third-party cookies. If the opt-out cookie is deleted, then the opt-out choice(s) must be renewed.</div>
          <div className='text-box-privacy'>Opting out of Interest-based Advertising prevents the collection of Personal Information but does not prevent data collection of Non-Personal Information.  We may continue to collect, use and transfer such Non-Personal Information for other purposes such as contextual advertising based on a current visit to a website, fraud prevention, or improving site performance.</div>
          <div className='text-box-privacy'>Opting out also will not stop advertising from appearing in a browser. After opting-out, Users may receive advertising from Thunder Monetize Services when visiting websites of a Publisher who uses our Services, but that advertising will not be interest-based. After opting out of Thunder Monetize’s Interest-based Advertising, Users may also continue to receive Interest-based Advertising through other companies.</div>

          <div className='privacy-text-header'>Children’s Privacy</div>
          <div className='text-box-privacy'>Thunder Monetize does not knowingly collect Personal Information from or direct Thunder Monetize Services to children under the age of 16.</div>
          <div className='text-box-privacy'>If you are not 16 years old, please do not use the Site. Do not submit your name, email address, or other personal information using our web forms.</div>
          <div className='text-box-privacy'>As operators of their own websites and content, our Publishers are solely responsible for compliance with law related to the collection and use of information from children under the age of 16. If, during routine review, Thunder Monetize believes children under the age of 16 have submitted their personal information into our web forms or our customer’s websites, we will, in our sole discretion, delete the information believed to belong to those under 16 years old.</div>

          <div id='retention' className='privacy-text-header'>Retention of Personal Information</div>
          <div className='text-box-privacy'>We will retain Personal Information for as long as necessary to fulfill the purpose of collection, including for the purposes of satisfying any legal, accounting, or reporting requirements, to establish and defend legal claims, for fraud prevention purposes, or as long as required to meet our legal obligations. To determine the appropriate retention period for Personal Information, we consider the amount, nature, and sensitivity of the Personal Information, the potential risk of harm from unauthorized use or disclosure of your Personal Information, the purposes for which we process your Personal Information and whether we can achieve those purposes through other means, and the applicable legal requirements.</div>
          
          <div className='privacy-text-header'>Security</div>
          <div className='text-box-privacy'>Thunder Monetize has put in place commercially reasonable physical, electronic, and managerial procedures to safeguard and secure the Personal Information we collect; however, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</div>
          
          <div id='us-disclosure' className='privacy-text-header'>Country and US State Specific Disclosures</div>
          <div className='text-box-privacy'>Various data privacy laws require specific disclosures regarding the collection and use of your Personal Information. These disclosures are meant to supplement, and are consistent with, the practices described in this Privacy Policy.</div>

          <div className='privacy-text-header-1'>Notice to Residents of the EEA, Switzerland and UK: Data Subject Rights</div>
          <div className='text-box-privacy'>This section applies only to individuals located in the European Economic Area (“EEA”), Switzerland or the United Kingdom (“Applicable Countries”) and supplements the practices described in this Privacy Policy. It describes certain rights and protections under applicable law regarding the processing of Personal Information. For purposes of this section, “Personal Information” has the meaning given to “personal data” governed by the Applicable Countries’ data protection legislation.</div>

          <div className='privacy-text-header-1'>Role of Thunder Monetize as a Controller or Processor</div>
          <div className='text-box-privacy'>If located in one of the Applicable Countries, Thunder Monetize may act as a “controller” as defined under applicable law when processing Personal Information. Thunder Monetize may also act as a “processor” as defined under applicable law to the extent that we process Personal Information on behalf of and at the instruction of another party, for example a Thunder Monetize customer.</div>

          <div className='privacy-text-header-1'>Legal Basis for Processing</div>
          <div className='text-box-privacy'>Thunder Monetize’s legal basis for processing Personal Information depends upon the specific context in which it is collected or used. In some cases, we rely on data subject consent (as defined under applicable law) to process Personal Information for Interest-Based Advertising, which we require Publishers using Thunder Monetize Services to obtain on our behalf. In other cases, we may rely on our legitimate interests to collect and use Personal Information, except where our interests are overridden by data-protection interests or fundamental rights and freedoms. For example, we will also process Personal Information collected from Interest-Based Advertising in order to improve the Thunder Monetize Services for our Publishers where permitted by law. Our legitimate interests are described in greater detail in the “<a href='#use-info' className='privacy-link'>How We Use Information</a>” section of this Privacy Policy. These legitimate interests include the operation of our business and the provision of Thunder Monetize Services to our Publishers as required by our agreements with them.</div>
          <div className='text-box-privacy'>Additionally, we may have a legal obligation to process Personal Information (such as for fraud prevention).</div>

          <div className='privacy-text-header-1'>Exercising Data Subject Rights</div>
          
          <div className='privacy-text-header'>Use of User Information</div>
          <div className='text-box-privacy'>Individuals may be entitled to exercise certain data subject rights available under applicable laws. These rights may include the right to request access to Personal Information we hold. Individuals may also have the right to object to, or request that we restrict, processing of Personal Information, such as profiling we perform for the purposes of direct marketing and interest-based advertising. Individuals may also have the right to ask that your Personal Information be corrected, erased, or transferred to another party. Where we have asked for consent to process data, consent may be withdrawn.</div>
          <div className='text-box-privacy'>Anyone afforded any of these rights may exercise them by contacting privacy@thunder-monetize[.]com.</div>
          <div className='text-box-privacy'>These rights may be limited in some situations–for example, where we can demonstrate that we have a legal requirement to process data. In some instances, this may mean that we are able to retain data even if consent is withdrawn. In other instances, we may provide the requested information with some portions redacted in order to adhere to obligations of confidentiality to others.</div>
          <div className='text-box-privacy'>Where we require Personal Information to comply with legal or contractual obligations, provision of Personal Information is mandatory; in all other cases, provision of requested Personal Information is optional.</div>

          <div className='privacy-text-header-1'>Data Transfers</div>
          <div className='text-box-privacy'>Thunder Monetize is a global company headquartered in Singapore, with data centers located in the United States, Singapore and Europe. By visiting Publisher’s properties who are using Thunder Monetize Services, Personal Information may be transferred to, stored, and processed by us, our affiliates, and by those third parties with whom we may share your information, some of which are located outside of the Applicable Countries.</div>
          <div className='text-box-privacy'>These countries (including the United States) may have data protection or other laws that differ from those in the Applicable Countries. We ensure that where Thunder Monetize or third-party service providers receive Personal Information outside of the Applicable Countries, appropriate safeguards are in place under the Applicable Countries’ data protection legislation.
          <div className='text-box-privacy'>Thunder Monetize may be required to disclose Personal Information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.</div>

          <div className='privacy-text-header-1'>Questions or Complaints</div>
          <div className='text-box-privacy'>Individuals located in one of the Applicable Countries who have questions or concerns about how we process Personal Information may contact our Data Protection Officer at dpo@thunder-monetize.com. If we are not able to resolve the issue, individuals have the right to lodge a complaint with their local data privacy authority. For contact details of local Data Protection Authorities, please visit the <a href='https://www.edpb.europa.eu/about-edpb/about-edpb/members_en' className='privacy-link' target="_blank" rel="noopener noreferrer">European Data Protection Board member list</a> or the <a href='https://ico.org.uk/global/contact-us/' className='privacy-link' target="_blank" rel="noopener noreferrer">UK data protection regulator</a>.</div>
            
          
          <div className='privacy-text-header-1'>Notice to California Residents: Your Privacy Choices</div>
          <div className='text-box-privacy'>This section applies only to California residents and supplements the practices described in this Privacy Policy. It describes how we collect, use, sell, share, and retain Personal Information of California residents, and their rights with respect to that Personal Information. For purposes of this section, “Personal Information” has the meaning given in the California privacy laws but does not include information exempted from the scope of those laws.</div>

          <div className='privacy-text-header-1'>Personal Information We Collect and Purposes of Collection and Use</div>
          <div className='text-box-privacy'>Personal Information we collect (or have collected in the 12 months preceding the “Effective Date” of this Privacy Policy) about California residents are listed below by reference to the categories specified under California privacy law. Examples in the list refer to the types of Personal Information described above in this Privacy Policy.</div>
          <div className='text-box-privacy'>
            <ul>
              <li><span className='highlight-privacy'>Identifiers</span>, such as cookie ID, unique online identifiers, device information, hashed email, IP address, connected television ID, and mobile advertising ID.</li>
              <li><span className='highlight-privacy'>Customer Records</span>, such as Publisher PII and payment information.</li>
              <li><span className='highlight-privacy'>Commercial information</span>, such as records of products or services purchased, obtained or considered.</li>
              <li><span className='highlight-privacy'>Internet or Network Activity</span>, such as browsing history, search history, and interactions with a website, email, application, or advertisement.</li>
              <li><span className='highlight-privacy'>Inferences</span> drawn from the Personal Information identified above to create a profile reflecting preferences, characteristics or behavior.</li>
            </ul>
          </div>
          <div className='text-box-privacy'>We may collect these categories of Personal Information directly from you and from your device as you visit our Site or Publisher sites in our network subscribing to Thunder Monetize Services, or from other third parties as further described in this Privacy Policy under the section titled “<a href='#use-info' className='privacy-link'>How We Collect Information</a>.”</div>
          <div className='text-box-privacy'>The purposes, including the specific business and commercial purposes, for which we collect and use these categories of Personal Information are described in this Privacy Policy under the section titled “How We Use Personal Information.”</div>
          <div className='text-box-privacy'>To the extent that we may collect any sensitive Personal Information (as defined under California privacy law), such as to provide account management for our Publishers, we only use or disclose it for purposes permitted under California law (i.e., to perform the Thunder Monetize Services, process customer transactions, detect security incidents and prevent fraud, or to verify and maintain the quality of the Services). We do not collect or use sensitive personal information for the purpose of inferring characteristics about California residents.</div>
          <div className='text-box-privacy'>We retain each of the categories of Personal Information listed above as described in this Privacy Policy under the section titled “<a href='#retention' className='privacy-link'>Retention of Personal Data</a>.”</div>

          <div className='privacy-text-header-1'>Personal Information “Sold,” “Shared” or Disclosed for Business Purposes</div>
          <div className='text-box-privacy'>“Sale” is defined under California privacy law as disclosing a California resident’s Personal Information to a third party for monetary or other valuable consideration. Where such disclosure is for cross-context behavioral advertising, whether or not for monetary or other valuable consideration, it qualifies as “sharing” under California privacy law.</div>
          <div className='text-box-privacy'>The following table describes the categories of Personal Information “sold” or “shared” for our commercial purposes to each of the categories of third parties listed, and includes our practices in the 12 months preceding the “Effective Date” of this Privacy Policy.</div>
          <div className='text-box-privacy'>Each category of Personal Information listed in the following table may also have been disclosed for our business purposes (such as for internal use and business intelligence), and have in the preceding 12 months been disclosed, to each of the categories of third parties listed.</div>
          <div className='text-box-privacy'>The categories of third parties listed, along with our business and commercial purposes for which we “sold,” “shared” or disclosed Personal Information, are described in this Privacy Policy under “<a href='#information-sharing' className='privacy-link'>Our Information Sharing Practices</a>” within the section titled, “<a href='#use-info' className='privacy-link'>How We Use Information</a>.”</div>

          <img src={privacyImage2} alt="Privacy Image 2" className='privacy-image' />

          <div className='text-box-privacy'>For clarity, Personal Information collected through Thunder Monetize Services, from third parties, or Internet Connected Technology, (and where Thunder Monetize has a license to further disclose Personal Information to third parties) is included in our commercial Data and “sold” or “shared.” Publisher Personal Information provided for account management is not “sold” or “shared” as defined under California privacy law.</div>
          <div className='text-box-privacy'>California consumers may request to opt-out of the sale or sharing of their Personal Information at any time by e-mailing privacy@thunder-monetize[.]com. Please see “<a href='#california-rights' className='privacy-link'>Your California Privacy Rights</a>” below for more information.</div>
          <div className='text-box-privacy'>Thunder Monetize does not knowingly “sell” or “share” the Personal Information of California residents under 16 years of age.</div>

          <div id='california-rights' className='privacy-text-header-1'>Your California Privacy Rights</div>
          <div className='text-box-privacy'>As a California resident, in addition to the rights described elsewhere in this Privacy Policy, you have the privacy rights listed below.  However, these rights are not absolute, and in certain cases we may not be able to respond to your request, such as when a legal exemption applies or if we are not able to verify your identity.</div>
          <div className='text-box-privacy'>
            <ul>
              <li>
              <span className='highlight-text'>Know/Access</span>. You can request the following information about how we have collected and used your Personal Information:<br/>
              – The categories of Personal Information that we have collected.<br/>
              – The categories of sources from which we collected Personal Information.<br/>
              – The business or commercial purpose for collecting, “selling,” or “sharing” Personal Information.<br/>
              – The categories of third parties with whom we disclose Personal Information.<br/>
              – A copy of the Personal Information that we have collected about you.
              </li>
              <li><span className='highlight-text'>Delete</span>. You can ask us to delete the Personal Information that we have collected from you.</li>
              <li><span className='highlight-text'>Correct</span>. You can ask us to correct inaccurate Personal Information that we maintain about you.</li>
              <li><span className='highlight-text'>Opt-out of sales/sharing</span>. If we “sell” or “share” your Personal Information, you can opt-out.</li>
              <li><span className='highlight-text'>Nondiscrimination</span>. You are entitled to exercise the rights described above without receiving discriminatory treatment.</li>
            </ul>
          </div>
          <div className='text-box-privacy'>You may request to exercise the California privacy rights described above as follows:</div>
          <div className='text-box-privacy'>
            <ul>
              <li><span className='highlight-text'>Right to know/access, delete, or correct</span>. You can request to exercise your access, deletion, or correction rights by:<br />
              – Emailing privacy@thunder-monetize[.]com</li>
              <li><span className='highlight-text'>Right to opt-out of the “sale” or “sharing” of your Personal Information</span>. You can request to opt-out of the “sale” or “sharing” of your Personal Information by e-mailing privacy@thunder-monetize[.].com or broadcasting the Global Privacy Control (GPC) signal through your browser settings.</li>
            </ul>
          </div>

          <div className='privacy-text-header-1'>Verification Process and Required Information</div>
          <div className='text-box-privacy'>We reserve the right to confirm your California residence to process your requests and will need to confirm your identity to process your requests to exercise your right to know/access, delete, and correct. This is a security measure to, for example, help ensure we do not disclose information to a person who is not entitled to receive it. The identity verification process may vary depending on how you submit your request. We will only ask for information needed to verify your identity, such as a different email address, or cookie ID.</div>

          <div className='privacy-text-header-1'>Authorized Agent</div>
          <div className='text-box-privacy'>Consistent with California law, you may designate an authorized agent to make a request on your behalf. If you do so, we may require proof of your identification, the authorized agent’s proof of identification, and any other information that we may request in order to verify the request, including evidence of valid permission for the authorized agent to act on your behalf. We cannot process your request if you do not provide us with sufficient detail to allow us to understand and respond to it. Authorized agents may submit a request by e-mail to privacy@thunder-monetize[.].com</div>

          <div className='privacy-text-header-1'>Fees</div>
          <div className='text-box-privacy'>You will not have to pay a fee to access your personal information (or to exercise any of the other rights).  However, we may charge a reasonable fee or decline to comply with your request if your request is clearly unfounded, repetitive, or excessive.</div>
          
          <div className='privacy-text-header'>Changes in this Privacy Policy</div>
          <div className='text-box-privacy'>We may modify or amend this Privacy Policy from time to time at our discretion. When we make material changes to this Privacy Policy, we will amend the revision date at the top of this page and such modified or amended Privacy Policy shall be effective as to the Personal Information governed by this Privacy Policy as of that revision date. We encourage periodic review of this Privacy Policy to view any updates.</div>

          <div className='privacy-text-header'>Contact us</div>
          <div className='text-box-privacy'>Please contact us at privacy@thunder-monetize[.]com with questions or concerns regarding our Privacy Policy or how we process your Personal Information.</div>
          <div className='text-box-privacy'>Thunder Monetize will respond in good faith to all privacy inquiries but may not be able to provide complete information if the request requires Thunder Monetize to release confidential information of third parties, or otherwise imposes an undue burden or expense.</div>
          <div className='text-box-privacy'>THUNDER MONETIZATION PTE. LTD346C KING GEORGE'S AVENUE, KING GEORGE'S BUILDING, SINGAPORE 208577</div>
          <div className='text-box-privacy'>HONGKONG THUNDER SOLUTION LIMITED Room B3, 19/F, Tung Lee Commercial Building, 91-97 Jervois Street, Sheung Wan, Hong Kong</div>
          </div>
        </div>
      </div>
    </div>
  )
}