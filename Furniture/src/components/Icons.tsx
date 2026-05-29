import {
  HomeIcon,
  HamburgerMenuIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  HeartIcon,
  HeartFilledIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955a1.125 1.125 0 011.592 0L21.75 12M4.5 9.75V19.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5V9.75"
      />
    </svg>
  ),

  cart: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.5l1.5 9h11.25l1.5-6H6.75"
      />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  ),

  home: HomeIcon,
  menu: HamburgerMenuIcon,
  paperPlane: PaperPlaneIcon,
  exclamation: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  star: StarIcon,
  heart: HeartIcon,
  heartFill: HeartFilledIcon,
  dashboard: DashboardIcon,
  gear: GearIcon,
  exit: ExitIcon,
  trash: TrashIcon,
};
