export interface ContentBase {
  id: string;
  name: string;
  src?: string | undefined;
}

export interface Card extends ContentBase {
  // src: string;
  // title: string;
  flex: number;
  read: string | null;
  bookmarked: boolean;
  isNew?: boolean;
}

export interface Skill extends ContentBase {
  reflections: { date: string; value: number }[];
  suggestedPractices: number;
  name: string;
  subTitle: string;
  blurb: string;
  content: string;
  bookmarked: boolean;
  // src?: string;
}

export interface Desire extends ContentBase {
  id: string;
  // title: string;
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
export interface Alert {
  id: string;
  message: string;
  createdOn: string;
  readOn: string | null;
  url?: string;
}
