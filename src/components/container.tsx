import { clsx } from 'clsx';

type ContainerProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  hasCustomWidth?: boolean,
}>;

const Container = (props: ContainerProps) => (
  <div className={clsx(!props.hasCustomWidth && 'max-w-screen-xl', 'mx-auto px-5 lg:px-6', props.className)}>
    {props.children}
  </div>
);

export default Container;
