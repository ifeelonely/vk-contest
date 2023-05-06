export default interface FormSelectProps {
  options: optionObj[];
  defaultValue: string;
  icon: React.ReactNode;
}

export interface optionObj {
  id: number;
  name: string | number;
  value: string | number;
}