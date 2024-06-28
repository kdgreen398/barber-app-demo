import { STATES } from "../../util/constants";

export function getPossibleCityMatches(
  input: string,
  availableCities: { city: string; state: string }[],
) {
  // Normalize input
  const normalizedInput = input.toLowerCase().trim();

  const [inputCity, inputState] = normalizedInput
    .split(",")
    .map((part) => part.trim());
  const isMatch = (a: string, b: string) => {
    return a && b && a.includes(b);
  };

  // Filter cities based on the user input
  const matchedCities = availableCities.filter(({ city, state }) => {
    const normalizedCity = city.toLowerCase();
    const normalizedState = state.toLowerCase();
    const stateObj = STATES.find(
      (s) => s.shorthand.toLowerCase() === normalizedState,
    );

    const cityMatch = inputCity ? isMatch(normalizedCity, inputCity) : true;

    const stateMatch1 =
      isMatch(stateObj?.name.toLowerCase() as string, inputState) ||
      isMatch(stateObj?.shorthand.toLowerCase() as string, inputState);

    const stateMatch2 =
      isMatch(stateObj?.name.toLowerCase() as string, inputCity) ||
      isMatch(stateObj?.shorthand.toLowerCase() as string, inputCity);

    return cityMatch || stateMatch1 || stateMatch2;
  });

  // Return the matched city names
  return matchedCities;
}
