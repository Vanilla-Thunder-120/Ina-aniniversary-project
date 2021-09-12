export interface Milestone {
  label: string;
  media?: string;
  date: string;
  longText?: string;
  section?: string;
  anchor?: string;
  major?: boolean;
  tags?: Tags;
  video?: string;
}

export type Tags = {
  milestone: boolean;
  important: boolean;
  drawing: boolean;
  collab: boolean;
};
