import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SnsIcons from '../components/snsIcons'

interface PrivacyProps {
  data: string
  location: string
  title: string
}

const PrivacyPage: React.FC<PrivacyProps> = ({ data, location }) => {
  return (
    <>
      <Layout location={{ pathname: '/privacy' }} title="Privacy Policy">
        <Seo title="Privacy Policy" />
        <div className="PrivacyPage">
          <h1 className="text-3xl font-semibold tracking-tight my-2">Privacy Policy</h1>
          <article className="leading-loose mt-5 mb-20">
            <p>
              <strong>Last updated: Apr.30.2024</strong>
              <br />
              Welcome to my portfolio site, accessible from{' '}
              <a href="https://my-wp-gatsby-site.vercel.app/" className="underline-offset-2">
                https://my-wp-gatsby-site.vercel.app/
              </a>
              . This page informs you of my policies regarding the collection, use, and disclosure of personal data when
              you use my Service and the choices you have associated with that data. I use your data to provide and
              improve the Service. By using the Service, you agree to the collection and use of information in
              accordance with this policy.
            </p>
            <h2 className="text-xl font-semibold my-10">1. Information Collection And Use</h2>
            <p>
              I collect several different types of information for various purposes to provide and improve my Service to
              you. <br />
            </p>
            <h3 className="text-lg font-semibold my-5">Types of Data Collected:</h3> <br />
            <p>
              Personal Data While using my Service, I may ask you to provide me with certain personally identifiable
              information that can be used to contact or identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to: <br />
              <ul className="list-disc mt-5 ml-10">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </p>
            <h3 className="text-lg font-semibold my-5">Usage Data</h3>
            <p>
              I may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may
              include details such as your computer's Internet Protocol address (e.g., IP address), browser type,
              browser version, the pages of my Service that you visit, the time and date of your visit, the time spent
              on those pages, unique device identifiers, and other diagnostic data.
            </p>
            <h3 className="text-lg font-semibold my-5">Tracking & Cookies Data</h3>
            <p>
              I use cookies and similar tracking technologies to track the activity on my Service and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier. Cookies are sent to your browser from a website and stored on your device. Tracking
              technologies also used are beacons, tags, and scripts to collect and track information and to improve and
              analyze my Service.
            </p>
            <h2 className="text-xl font-semibold my-10">2. Use of Data</h2>
            <p>
              I use the collected data for various purposes:
              <ul className="list-disc mt-5 ml-10">
                <li>To provide and maintain my Service</li>
                <li>To notify you about changes to my Service</li>
                <li>
                  To allow you to participate in interactive features of my Service when you choose to do so To provide
                  customer support
                </li>
                <li>To gather analysis or valuable information so that I can improve my Service</li>
                <li>To monitor the usage of my Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold my-10">3. Disclosure Of Data</h2>
            <h3 className="text-lg font-semibold my-5">Legal Requirements</h3>
            <p>
              I may disclose your Personal Data in the good faith belief that such action is necessary to:
              <ul className="list-disc mt-5 ml-10">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend my rights or property</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold my-10">4. Security Of Data</h2>
            <p>
              The security of your data is important to me, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. While I strive to use commercially acceptable
              means to protect your Personal Data, I cannot guarantee its absolute security.
            </p>
            <h2 className="text-xl font-semibold my-10">5. Changes To This Privacy Policy</h2>
            <p>
              I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <h2 className="text-xl font-semibold my-10">6. Google Analytics</h2>
            <p>
              I use Google Analytics, a web analytics service offered by Google that tracks and reports website traffic.
              Google uses the data collected to track and monitor the use of my Service. This data is shared with other
              Google services. Google may use the collected data to contextualize and personalize the ads of its own
              advertising network.
            </p>
            <h3 className="text-lg font-semibold my-5">How Google Uses Your Data</h3>
            <p>
              Google may use the collected data for various purposes:
              <ul className="list-disc mt-5 ml-10">
                <li>To provide and maintain their service</li>
                <li>To notify you about changes to their service</li>
                <li>To allow you to participate in interactive features of their service when you choose to do so</li>
                <li> To provide customer care and support</li>
                <li>To provide analysis or valuable information so that they can improve the service</li>
                <li>To monitor the usage of the service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
              For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:
              <a href="http://www.google.com/intl/en/policies/privacy/" className="underline-offset-2">
                http://www.google.com/intl/en/policies/privacy/
              </a>
              .
            </p>
            <h3 className="text-lg font-semibold my-5">Opting Out of Google Analytics</h3>
            <p>
              You can opt out of having made your activity on the Service available to Google Analytics by installing
              the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
              analytics.js, and dc.js) from sharing information with Google Analytics about visits activity. <br />
              For more detailed information on Google Analytics, you can visit{' '}
              <a href="https://marketingplatform.google.com/about/analytics/terms/us/" className="underline-offset-2">
                Google Analytics Terms of Service
              </a>
              .
            </p>
            <h2 className="text-xl font-semibold my-10">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me through the information provided on
              my website.
            </p>
          </article>
        </div>
        <SnsIcons />
      </Layout>
    </>
  )
}

export default PrivacyPage
