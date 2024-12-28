import {clsx} from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type GenericChildrenProps = Readonly<{
  children: React.ReactNode,
}>;

const Card = (props: GenericChildrenProps) => (
  <div className="flex flex-col gap-4">{props.children}</div>
);

type CardImageProps = Readonly<{
  src: string,
  loading?: 'lazy' | 'eager',
  alt?: string,
}>;

Card.Image = (props: CardImageProps) => (
  <div className="flex justify-center mb-3 items-center relative aspect-[16/10] bg-ash100 rounded-lg ">
    <Image alt={props.alt || ''} src={props.src} fill={true} loading={props.loading} />
  </div>
);

type CardTitleProps = Readonly<{
  children: React.ReactNode,
  href?: string,
}>;

Card.Title = (props: CardTitleProps) => {
  const fontStyles = 'text-28 md:text-30 font-bold tracking-tight leading-6';
  const linkStyles = 'text-prim hover:opacity-90 transition-opacity';

  if (!props.href) {
    return <div className={fontStyles}>{props.children}</div>
  }

  // external link
  if (props.href.includes('http')) {
    return <a href={props.href} className={clsx(fontStyles, linkStyles)} ref="noopener noreferrer" target="_blank">{props.children}</a>
  }

  // internal link
  return <Link href={props.href} className={clsx(fontStyles, linkStyles)}>{props.children}</Link>
};

Card.Description = (props: GenericChildrenProps) => (
  <div className="text-24 md:text-26 leading-6">{props.children}</div>
);

export default Card;

