export interface BarberProfileScreenParams {
  name: string;
  alias?: string;
  shop: string;
  averageRating: number;
  totalReviews: number;
  profileImage: string;
  headerImage: string;
  images: { uri: string }[];
}
