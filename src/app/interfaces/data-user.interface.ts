
export interface IUserData{
    email: string;
    titleText: string;
    fullName: string;
    gender: string;
    picture: [ImagesModdel];
}

interface ImagesModdel {
    large: string;
    medium: string;
    thumbnail: string;
}
