import { TouchableWebElement } from "@ui-kitten/components/devsupport";

export interface TabViewProps {
  onSelect: (index: number) => void;
  selectedIndex: number;
  tabs: { title: string; render: () => TouchableWebElement }[];
}
