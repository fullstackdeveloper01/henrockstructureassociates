import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';


// CookieSection Component
const CookieSection = ({ title, children, isLastSection = false }) => (
    <section className={isLastSection ? '' : 'mb-10'}>
      {title && <h2 className="text-2xl font-semibold mb-4 text-blue-900">{title}</h2>}
      <div className="text-sm text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
);

CookieSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    isLastSection: PropTypes.bool,
};

const CookiePage = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 py-6 text-sm sm:text-base border border-dashed border-2 border-gray-200 mb-4 mt-4 rounded-lg shadow-md">
            <Head>
                <title>Cookie Policy | Henrock Structure Associates</title>
                <meta
                name="description"
                content="Learn how Henrock Structure Associates uses cookies to enhance your browsing experience, personalize content, and analyze site traffic on our website."
                />
                <meta name="keywords" content="Cookie Policy" />
            </Head>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-3xl font-bold text-blue-900 mb-0">Cookie Policy</h1>
                <p className="text-gray-600 mb-0 bg-blue-50 py-2 px-4 rounded-full text-xs text-bold">Last updated June 23, 2025</p>
            </div>

            <CookieSection title="Agreement To Our Legal Terms">
                <p>
                    This Cookie Policy describes how Henrock Structure Associates (“we,” “us,” “our,” or the “Company”) applies cookies and related technologies to identify and remember you when you browse our website at <a href="https://henrockstructureassociates.com/" className="text-blue-900 underline">
                    https://henrockstructureassociates.com</a> (the “Website”). It clarifies what these technologies are, why we use them, and the choices and controls you have regarding them.


                </p>
                <p>
                    In some instances, cookies may collect personal data directly or indirectly, or that which becomes personal data when combined with other information.

                </p>
            </CookieSection>

            <CookieSection title="What are cookies?">
                <p>
                    Cookies are tiny text files that are automatically placed on your device—whether a computer or phone—when you visit a website. They are common tools used to make websites function properly, optimize performance, and gather insight on how the site is used.

                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>First-party cookies</strong> are set by the website you are visiting—here, <a href="https://henrockstructureassociates.com/" className="text-blue-900 underline">Henrock Structure Associates.</a>
                    </li>
                    <li>
                        <strong>Third-party cookies</strong> are set by other websites or domains operating features like advertising, analytics, or interactive elements embedded in the Website. These third parties may recognize your device across multiple websites.
                    </li>
                </ul>
            </CookieSection>

            <CookieSection title="Why do we use cookies?">
                <p>We employ both first- and third-party cookies for multiple purposes:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Essential (strictly necessary) cookies:</strong> Required for the basic functions of the Website—for example, maintaining your session, preserving state across pages, or enabling secure access. You cannot opt out of these if you want to use the full features of the Website.
                    </li>
                    <li>
                        <strong>Performance and analytics cookies:</strong> These help us understand how visitors use the Website—such as which pages are most frequently viewed—so we can improve content, structure, and user experience.
                    </li>
                    <li>
                        <strong>Functionality cookies:</strong> Enable enhanced features like remembering your preferences (e.g., language or display settings) to improve convenience.
                    </li>
                    <li>
                        <strong>Advertising cookies (including third-party):</strong> Used to deliver tailored promotions based on your interests, track advertising performance, and measure campaign effectiveness.
                    </li>
                </ul>
            </CookieSection>

            <CookieSection title="How can you control cookies?">
                <p>You have full control over how cookies are managed:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Cookie Consent Manager:</strong> Accessible via the banner displayed when you first visit the Website, and through a link on each page. This tool lets you accept or reject different types of cookies. You may block all non-essential cookies there.
                    </li>
                    <li>
                        <strong>Browser settings:</strong> You can block or delete cookies using your web browser’s privacy preferences. Please note that blocking essential cookies may limit access to certain Website features.
                    </li>
                </ul>
                <p>A detailed table listing all cookie categories, their purposes, and whether they’re essential or optional is provided further down.</p>
            </CookieSection>

            <CookieSection title="How can you disable cookies in my browser?">
                <p>
                    Different browsers handle cookie settings in different ways. Here's how to manage cookies on popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Chrome:</strong> Visit Chrome’s settings or help section at the <a href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies" className="text-blue-900 underline">“Allow or block cookies”</a> page.
                    </li>
                    <li>
                        <strong>Internet Explorer:</strong> See <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-900 underline">Microsoft’s guide</a> to delete and manage cookies on Windows.
                    </li>
                    <li>
                        <strong>Firefox:</strong> Visit <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" className="text-blue-900 underline"> Mozilla’s support pages</a> on enabling/disabling cookies and tracking protection.
                    </li>
                    <li>
                        <strong>Safari:</strong> Refer to <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" className="text-blue-900 underline">Apple’s guide</a> for cookie and website data management.
                    </li>
                    <li>
                        <strong>Edge:</strong> A <a href="https://support.microsoft.com/en-us/windows/change-privacy-settings-in-windows-55466b7b-14de-c230-3ece-6b75557c5227" className="text-blue-900 underline">Windows help page</a> offers instructions on browsing data and privacy settings.
                    </li>
                    <li>
                        <strong>Opera:</strong> The “Web preferences” section explains cookie settings. Click on Opera Icon {'>'} Settings {'>'} locate {'>'} Advanced {'>'} Privacy & security {'>'} Site Settings.
                    </li>
                </ul>
            </CookieSection>

            <CookieSection title="How do you opt out of targeted advertising?">
                <p>Many ad networks allow users to opt out of personalized ads. You can manage your preferences directly via these platforms:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <a href="http://www.aboutads.info/choices/" className="text-blue-900 underline">Digital Advertising Alliance (U.S.)</a>
                    </li>
                    <li>
                        <a href="https://youradchoices.ca/" className="text-blue-900 underline">Digital Advertising Alliance of Canada</a>
                    </li>
                    <li>
                        <a href="http://www.youronlinechoices.com/" className="text-blue-900 underline">European Interactive Digital Advertising Alliance</a>
                    </li>
                </ul>
                <p>These services allow you to disable interest-based advertising from participating networks across the web.</p>
            </CookieSection>

            <CookieSection title="What about other tracking technologies (e.g., web beacons)?">
                <p>Several tracking tools beyond cookies are used on our Website:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        <strong>Web beacons</strong> (also known as tracking pixels or clear GIFs): Tiny, invisible images embedded in pages or emails. When loaded, they tell us whether content was viewed or visited.
                    </li>
                    <li>
                        These beacons help track browsing paths through the Website, measure advertisement referrers, evaluate site speed and performance, and assess engagement with email campaigns.
                    </li>
                </ul>
                <p>Most metrics collected through these beacons depend on cookies. If cookies are disabled, beacon-based measurement may not be accurate or may not function at all.</p>
            </CookieSection>

            <CookieSection title="Do we use Flash cookies or LSOs?">
                <p>We may occasionally use Flash Cookies—also called Local Shared Objects (LSOs)—for purposes like safeguarding against fraud, collecting usage analytics, or maintaining service operations.</p>
                <p>If you wish to prevent Flash Cookies from being stored on your device, you can adjust your settings:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Visit the <strong>Website Storage Settings Panel:</strong> <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" className="text-blue-900 underline">Flash Player Website Storage Settings</a>
                    </li>
                    <li>
                        Or manage settings in the <strong>Global Storage Settings Panel:</strong> <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" className="text-blue-900 underline">Flash Player Global Storage Settings</a>
                    </li>
                </ul>
                <p>These tools allow you to delete existing Flash Cookies, block future storage, or demand permission before storage is allowed.</p>
                <p><strong>Important:</strong> Disabling Flash Cookies might limit or disable certain website functions or interactive features powered by Flash.</p>
            </CookieSection>

            <CookieSection title="Do we serve targeted advertising?">
                <p>
                    Yes, third parties may display targeted ads on the Website using cookies and tracking technologies. These tools may use behavior and browsing information:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        To show you relevant offers and content aligned with your interests.
                    </li>
                    <li>
                        To determine ad effectiveness across different websites and platforms.
                    </li>
                </ul>
                <p>These methods do <strong>not</strong> collect personally identifiable details such as name or contact information, unless you voluntarily provide them.</p>
            </CookieSection>

            <CookieSection title="How often will this Cookie Policy be updated?">
                <p>We review and revise this Cookie Policy periodically—especially when:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        We introduce new cookies or services
                    </li>
                    <li>
                        Third-party cookie providers make changes
                    </li>
                    <li>
                        There are regulatory or legal updates regarding cookies and digital privacy
                    </li>
                </ul>
                <p>
                    Please check this page regularly to stay updated. The “Last updated” date at the top shows when the current version was published.
                </p>
            </CookieSection>

            

            <CookieSection title="Where can you get more information?" isLastSection>
                <p className="mb-6">
                    If you have questions about our use of cookies or other tracking tools, please contact us:
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
            </CookieSection>
        </main>
    );
};

export default CookiePage;