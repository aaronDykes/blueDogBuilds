import "../css/page/Gallery.scss";
import "../css/page/Privacy.scss";
import Nav from "../components/Nav";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

export default function Privacy() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="gallery">
      <div className={`g-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>

      <div className={`g-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="g-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>


        <div className="privacy">
          <h2 className="h2-privacy">
            1. About Us
          </h2>
          <p className="p-privacy">
            <strong>Joel T Dykes, for Blue Dog Builds </strong>(“us”, “we” or “our”) operates the website: https://bluedogbuilds.ca/ (hereinafter referred to as the “Service”). Your privacy is important to us. This Privacy Notice informs you of our policies regarding our collection, use, and disclosure of Personal Data to third parties, and how we protected this information when you use our Service and the choices you have associated with that data. By using the Service, you agree to the collection and use of information in accordance with this Privacy Notice.
          </p>

          <h2 className="h2-privacy">
            2. What is Personally Identifiable Information (PII) / Personal Data?
          </h2>

          <p className="p-privacy">
            Personal data or PII means any information relating to a person who can be identified either directly or indirectly by that information; it may include but is not restricted to name, address, email address, phone number, credit/debit card number, IP address, location data and purchase history.
          </p>

          <h2 className="h2-privacy">
            3. What Personal Data Do We Collect?
          </h2>

          <p className="p-privacy">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h2 className="h2-privacy">
            A. Personal Data
          </h2>

          <p className="p-privacy">
            While using our Service, we may collect certain Personal Data about you which may include, but is not limited to:
          </p>


          <p className="p-privacy">
            i. Email address<br />
            ii. First name and last name<br />
            iii. Phone number<br />
            iv. Address, State, Province, ZIP/Postal code, City<br />
            v. Cookies and Usage Data<br />
            vi. Billing address<br />
            vii. Payment information (including credit card numbers)<br />
            viii. Information about you that you share or make visible on the Internet. We may combine such information with information we already have about you.<br />
            ix. We may collect non-personal information and it may be aggregated with other information. If we combine your non-personal information with personal information, the combined information will be treated as personal information.<br />

            You do not have to provide us with Personal Data if you do not want to; however, that may limit your ability to use certain functions or to request certain services or information.
          </p>

          <h2 className="h2-privacy">

            B. Tracking Technologies
          </h2>

          <p className="p-privacy">
            We use various technologies to collect Personal Data about visitors to our website. These technologies include the following:
          </p>

          <h3>

            i. Usage Data
          </h3>

          <p className="p-privacy">
            We may collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. We use IP addresses to collect broad geographic information on the visitors to our website, and to optimize our website. We do not link IP addresses to personally identifiable information.
          </p>

          <h3>
            ii. Tracking Cookies Data & Web Beacons
          </h3>

          <p className="p-privacy">
            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
            We also use web beacons, which are small strings of code that are placed in a website page or in an email message. They are sometimes called “clear GIFs” (Graphics Interchange Format) or “pixel tags”. When you visit a particular page, web beacons notify us of your visit. Since web beacons are used in combination with cookies, if you disable cookies then the web beacons will only detect an anonymous site visit. When used in an email, web beacons enable us to know whether you have received the email.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. For further information on cookies and how to switch them off see www.allaboutcookies.org.
          </p>

          <h3>
            iii. Analytics and other Tracking Technologies
          </h3>

          <p className="p-privacy">
            We may use employ third party companies and individuals to facilitate our Service (“Service Providers”) to monitor and analyze the use of our Service. We may receive reports based on the use of tracking technologies on an individual and aggregated basis. For example we use the following: Google Analytics and Facebook Pixel
          </p>

          <h3>
            iv. How We Respond to “Do Not Track” Signals
          </h3>

          <p className="p-privacy">
            Some web browsers have a “Do Not Track” feature. This feature allows you to tell websites you visit that you do not want to have your online activity tracked over time and across websites. These features are not yet uniform across browsers. Our Service is not currently set up to respond to those signals.
          </p>

          <h2 className="h2-privacy">
            4. How Will We Use Your Personal Data?
          </h2>

          <p className="p-privacy">
            We use the collected data for various purposes:
          </p>

          <ol>
            <li>To provide and maintain the Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer care and support.</li>
            <li>To provide analysis or valuable information so that we can improve the Service.</li>
            <li>To monitor the usage of the Service.</li>
            <li>To detect, prevent and address technical issues.</li>
            <li>When used in line with the preferences you have shared with us, provide you with information or advertising related to our products of services.</li>
          </ol>

          <h2 className="h2-privacy">
            5. Lawful Grounds for Processing
          </h2>

          <p className="p-privacy">
            To process your Personal Data lawfully we need to rely on one or more valid legal grounds. The grounds we may rely upon for the processing of your Personal Data include:
          </p>

          <ol>
            <li>Your consent to particular processing activities. For example, where you have consented to us using your information for marketing purposes;</li>
            <li>Your request for content, products or services necessitating steps including processing of your Personal Data to be taken prior to entering into contract with you and any processing that is necessary for the performance of such contract;</li>
            <li>Legitimate interests we pursue as a business, except where such interests are overridden by your interests and fundamental rights; and</li>
            <li>Compliance with any legal obligation to which we are subject, for example, the processing for the purposes of complying with applicable law.</li>
          </ol>

          <h2 className="h2-privacy">
            6. Under What Circumstances Could We Disclose Your Personal Data?<br />
          </h2>
          <h3>
            A. Legal Requirements
          </h3>

          <p className="p-privacy">
            There are circumstances where we may wish to disclose or are compelled by law to disclose your Personal Data to third parties. This will only take place in accordance with the applicable law. These scenarios include disclosure to:
          </p>

          <ol>
            <li>Comply with a legal obligation;</li>
            <li>Protect and defend our rights or property;</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service;</li>
            <li>Protect the personal safety of users of the Service or the public; or</li>
            <li>Protect against legal liability.</li>
          </ol>

          <h3>
            B. Service Providers
          </h3>

          <ol>
            <li>We may employ Service Providers, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</li>
            <li>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
          </ol>

          <h2 className="h2-privacy">
            7. Security Safeguards and Accountability
          </h2>

          <p className="p-privacy">The security of your Personal Data is important to us. We have established appropriate physical, technical, and administrative safeguards to protect the Personal Data we collect from or about our users or visitors to our website. We will protect your personal information with appropriate security safeguards and safety measures, whether recorded on paper or captured electronically, against unauthorized access, disclosure, or misuse. We also restrict access to personal information to our employees, contractors, and agents who need to know the information to process it for us, and who are subject to confidentiality obligations. Any sensitive personal information (e.g., credit/debit card number) will be transmitted in an encrypted form using SSL encryption. Notwithstanding our security safeguards, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. If you have any questions about security or have reason to believe your interaction with us is no longer secure (for example, you feel the security of any account you might have with us has been compromised), you must immediately notify us of the problem by contacting us at: info@amgphoto.com</p>

          <h2 className="h2-privacy">
            8. Retention of Personal Data
          </h2>

          <p className="p-privacy">
            Your Personal Data will be retained until your last use of our Services, unless longer retention is required by applicable law, or where we have a continued legitimate and lawful purpose to do so. However, we will not retain beyond this period any of your Personal Data that is no longer required for the purposes set out in this Privacy Notice. The retention of your Personal Data will be subject to periodic review.
          </p>

          <p className="p-privacy">
            We may keep an anonymized form of your Personal Data, which will no longer refer to you, for statistical purposes without time limits, to the extent that we have a legitimate and lawful interest in doing so.
          </p>

          <h2 className="h2-privacy">
            9. International Transfer of Personal Data
          </h2>
          <p className="p-privacy">
            Your information, including Personal Data, may be transferred to, and maintained on, computers located outside of your province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. Your consent to this Privacy Notice followed by your submission of such information represents your agreement to that transfer.
          </p>
          <p className="p-privacy">
            We will take all steps reasonably necessary to ensure that your Personal Data is treated securely and in accordance with this Privacy Notice and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your Personal Data and other personal information.
          </p>

          <h2 className="h2-privacy">
            10. Your rights
          </h2>
          <p className="p-privacy">
            You can contact us directly any time through the address listed in the Contact Information section below to update your personal information or make another type of request regarding the information you know or believe we hold about you. Here are some rights that you may have according to where you are located:
          </p>

          <ol>
            <li><strong>Right To Make Subject Access Request (SAR)</strong>. Subject to applicable law, you may receive information about, request copies, or review in person the Personal Data we hold about you. You may be required to submit a proof of your identity and, as allowed by applicable laws, we may charge you a reasonable fee for you to obtain this information.</li>
            <li><strong>Right To Rectification, Amendment Or Deletion</strong>. Subject to applicable law, you may request that we rectify any inaccurate and/or complete any incomplete Personal Data. You have also have the right to request that we amend or delete your personal information.</li>
            <li><strong>Right To Withdraw Consent</strong>. You may, as permitted by applicable law, withdraw your consent to the processing of your Personal Data at any time. Such withdrawal will not affect the lawfulness of processing based on your previous consent. Please note that if you withdraw your consent, you may not be able to benefit from certain service features for which the processing of your Personal Data is essential.</li>
            <li><strong>Right To Object To Processing, Including Automated Decision Making</strong>. You may, as permitted by applicable law, request that we stop processing your Personal Data. Subject to applicable law, if at any time the Services use automated decision making to process Personal Data, you have the right to object to the use of your Personal Data.</li>
            <li><strong>Right to Make Disclosure Accounting Request</strong>. Subject to applicable law, you have the right to request and receive a list of certain disclosures made of your personal information. If you request this list more than once in a 12-month period, we may charge you a reasonable fee as allowed by law to respond to any additional request</li>
            <li><strong>Right to erasure</strong>. You may request that we erase your Personal Data and we will comply, unless there is a lawful reason for not doing so. For example, there may be an overriding legitimate ground for keeping your Personal Data, such as, a legal obligation that we have to comply with, or if retention is necessary for us to comply with our legal obligations.</li>
            <li><strong>Right to data portability</strong>. In certain circumstances, you may request that we provide your Personal Data to you in a structured, commonly used and machine readable format and have it transferred to another provider of the same or similar services. We will comply with such transfer as far as it is technically feasible. Please note that a transfer to another provider does not imply erasure of your Personal Data which may still be required for legitimate and lawful purposes.</li>
            <li><strong>Your right to lodge a complaint with the supervisory authority</strong>. We suggest that you contact us about any questions or if you have a complaint in relation to how we process your personal data. However, you do have the right to contact the relevant supervisory authority directly.</li>
          </ol>


          <h2 className="h2-privacy">
            11. Links to Other Sites
          </h2>

          <p className="p-privacy">
            Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Notice of every site you visit.
          </p>

          <p className="p-privacy">
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <h2 className="h2-privacy">
            12. Children’s Privacy
          </h2>


          <p className="p-privacy">
            Our Service does not address anyone under the age of 18 (“<strong>Children</strong>“).
          </p>

          <p className="p-privacy">
            We do not knowingly collect personally identifiable information from Children. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
          </p>

          <h2 className="h2-privacy">
            13. Social Media Connection
          </h2>

          <p className="p-privacy">
            You may choose to enable an interface, share with others, or log in to the Services via various social media or social networking services such as LinkedIn, Instagram, Facebook, or Twitter (“Social Networking Services”). By integrating these Social Networking Services into the Services, we can offer you a richer and more personalized experience with our products and services. When you connect your current account to a social media account, we may collect certain personal information you have provided to the Social Networking Service. For example, when you log in with your Facebook credentials, we may collect personal information from your Facebook profile, such as your email address, profile picture, and friend list.
          </p>

          <h2 className="h2-privacy">
            14. Changes to This Privacy Notice
          </h2>

          <p className="p-privacy">
            We may update our Privacy Notice from time to time. We will notify you of any changes by posting the new Privacy Notice on this page and updating the effective date at the top of this Privacy Notice. You are advised to review this Privacy Notice periodically for any changes. Changes to this Privacy Notice are effective when they are posted on this page. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.
          </p>

          <h2 className="h2-privacy">
            15. Data Protection Officer (or Privacy Office) Contact Information
          </h2>

          <p className="p-privacy">
            If you have any privacy or security questions or concerns about this Privacy Notice or our information handling practices, please contact: Joel Dykes via email at: joel@bluedogbuilds.ca or voice: +1613.858.3021
          </p>
        </div>
      </div>
    </div>
  );
}