import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';


// TermsSection Component
const TermsSection = ({ title, children, isLastSection = false }) => (
  <section className={isLastSection ? '' : 'mb-10'}>
    {title && <h2 className="text-2xl font-semibold mb-4 text-blue-900">{title}</h2>}
    <div className="text-sm text-gray-700 leading-relaxed space-y-4">{children}</div>
  </section>
);

TermsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLastSection: PropTypes.bool,
};

const TermsPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-6 text-sm sm:text-base border border-dashed border-2 border-gray-200 mb-4 mt-4 rounded-lg shadow-md">
      <Head>
        <title>Terms & Condition | Henrock Structure Associates</title>
        <meta
          name="description"
          content="Review the Terms & Conditions of Henrock Structure Associates to understand our policies, user responsibilities, and legal guidelines for using our services."
        />
        <meta name="keywords" content="Terms & Condition" />
      </Head>

      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-0">TERMS AND CONDITIONS</h1>
        <p className="text-gray-600 mb-0 bg-blue-50 py-2 px-4 rounded-full text-xs text-bold">Last updated June 23, 2025</p>
      </div>

      <TermsSection>
        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>
      </TermsSection>

      <TermsSection title="Agreement To Our Legal Terms">
        <p>
          We are Henrock Structure Associates (“Company”, “we”, “us”, or “our”), a company
          registered in 112, First Floor, Swadesh Bhawan, L I G Square, Indore, Madhya Pradesh
          452003. Our VAT number is 23AAOFH1544GIZK.
        </p>
        <p>
          We operate the website{' '}
          <a
            href="https://henrockstructureassociates.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 underline"
          >
            https://henrockstructureassociates.com/
          </a>{' '}
          (the “Site”), as well as any related products and services that refer to or link to
          these Legal Terms (collectively, the “Services”).
        </p>
        <p>
          Henrock Structure Associates is an engineering consultancy delivering advanced
          solutions in structural design and steel detailing. Headquartered in India, our team of
          experienced engineers supports clients across industrial, commercial, and institutional
          sectors in the United States, India, and beyond.
        </p>
        <p>
          Our services integrate international codes and industry best practices with a strong
          command of advanced tools such as Tekla Structures, IDEA StatiCa, STAAD Pro, and ETABS.
        </p>
        <p>
          You can contact us by phone at{' '}
          <a href="tel:+919201592348" className="text-blue-900 underline">
            +91 9201592348
          </a>
          ,{' '}
          <a href="tel:+919201592349" className="text-blue-900 underline">
            +91 9201592349
          </a>
          , email at{' '}
          <a href="mailto:hsa@henrockstructureassociates.com" className="text-blue-900 underline">
            hsa@henrockstructureassociates.com
          </a>
          , or by mail to 112, First Floor, Swadesh Bhawan, L I G Square, Indore, Madhya Pradesh
          452003.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you (whether
          personally or on behalf of an entity, “you”), and Henrock Structure Associates,
          concerning your access to and use of the Services.
        </p>
        <p>
          You agree that by accessing the Services, you have read, understood, and agreed to be
          bound by all of these Legal Terms.
        </p>
        <p className="font-semibold text-red-600">
          IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
          FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from
          time to time are hereby expressly incorporated herein by reference.
        </p>
        <p>
          We reserve the right, in our sole discretion, to make changes or modifications to these
          Legal Terms from time to time.
        </p>
        <p>
          We will alert you about any changes by updating the “Last updated” date of these Legal
          Terms, and you waive any right to receive specific notice of each such change.
        </p>
        <p className="border-b border-gray-200 pb-4">
          It is your responsibility to periodically review these Legal Terms to stay informed of
          updates. You will be subject to, and will be deemed to have been made aware of and to
          have accepted, the changes in any revised Legal Terms by your continued use of the
          Services after the date such revised Legal Terms are posted.
        </p>
      </TermsSection>

      <TermsSection title="Tables Of Content">
        <ul className="list-disc pl-6 space-y-1">
          <li>Interpretation and Definitions</li>
          <li>Acknowledgment</li>
          <li>Links to Other Websites</li>
          <li>Termination</li>
          <li>Limitation of Liability</li>
          <li>"AS IS" and "AS AVAILABLE" Disclaimer</li>
          <li>Governing Law</li>
          <li>Disputes Resolution</li>
          <li>For European Union (EU) Users</li>
          <li>United States Legal Compliance</li>
          <li>Severability and Waiver</li>
          <li>Changes to These Terms and Conditions</li>
          <li>Contact Us</li>
        </ul>
      </TermsSection>

      <TermsSection title="Interpretation and Definitions">
        <h3 className="text-lg font-semibold text-gray-800">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless
          of whether they appear in singular or in plural.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6">Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under
            common control with a party...
          </li>
          <li>
            <strong>Country</strong> refers to: Indore, India
          </li>
          <li>
            <strong>Company</strong> refers to Henrock Structure Associates, 112, First Floor,
            Swadesh Bhawan, Indore.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service...
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as "Terms") mean this agreement...
          </li>
          <li>
            <strong>You</strong> means the individual or legal entity using the Service.
          </li>
        </ul>
      </TermsSection>

      <TermsSection title="Acknowledgment">
        <h3 className="text-lg font-semibold text-gray-800">Acknowledgment</h3>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </p>
      </TermsSection>

      <TermsSection title="Links to Other Websites">
      <h3 className="text-lg font-semibold text-gray-800">Links to Other Websites</h3>
        <p>
          Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
        </p>
      </TermsSection>

      <TermsSection title="Termination">
        <h3 className="text-lg font-semibold text-gray-800">Termination</h3>
        <p>
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p>
          Upon termination, Your right to use the Service will cease immediately.
        </p>
      </TermsSection>

      <TermsSection title="Limitation of Liability">
        <h3 className="text-lg font-semibold text-gray-800">Limitation of Liability</h3>
        <p>
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

        </p>
        <p>
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
        </p>
      </TermsSection>

      <TermsSection title="'AS IS' and 'AS AVAILABLE' Disclaimer">
        <h3 className="text-lg font-semibold text-gray-800">'AS IS' and 'AS AVAILABLE' Disclaimer</h3>
        <p>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
        </p>
        <p>
          Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
        </p>
      </TermsSection>

      <TermsSection title="Governing Law">
        <h3 className="text-lg font-semibold text-gray-800">Governing Law</h3>
        <p>
          The laws of the India, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
        </p>
      </TermsSection>

      <TermsSection title="Disputes Resolution">
        <h3 className="text-lg font-semibold text-gray-800">Disputes Resolution</h3>
        <p>
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
        </p>
      </TermsSection>

      <TermsSection title="For European Union (EU) Users">
        <h3 className="text-lg font-semibold text-gray-800">For European Union (EU) Users</h3>
        <p>
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
        </p>
      </TermsSection>

      <TermsSection title="United States Legal Compliance">
        <h3 className="text-lg font-semibold text-gray-800">United States Legal Compliance</h3>
        <p>
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
        </p>
      </TermsSection>

      <TermsSection title="Severability and Waiver">
        <h3 className="text-lg font-semibold text-gray-800">Severability and Waiver</h3>

        <h3 className="text-lg font-semibold text-gray-800 mt-6">Severability</h3>
        <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-6">Waiver</h3>
        <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
      </TermsSection>

      <TermsSection title="Changes to These Terms and Conditions">
        <h3 className="text-lg font-semibold text-gray-800">Changes to These Terms and Conditions</h3>
        <p>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

        </p>
        <p>
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

        </p>
      </TermsSection>

      <TermsSection title="Contact Us">
        <p className="mb-6">
          If you have any questions about these Terms and Conditions, you can contact us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Box */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">By Email</h3>
            <a href="mailto:hsa@henrockstructureassociates.com" className="text-blue-900 underline">
              hsa@henrockstructureassociates.com
            </a>
          </div>

          {/* Phone Box */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">By Phone</h3>
            <p>
              <a href="tel:+919201592348" className="text-blue-900 underline">
                +91 9201592348
              </a>{' '}
              /{' '}
              <a href="tel:+919201592349" className="text-blue-900 underline">
                +91 9201592349
              </a>
            </p>
          </div>

          {/* Mail Box */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">By Post</h3>
            <p className="text-gray-700">
              112, First Floor, Swadesh Bhawan,<br />
              L I G Square, Indore, MP 452003
            </p>
          </div>
        </div>
      </TermsSection>

    </main>
  );
};

export default TermsPage;
