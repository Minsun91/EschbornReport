export interface Posts {
    postId?: number;
    title: string;
    content: string;
    userId?:number
    nickname?: string;
    isLiked?:boolean;
    isBookmarked?:boolean;
}