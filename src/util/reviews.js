export const getAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  return (
    reviews.reduce(
      (accumultedValue, review) => accumultedValue + review.rating,
      0,
    ) / reviews.length
  ).toFixed(1);
};
