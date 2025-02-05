import Container from '@/components/container';
import Link from 'next/link';

const Legal = async (props: any) => {
  return (
    <Container hasCustomWidth={true} className="max-w-screen-lg flex flex-col gap-9">
      <h1 className="text-40 font-bold tracking-tight">Legal</h1>
      <div className="prose">
        <ul>
          <li><Link href="/legal/privacy-policies" className="text-prim">Privacy Policies</Link></li>
        </ul>
      </div>
    </Container>
  );
};

export default Legal;
