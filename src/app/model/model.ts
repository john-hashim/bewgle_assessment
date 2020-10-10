export class DataModel{
    name:string;
    area:string;
    city:string;
    category:string[];
    cover_image:string;
    review_rating: ReviewRating;
    feature_rating: FeatureRating;
}
export interface FeatureRating {
    place: number;
    food: number;
    service: number;
    staff: number;
    breakfast: number;
}
export interface ReviewRating {
    votes: Vote[];
    total: number;
}

export interface Vote {
    rating: number;
    votes: number;
}