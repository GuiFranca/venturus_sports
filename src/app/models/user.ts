export class User {
  username: string;
  name: string;
  email: string;
  city: string;
  often_ride: string;
  nuPosts: number;
  nuAlbuns: number;
  nuPhotos: number;
}



export interface ITable {
  field: string;
  header: string;
}
