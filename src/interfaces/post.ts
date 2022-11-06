export interface IPosts {
    postId?: number;
    review: string;
    workingHour: number;
    salary:number
    holiday: number;
    benefit:number;
    isBookmarked?:boolean;
    isLiked?:boolean;
}

export interface IQuery{
    params:string; 
}