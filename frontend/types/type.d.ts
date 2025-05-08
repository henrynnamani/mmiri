interface ITextField {
  label: string;
  secureEntry?: boolean;
}

interface ICustomButton {
  label: string;
  outlined?: boolean;
  onPress: () => void;
}
