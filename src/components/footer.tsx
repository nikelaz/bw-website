import Container from '@/components/container';
import Link from 'next/link';

type FooterLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
}>;

const FooterLink = (props: FooterLinkProps) => (
  <Link href={props.href} className="text-prim text-20 hover:opacity-85 transition-opacity">{props.children}</Link>
);

const Footer = () => (
  <Container>
    <hr className="border-t-2 border-ash300" />
    <footer className="flex flex-col sm:flex-row gap-4 justify-between py-10">
      <div className="text-20">&copy; Budget Warden 2024</div>
      <div>
        <nav className="flex gap-8">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </nav>
      </div>
    </footer>
  </Container>
);

export default Footer;
