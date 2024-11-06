import Nav from '@/components/nav/nav';
import Footer from '@/components/footer';
import Prefooter from '@/components/prefooter';

type NavFooterLayoutProps = Readonly<{
  children: React.ReactNode,
}>;

const NavFooterLayout = (props: NavFooterLayoutProps) => (
  <>
    <Nav />
    {props.children}
    <Prefooter />
    <Footer />
  </>
);

export default NavFooterLayout;
