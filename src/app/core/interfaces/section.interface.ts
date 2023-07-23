/**
 * @example ```json
 {
   uname: 'uname',
   redirectUrl: '/my-path',
   type: 'grid',
   title: 'a title',
   subTitle: 'a subtitle',
   payload: {               // as IPayload
    content: "some content",
    values: [               // as IValue[]
     {                      // as IValue
        title: "a title",
        content: "some content",
        picture: "assets/images/example.png",
      }
    ],
    picture: "assets/images/example.png",
  }
 }
 * ```
 */
export interface ISection {
  uname: string;
  redirectUrl: string;
  type: string;
  title: string;
  subTitle: string;
  payload: IPayload;
}

/**
 * @example ```json
 {
    content: "some content",
    values: [
     {
        title: "a title",
        content: "some content",
        picture: "assets/images/example.png",
      }
    ],
    picture: "assets/images/example.png",
 }
 * ```
 */
export interface IPayload {
  content: string;
  values: IValue[];
  picture: string;
}

/**
 * @example ```json
 {
    title: "a title",
    content: "some content",
    picture: "assets/images/example.png",
 }
 * ```
 */
export interface IValue {
  title: string;
  content: string;
  picture: string;
}

/**
 * @example ```ts
 hero = 'hero',
 services = 'services',
 whyus = 'whyus',
 action = 'action',
 portfolio = 'portfolio',
 blog = 'blog',
 * ```
 */
export enum SectionName {
  hero = 'hero',
  services = 'services',
  whyus = 'whyus',
  action = 'action',
  portfolio = 'portfolio',
  blog = 'blog',
}
