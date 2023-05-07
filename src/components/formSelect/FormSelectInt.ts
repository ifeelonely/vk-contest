export default interface FormSelectProps {
  options: optionObj[];
  defaultValue: string;
  icon: React.ReactNode;
  setForm: (type: string, value: string) => void;
  type: string;
}

export interface optionObj {
  id: number;
  name: string | number;
  value: string | number;
}