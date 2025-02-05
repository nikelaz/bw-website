import Container from '@/components/container';

const Support = async (props: any) => {
  return (
    <Container hasCustomWidth={true} className="max-w-screen-lg flex flex-col gap-9">
      <h1 className="text-40 font-bold tracking-tight">Customer Support</h1>
      
      <h2 className="text-32 font-semibold tracking-tight">We're Here to Help!</h2>
      
      <p>Your experience matters to us. If you have any questions, issues, or feedback regarding the website, web application, or our iOS and Android mobile apps, we’re here to assist you. Our team is dedicated to resolving any concerns you may have and ensuring you have the best experience possible.</p>
      <p>Feel free to reach out to us via email at <a href="mailto:nikola.n.lazarov@outlook.com" className="text-prim underline">nikola.n.lazarov@outlook.com</a>, and we’ll get back to you as soon as possible.</p>
    </Container>
  );
};

export default Support;
