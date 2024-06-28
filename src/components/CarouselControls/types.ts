export interface CarouselControlsProps {
  onLeftClick: () => void;
  currentItemIndex: number;
  totalItems: number;
  onRightClick: () => void;
  dotIndicatorSpacing?: number;
  dotIndicatorComponent?: (index: number) => React.ReactNode;
}
