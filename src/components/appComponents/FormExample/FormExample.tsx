import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  FormGroup,
  FormWrapper,
  Input,
  Label,
  SubmitButton,
} from "./styles.ts";
import { CustomSelect } from "../../reusableComponents/CustomSelect/CustomSelect.tsx";
import {THandler, TOption} from "../../reusableComponents/CustomSelect/types.ts";

const sampleOptions: TOption[] = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

export const FormExample: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    singleSelect: null as null | TOption,
    multiSelect: [] as TOption[],
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSingleSelectChange:THandler = (value) => {
    setFormData((prev) => ({
      ...prev,
      singleSelect: value && !Array.isArray(value) ? value : null,
    }));
  };

  const handleMultiSelectChange:THandler = (value) => {
    setFormData((prev) => ({
      ...prev,
      multiSelect: Array.isArray(value) ? value : [],
    }));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label>Single Select:</Label>
        <CustomSelect
          options={sampleOptions}
          isMulti={false}
          placeholder="Choose one option"
          value={formData.singleSelect}
          onChange={handleSingleSelectChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Multi Select:</Label>
        <CustomSelect
          options={sampleOptions}
          isMulti={true}
          placeholder="Choose multiple options"
          value={formData.multiSelect}
          onChange={handleMultiSelectChange}
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  );
};
