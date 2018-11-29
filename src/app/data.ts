interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

interface Albums {
  userId: number,
  id: number,
  title: string
}

interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface Data {
  albums: Albums[],
  users: User[],
  posts: Posts[],
  comments: Comments[]
}
