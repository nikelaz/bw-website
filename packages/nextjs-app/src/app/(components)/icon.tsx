import UserIcon from './icons/user';
import CalendarIcon from './icons/calendar';

export enum IconType {
  User = 1,
  Calendar,
}

interface IconProps extends React.HTMLProps<HTMLSVGElement> {
  type: IconType;
}

const Icon = (props: IconProps) => {
  switch (props.type) {
    case IconType.User:
      return <UserIcon {...props} />;
    case IconType.Calendar:
      return <CalendarIcon {...props} />;
  }
};

export default Icon;

