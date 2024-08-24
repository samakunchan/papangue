/**
 @example ```json
 {
   uname: 'uname',
   redirectUrls: [          // IRedirectUrls[]
    {
      label: 'path',
      path: '/my-path',
    }                       // as IRedirectUrls
   ],
   type: 'grid',
   title: 'a title',
   subTitle: 'a subtitle',
   payload: {
    content: "some content",
    values: [] as string[],
    picture: "assets/images/example.png",
  }                         // as IPayload
 }
 ```
 @property uname string
 @property redirectUrls string
 @property type string
 @property title string
 @property subTitle string
 @property payload IPayload?
 */
export interface ISection {
  uname: string;
  redirectUrls?: IRedirectUrls[] | null;
  type: string;
  title: string;
  subTitle: string;
  payload?: IPayload | null;
}

/**
 @example ```json
 {
    label: 'path',
    path: '/my-path',
  }
 *  ```
 */
export interface IRedirectUrls {
  label: string;
  path: string;
}

/**
 @example ```json
 {
    content: "some content",
    values: [] as string[],
    picture: "assets/images/example.png",
 }
 ```
 @property content string?
 @property values IValue (List) (required)
 @property picture IPicture?
 */
export interface IPayload {
  content?: string | null;
  values: string[];
  picture?: IPicture | null;
}

/**
 @example ```json
 {
    title: "a title",
    slug: "a-title",
    content: "some content",
    reason: "some reason",
    conf: "....",
    icon: 'fa fa-pencil',
    picture: {
      src: 'assets/images/example.png',
      alt: 'some text',
      icon: 'fa fa-pencil',
    },
 }
 ```
 @property title string?
 @property content string (required)
 @property picture IPicture?
 */
export interface IValue {
  title?: string | null;
  reason?: string | null;
  slug: string;
  content?: string | null;
  conf: string;
  icon?: string;
  picture?: IPicture | null;
}

/**
 @example ```json
 {
    type: 'email',
    value: 'some@exemple.com',
  }
 ```
 @property type string
 @property value string
 */
export interface IContact {
  type: string;
  value: string;
}

/**
 @example ```json
 {
    src: 'assets/images/example.png',
    alt: 'some text',
    icon: 'fa fa-pencil',
  }
 ```
 @property src string?
 @property alt string?
 @property icon string?
 */
export interface IPicture {
  src?: string | null;
  alt?: string | null;
  icon?: string | null;
}

/**
 @example ```json
 {
    title: 'a title',
    slug: 'a-title',
    client: 'client',
    shortDescription: 'a short description',
    fullDescription: 'a full description',
    category:
      id: 1;
      title: 'a title';
      content: 'a content';
    },
    dateProjet: '2023-01-01',
    urlProjet: 'example.com',
    picturesProject:  [
      {
        src: 'assets/images/example.png',
        alt: 'some text',
      }
    ],
    toLandingPage: false,
  }
 ```
 */
export interface IConfPortfolio {
  title: string;
  slug: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
  category: {
    id: number;
    title: string;
    content: string;
  };
  dateProjet: string;
  urlProjet: string;
  picturesProject: IPicture[];
  toLandingPage: boolean;
}

/**
 @example ```json
 {
    title: 'a title',
    slug: 'a-title',
    description: 'a full description',
    category:
      id: 1;
      title: 'a title';
      content: 'a content';
    },
    datePublish: '2023-01-01',
    author: {
      mon_complet: 'samakunchan'
    }
    picture:  {
      src: 'assets/images/example.png',
      alt: 'some text',
    },
    toLandingPage: false,
  }
 ```
 */
export interface IConfBlog {
  title: string;
  slug: string;
  description: string;
  category: {
    id: number;
    title: string;
    content: string;
  };
  createdAt: string;
  author: {
    nom_complet: string;
  };
  picture: IPicture;
  toLandingPage: boolean;
}

export interface ISkill {
  techno: string;
  level: string;
  position?: string;
}

export enum Position {
  front = 'front',
  back = 'back',
}

/**
 @example ```ts
  learning = learning,           //lvl 0
  basic = basic,                 //lvl 1
  intermediate = intermediate,   //lvl 2
  advanced = advanced,           //lvl 3
  expert = expert,               //lvl 4
  ```
 */
export enum SkillLevel {
  learning = 'learning',
  basic = 'basic',
  intermediate = 'intermediate',
  advanced = 'advanced',
  expert = 'expert',
}

/**
 @example ```ts
  home = home,
  hero = hero,
  about = about,
  services = services,
  whyus = whyus,
  action = action,
  portfolio = project,
  blog = blog,
  stats = stats,
  ```
 */
export enum SectionName {
  home = 'home',
  hero = 'hero',
  about = 'about',
  services = 'services',
  whyus = 'whyus',
  action = 'action',
  project = 'projects',
  blog = 'blog',
  stats = 'stats',
}
