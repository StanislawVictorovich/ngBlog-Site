export interface Users {
  id: number,
  name: string,
  username: string,
  email: string,
  company: {
    catchPhrase: string;
  }
}

export interface Albums {
  userId: number,
  id: number,
  title: string
}

export interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
