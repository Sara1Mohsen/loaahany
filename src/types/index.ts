export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'UI' | 'UX' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}