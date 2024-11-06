import Icon, {IconType} from './icon';
import {clsx} from 'clsx';

type IconLabelProps = Readonly<{
  children: React.ReactNode,
  icon: IconType,
  iconWidth?: number | string,
  iconHeight?: number | string,
  className?: string,
}>;

const IconLabel = (props: IconLabelProps) => { 
  const width = props.iconWidth || '1em';
  const height = props.iconHeight || '1em';

  return (
    <div className={clsx('flex gap-2 items-center', props.className)}>
      <Icon iconType={props.icon} width={width} height={height} />
      <div>{props.children}</div>
    </div>
  );
};

export default IconLabel;

