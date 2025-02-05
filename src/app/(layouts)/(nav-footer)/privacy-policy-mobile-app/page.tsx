import IconLabel from '@/components/icon-label';
import {IconType} from '@/components/icon';
import Container from '@/components/container';

const PrivacyPolicyMobileApp = async (props: any) => {
  return (
    <Container hasCustomWidth={true} className="max-w-screen-lg flex flex-col gap-9">
      <h1 className="text-40 font-bold tracking-tight">Privacy Policy</h1>
      
      <h2 className="text-32 font-semibold tracking-tight">Mobile Application (iOS and Android)</h2>
      <p>This privacy policy applies to the Budget Warden application (hereby referred to as "Application") for mobile devices that was created by Nikola Nikolov Lazarov (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>
      
      <h3 className="text-30 font-semibold tracking-tight">Information Collection and Use</h3>

      <p>The Application does not gather information about the location of your mobile device.</p>
      <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information and required notices.</p>
      <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to Email, first and last name, country. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
      
      <h3 className="text-30 font-semibold tracking-tight">Third Party Access</h3>
      <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
      <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
      <div className="prose">
        <ul>
          <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
          <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
          <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
        </ul>
      </div>
      
      <h3 className="text-30 font-semibold tracking-tight">Opt-Out Rights</h3>
      <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
      
      <h3 className="text-30 font-semibold tracking-tight">Data Retention Policy</h3>
      <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at nikola.n.lazarov@outlook.com and they will respond in a reasonable time.</p>
      
      <h3 className="text-30 font-semibold tracking-tight">Children</h3>
      <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
      
      <p>
        The Service Provider does not knowingly collect personally
        identifiable information from children. The Service Provider 
        encourages all children to never submit any personally
        identifiable information through the Application and/or Services.
        The Service Provider encourage parents and legal guardians to monitor 
        their children's Internet usage and to help enforce this Policy by instructing 
        their children never to provide personally identifiable information through the Application and/or Services without their permission.
        If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, 
        please contact the Service Provider (nikola.n.lazarov@outlook.com) so that they will be able to take the necessary actions. 
        You must also be at least 16 years of age to consent to the processing 
        of your personally identifiable information in your country (in some countries we may allow your parent 
        or guardian to do so on your behalf).
      </p>
      
      <h3 className="text-30 font-semibold tracking-tight">Security</h3>
      <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

      <h3 className="text-30 font-semibold tracking-tight">Changes</h3>
      <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
      <p>This privacy policy is effective as of 2025-02-05</p>

      <h3 className="text-30 font-semibold tracking-tight">Your Consent</h3>
      <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

      <h3 className="text-30 font-semibold tracking-tight">Contact Us</h3>
      <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at nikola.n.lazarov@outlook.com.</p>
    </Container>
  );
};

export default PrivacyPolicyMobileApp;
