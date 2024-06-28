export interface BarberCardProps {
  alias?: string;
  firstName: string;
  lastName: string;
  shop: string;
  averageRating: number;
  totalReviews: number;
  profileImage: string;
  headerImage: string;
  images: { uri: string }[];
  onClick?: () => void;
}
