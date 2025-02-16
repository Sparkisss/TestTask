interface NavItem {
  id: number;
  href: string;
  title: string;
  color: string;
}

export interface NavBarProps {
  navbarData: NavItem[];
}
