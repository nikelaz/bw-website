import Footer from '../../(components)/footer';

type FooterLayoutProps = Readonly<{
  children: React.ReactNode,
}>;

const FooterLayout = (props: FooterLayoutProps) => (
  <>
    {props.children}
    <Footer />
  </>
);

export default FooterLayout;

