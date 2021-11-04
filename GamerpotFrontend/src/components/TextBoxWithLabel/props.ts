export interface TextBoxWithLabelProps {
  onSubmit: (name: string, value: string) => void;
  onChange: (text: string) => void;
  value: string;
  name: string;
  label: string;
}
