
export interface IUserData{
    email: string;
    fullName: any;
    gender: string;
    picture: [ImagesModdel];
}

interface ImagesModdel {
    large: string;
    medium: string;
    thumbnail: string;
}
