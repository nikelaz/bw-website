import Container from '@/components/container';
import Link from 'next/link';
import Card from '@/components/card';

const PrivacyPolicyMobileApp = async (props: any) => {
  return (
    <Container hasCustomWidth={true} className="max-w-screen-lg flex flex-col gap-9">
      <h1 className="text-40 font-bold tracking-tight">Privacy Policies</h1>
      <div className="prose">
        <ul>
          <li><Link href="/legal/privacy-policies/mobile-app" className="text-prim">Mobile Application Privacy Policy</Link></li>
        </ul>
      </div>
    </Container>
  );
};

export default PrivacyPolicyMobileApp;
