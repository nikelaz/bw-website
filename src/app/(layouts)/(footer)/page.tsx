import Hero from '@/components/illustrations/hero';
import Container from '@/components/container';
import Button, {ButtonType} from '@/components/button';
import Nav from '@/components/nav/nav';
import CreateMonthlyBudgetsIllustration from '@/components/illustrations/create-monthly-budgets';
import OrganizeYourFinancesIllustration from '@/components/illustrations/organize-your-finances';
import VisualizeYourProgress from '@/components/illustrations/visualize-your-progress';
import PigIcon from '@/components/icons/pig-icon';
import EnvelopeMoneyIcon from '@/components/icons/envelope-money-icon';

const Home = () => (
  <>
    <section className="relative overflow-hidden">
      <Nav/>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 566" width="3840" height="766" className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 min-h-full">
        <path fill="#ded6f2"
              d="m3384 347c382 319-626.5 319-1183 319-429.1 0-1276-1189.7-1276-1546.5 0-356.8 846.9 254.5 1276 254.5 429.1 0 1183 616.2 1183 973z"/>
        <path fillRule="evenodd" fill="#ded6f2"
              d="m4181 56.2c0 300.8-561.7 549.5-1298 594.8v-1189.6c736.3 45.4 1298 294.1 1298 594.8z"/>
      </svg>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h1 className="text-30 md:text-40 font-bold tracking-tight">Take Control of Your Personal Finances</h1>
              <h2 className="text-28 md:text-32">Your Personal Finance Copilot</h2>
            </div>
            <p className="w-full md:w-11/12">Are you tired of fragile spreadsheets and complicated apps? Budget Warden is an
              intuitive and powerful tool
              designed to help you manage your personal finances hassle-free.</p>
            <Button type={ButtonType.Anchor} href="https://app.budgetwarden.com/sign-up" className="px-10">Sign
              Up</Button>
          </div>
          <Hero/>
        </div>
      </Container>
    </section>

    <section className="py-6 md:py-10">
      <Container className="flex flex-col gap-6 md:gap-10">
        <h2 className="text-30 md:text-40 font-bold tracking-tight">With Budget Warden You Will</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 gap-y-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center relative aspect-[16/10] bg-ash100 rounded-lg pointer-events-none">
              <CreateMonthlyBudgetsIllustration />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-28 md:text-30 font-semibold tracking-tight">Create monthly budgets</h3>
              <p className="text-24 md:text-26 tracking-tight">and enjoy the simplicity of a fixed monthly budgeting cycle.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center relative aspect-[16/10] bg-ash100 rounded-lg pointer-events-none">
              <OrganizeYourFinancesIllustration />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-28 md:text-30 font-semibold tracking-tight">Organize your finances</h3>
              <p className="text-24 md:text-26 tracking-tight">with customizable categories that fit your lifestyle.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center relative aspect-[16/10] bg-ash100 rounded-lg pointer-events-none">
              <VisualizeYourProgress />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-28 md:text-30 font-semibold tracking-tight">Visualize your progress</h3>
              <p className="text-24 md:text-26 tracking-tight">with scales and charts to understand your finances.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-6 md:py-10">
      <Container className="flex flex-col gap-6 md:gap-10">
        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-3 flex flex-col gap-4">
            <h2 className="text-28 md:text-30 md:text-40 font-bold">Methodologies</h2>
            <p className="text-24 md:text-28">We have meticulously researched and analyzed various personal budgeting approaches to develop an app grounded in proven, effective methods.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-7">
            <PigIcon/>
            <div className="flex flex-col gap-3">
              <h3 className="text-28 md:text-30 font-semibold">Zero-Sum Budgeting</h3>
              <p>Zero-sum budgeting is a financial method where every dollar of your income is assigned a specific purpose. It's like creating a detailed plan for how to spend every penny.</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <EnvelopeMoneyIcon/>
            <div className="flex flex-col gap-3">
              <h3 className="text-28 md:text-30 font-semibold">Envelope Budgeting</h3>
              <p>Envelope budgeting involves assigning specific cash amounts to different spending categories. Once an envelope is empty, spending in that category stops until the next budgeting period.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default Home;
