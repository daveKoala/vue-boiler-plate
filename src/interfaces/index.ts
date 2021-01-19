export interface NavigationItem {
  id: string;
  icon: string;
  name: string;
  to: string;
  color: string;
}

export interface Card {
  id: string;
  src: string;
  title: string;
  flex: number;
  read: Date;
  bookmarked: boolean;
  isNew?: boolean;
}

export interface Skill {
  id: string;
  reflections: { date: string; value: number }[];
  practice: number;
  name: string;
  subTitle: string;
  blurb: string;
  content: string;
  bookmarked: boolean;
  src?: string;
}
