import Container from '@/app/(components)/container';
import Button, {ButtonType} from '@/app/(components)/button';

const PreFooterSection = () => (
  <section className="py-10 overflow-hidden">
    <Container className="flex flex-col gap-7">
      <div className="bg-ash300 rounded-xl px-5 lg:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 py-10 flex flex-col gap-7 relative z-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-40 font-bold">Get Started for Free!</h2>
              <p>Take control of your personal finances.</p>
            </div>
            <Button type={ButtonType.Anchor} href="https://app.budgetwarden.com/sign-up" className="px-10">Sign Up</Button>
          </div>
          <div className="hidden md:block col-span-5 lg:col-span-6 relative">
            <img
              className="absolute bottom-0 -left-12 max-w-none"
              width="730"
              height="412"
              src="/prefooter-illustation.svg"
              alt=""
              loading="lazy"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default PreFooterSection;
