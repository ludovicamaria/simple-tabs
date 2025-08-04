import type { FormProps } from "../interfaces/formProps";
import ButtonComponent from "./buttonComponent";
import InputComponent from "./inputComponent";

export const FormComponent = ({ inputs, buttonProps }: FormProps) => {
  return (
    <form className="w-full max-w-sm">
      {inputs.map((input, index) => (
        <>
          <InputComponent
            id={input.id}
            htmlFor={input.htmlFor}
            labelName={input.labelName}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            isDate={input.isDate}
          />
        </>
      ))}
      <ButtonComponent
        onClick={buttonProps.onClick}
        buttonText={buttonProps.buttonText}
        isDisabled={buttonProps.isDisabled}
      />
    </form>
  );
};

export default FormComponent;
