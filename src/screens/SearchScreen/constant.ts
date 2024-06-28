import { BarberCardProps } from "../../components/BarberCard/types";

export const barberCardTestData: BarberCardProps[] = [
  {
    firstName: "John",
    lastName: "Deer",
    averageRating: 4.9,
    totalReviews: 509,
    shop: "Faded Cuts Barbershop",
    profileImage:
      "https://storage.googleapis.com/barber-app-demo-image-bucket/barber-1/profile-image.jpg",
    headerImage:
      "https://storage.googleapis.com/barber-app-demo-image-bucket/barber-1/header-image.jpg",
    images: new Array(5).fill(1).map((_, index) => ({
      uri: `https://storage.googleapis.com/barber-app-demo-image-bucket/barber-1/service-image-${
        index + 1
      }.jpg`,
    })),

    alias: "Trey The Barber",
    onClick: () => null,
  },
  {
    firstName: "Kevin",
    lastName: "Smith",
    averageRating: 2.9,
    totalReviews: 303,
    shop: "Cut it UP Barbershop",
    profileImage:
      "https://storage.googleapis.com/barber-app-demo-image-bucket/barber-2/profile-image.jpg",
    headerImage:
      "https://storage.googleapis.com/barber-app-demo-image-bucket/barber-2/header-image.jpg",
    images: new Array(5).fill(1).map((_, index) => ({
      uri: `https://storage.googleapis.com/barber-app-demo-image-bucket/barber-2/service-image-${
        index + 1
      }.jpg`,
    })),
    alias: "Smith Cuts",
    onClick: () => null,
  },
];
