export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  company: {
    catchPhrase: string;
  }
}

export interface Album {
  userId: number,
  id: number,
  title: string
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
