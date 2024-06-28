export const getFormatedAddress = (barber) =>
  `${barber.addressLine1}${
    barber.addressLine2 ? " " + barber.addressLine2 : ""
  }, ${barber.city}, ${barber.state} ${barber.zipCode}`;

export const getFullName = (user) => `${user.firstName} ${user.lastName}`;
