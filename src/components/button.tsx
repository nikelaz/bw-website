import { clsx } from 'clsx';
import Link from 'next/link';

export enum ButtonType {
  Button = 1,
  Anchor,
  NextLink,
}

export enum ButtonSize {
  Small = 1,
}

type ButtonProps = Readonly<{
  children: React.ReactNode,
  type?: ButtonType,
  className?: string,
  href?: string,
  size?: ButtonSize,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}>;

const Button = (props: ButtonProps) => {
  const btnClassName = clsx(
    'rounded-lg bg-prim hover:opacity-95 h-min transition-opacity py-3 justify-center transition-scale text-white font-semibold inline-flex w-fit leading-4 outline-prim outline-offset-4 focus:outline-2 active:scale-[0.98]',
    props.size === ButtonSize.Small ? 'text-20' : 'text-24',
    props.className
  );

  if (props.type === ButtonType.Button) {
    return (
      <button onClick={props.onClick} className={btnClassName}>
        {props.children}
      </button>
    );
  }

  if (!props.href) return null;

  if (props.type === ButtonType.Anchor) {
    return (
      <a href={props.href} className={btnClassName}>
        {props.children}
      </a>
    );
  }

  if (props.type === ButtonType.NextLink) {
    return (
      <Link href={props.href} className={btnClassName}>
        {props.children}
      </Link>
    );
  }
}

export default Button;
