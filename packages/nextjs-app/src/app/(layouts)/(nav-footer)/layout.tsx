import Nav from '../../(components)/nav/nav';
import Footer from '../../(components)/footer';

type NavFooterLayoutProps = Readonly<{
  children: React.ReactNode,
}>;

const NavFooterLayout = (props: NavFooterLayoutProps) => (
  <>
    <Nav />
    {props.children}
    <Footer />
  </>
);

export default NavFooterLayout;
