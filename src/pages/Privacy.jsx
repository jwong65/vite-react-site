import React from 'react'
import './privacy.css'

export default function Privacy() {
  return (
      <div className='page-wrapper'>
        <div className='privacy-hero-section-wrapper'>
          <div className='privacy-box'>
            <div className='privacy-header'>Privacy Policy</div>
            <div className='privacy-subheader'>Last Updated: September 30, 2024</div>
          </div>
        </div>
        <div className='privacy-content-wrapper'>
          <div className='privacy-text'>
            <div className='text-box-privacy'>
            Thunder Monetize provides monetization tools to our customer that allow for revenue generation through digital advertising.This 'Privacy Policy' describes how Thunder Monetize collects, uses and shares personal information in connection with (i) Thunder Monetize services; and (ii) our public-facing business websites found at <a href='thunder-monetize.com'>www.thunder-monetize.com</a>('Site').
            </div>
            <div className='privacy-text-header'>About Us</div>
            <div className='text-box-privacy'>
              Thunder Monetize offers Services that connect buyers of advertising inventory (which we refer to as advertisers) with sellers of advertising inventory (which we refer to as publishers), providing such buyers with the opportunity to display an advertisement on a seller's Digital Media Property.
              In this policy, we refer to our buyers and sellers collectively as “Clients”.
              Our platform is used to deliver digital advertising inventory on websites and applications across Internet-connected devices and platforms, including mobile devices, computers and internet-connected TVs (which we collectively refer to as “Digital Media Properties”).
            </div>
            <div className='privacy-text-header'>How We Collect User Information</div>
            <div className='text-box-privacy'>
              We (and our service providers) use different technologies (collectively “Tracking Technologies”), including cookies and other similar technologies to collect information automatically from your device when you visit a Digital Media Property that uses our technology. 
              When doing so, we collect certain information about you and your device (collectively, “User Information”). User Information does not include information that directly identifies an individual, such as name, address, phone number, or email address. 
              However, the User Information we collect is considered “personal data” or “personal information” under applicable privacy and data protection laws.
              In particular, we collect information such as your IP address, cookie data, and other device identifiers, and may also assign new identifiers to your device or browser based on this data and other device-related information we collect as described in more detail <a href='https://www.magnite.com/legal/advertising-platform-privacy-policy/#table-1' target="_blank" rel="noopener noreferrer">here</a>. 
              These identifiers help us to recognize a particular device without knowing the identity of the user of that device.
              This helps us, our Clients, and our partners (such as third party advertising platforms) select appropriate advertisements to display to you.
            </div>
            <div className='privacy-text-header'>Information Our Clients and Vendors Collect Independently </div>
            <div className='text-box-privacy'>
              We collaborate with various third-parties for analytics and advertising services, which independently gather and use User Information. 
              These third-party services provide our Clients with additional ways to deliver targeted ads using our technology.
              For example, third-party companies may use data about your visits to Digital Media Properties across multiple devices or browsers to create advertising profiles that allow advertisers to deliver more personalized content and ads.
              Our advertiser clients can combine this data with the information we collect to deliver targeted ads or create audience segments for advertising on Digital Media Properties. 
              Our Clients and their vendors may use their own tags, pixels, cookies, or similar technologies within ads and on certain third-party platforms and Digital Media Properties. 
              We are not responsible for the tracking technologies or privacy practices of our Clients or their vendors. 
              Please review our Platform Cookie Statement for more information.
            </div>
            <div className='privacy-text-header'>Use of User Information</div>
            <div className='text-box-privacy'>
              We and our Clients use User Information to guide decisions on buying and selling advertising space on Digital Media Properties.
              This data, which may also be combined with information from third-party services, helps deliver targeted ads that our Clients believe will interest specific users.
              When an ad is shown on a publisher's site, it may also be targeted based on the content that you are viewing or have viewed, for example a travel ad appearing on a travel site.
              Tracking Technologies help to match client's advertising opportunities with the right advertisements.
              To do so, we may perform cookie syncing between Clients, Thunder Monetize, third party data provider and/or advertiser client cookies.
              This cookie synching process allows the parties to map their respective cookie information.
              For example, if publisher A sets a cookie on a user's device with an ID 12345 and advertiser B sets a cookie on the same user's device with an ID 67890, cookie synching would enable publisher A and advertiser B to recognize that ID 12345 and ID 67890 relate to the same user's device. 
              In the case of advertisers, cookie syncing may influence the decision whether to bid on a specific advertising opportunity, because if an advertiser recognizes a given cookie ID it may place a higher value on that opportunity.
              We also use these technologies to prevent users from seeing the same ad repeatedly, enhance ad delivery, report to clients, and assess ad effectiveness.
              This processing may constitute “targeted advertising” under some laws and the “sale” or “sharing” of personal information under other laws.
            </div>
            <div className='privacy-text-header'>Cooperation with Clients in the European Union</div>
            <div className='text-box-privacy'>
              In the European Union, we and our Clients may act in limited circumstances as joint controllers under the GDPR for the collection of User Information on Digital Media Properties. In this case, this joint controllership is limited to setting and collecting identifiers and User Information on the Digital Media Properties and transmitting this information to us (“Joint Processing“). 
              Further processing of your information is our sole responsibility and we act as an independent controller.
              We have put contractual arrangements in place with our Clients that set out the distribution of responsibilities between us and our Client. Accordingly, our Clients establish the necessary legal basis for this Joint Processing by obtaining consent on the Digital Media Properties and providing the required transparency information. We and our Clients cooperate to fulfill our obligations under the GDPR, especially regarding collaboration with data protection authorities.
              If you wish to exercise your rights under the GDPR concerning Joint Processing, please contact us via the User Choice Portal.
              Information We Collect, Use, Disclose, and the Purposes for such Disclosure:
            </div>
            <div className='privacy-text-header'>Types of data we collect:</div>
            <div className='text-box-privacy'>
              <ul>
                <li>Device Characteristics: device identifiers, IP address, authentication-derived identifiers such as hashed email, probabilistic identifiers and other advertising identifiers.</li>
                <li>Browsing and Interaction Data: information about the domain, topic or name of the property, the date/time of visits, the search terms you enter, visitor activities and actions, viewability data, the video title, video player size, description or category being displayed, click data, types of advertisements viewed, type of browser you use, app version, and the page you visited before navigating to the Digital Media Properties.</li>
                <li>User's Profiles, User behavior data, derived information: user demographics, information with respect to a user’s preferences, patterns, click and video interactions, behaviors or interests, and information provided to us by advertisers and advertising platforms to match an advertisement opportunity offered by our Clients with the right advertisement.</li>
              </ul>
              <p>When you visit Digital Media Properties that use our technology, we collect, use and disclose the following information to the listed recipients for the indicated purposes:</p>
            </div>
          </div>
        </div>
      </div>
  )
}