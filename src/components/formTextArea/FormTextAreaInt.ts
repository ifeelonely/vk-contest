export default interface FormTextAreaInt {
  value: string;
  type: string;
  label: string;
  setForm: (type: string, value: string) => void;
}