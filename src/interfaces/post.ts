export interface IPosts {
    postId?: number;
    review: string;
    workingHour: number;
    salary:number
    holiday: number;
    benefit:number;
    isBookmarked?:boolean;
    isLiked?:boolean;
    user_id?:number;
    company_id?:number;
    like_id?:number;
    createdAt:Date;
    updatedAt:Date
}

export interface IQuery{
    params:string; 
}