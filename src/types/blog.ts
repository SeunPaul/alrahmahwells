export interface BlogPost {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  image: string;
  imageAlt: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  author: {
    en: string;
    ar: string;
  };
  publishedDate: string;
  readTime: number; // in minutes
  slug: string;
  featured?: boolean;
  sections: BlogPostSection[];
}

export interface BlogPostSection {
  title?: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  type?: "text" | "quote" | "highlight";
}
