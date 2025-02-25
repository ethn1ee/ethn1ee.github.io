export interface Project {
  title: string;
  slug: string;
  start_date: Date;
  end_date: Date | null;
  tags: string[];
  content: string;
}
