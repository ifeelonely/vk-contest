export default interface FormTimeorDateProps {
  type: string;
  labelText: string;
  setForm: (type: string, value: string) => void;
}
