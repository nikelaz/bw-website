import Footer from '../../(components)/footer';
import Prefooter from '../../(components)/prefooter';

type FooterLayoutProps = Readonly<{
  children: React.ReactNode,
}>;

const FooterLayout = (props: FooterLayoutProps) => (
  <>
    {props.children}
    <Prefooter />
    <Footer />
  </>
);

export default FooterLayout;

