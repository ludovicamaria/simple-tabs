export interface InputProps {
  id: string;
  htmlFor: string;
  labelName: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isDate: boolean
}
