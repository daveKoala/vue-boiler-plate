export interface NavigationItem {
  id: string;
  icon: string;
  name: string;
  to: string;
  color: string;
}

export interface Card {
  id?: string;
  src: string;
  title: string;
  flex: number;
}
