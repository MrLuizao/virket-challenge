
export interface IUserData{
    email: string;
    fullName: string;
    gender: string;
    picture: [ImagesModdel];
}

interface ImagesModdel {
    large: string;
    medium: string;
    thumbnail: string;
}
