export type TOption = {
  label: string;
  value: number;
};

export type THandler = (value: TOption | TOption[] | null) => void;

export interface IGeneralSelectProps {
  options: TOption[];
  isMulti?: boolean;
  placeholder?: string;
  value: TOption | TOption[] | null;
  onChange: THandler;
}
