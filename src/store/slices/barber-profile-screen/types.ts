export interface BarberProfileScreenState {
  isLoading: boolean;
  barber?: BarberData;
}

export interface BarberData {
  firstName: string;
  lastName: string;
  averageRating: number;
  totalReviews: number;
  shop: string;
  images: { uri: string }[];
  alias: string;
}
