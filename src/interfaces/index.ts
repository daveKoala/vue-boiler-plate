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
  read: string | null;
  bookmarked: boolean;
  isNew?: boolean;
}

export interface Skill {
  id: string;
  reflections: { date: string; value: number }[];
  suggestedPractices: number;
  name: string;
  subTitle: string;
  blurb: string;
  content: string;
  bookmarked: boolean;
  src?: string;
}

export interface Desire {
  id: string;
  title: string;
  body: string;
  rating: number;
  selected: boolean;
  review: { date: string; value: number }[];
}

export interface To {
  path?: string;
  name?: string;
  params?: {
    [key: string]: string;
  };
}
