import type { ButtonProps } from "../interfaces/buttonProps";

export const ButtonComponent = (buttonProps: ButtonProps) => {
  return buttonProps.isDisabled ? (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button
          className="shadow bg-[#d3d3d3] hover:bg-[#c0c0c0] focus:shadow-outline focus:outline-none text-808080 font-semibold py-2 px-4 rounded"
          type="button"
          onClick={buttonProps.onClick}
          disabled={buttonProps.isDisabled}
        >
          {buttonProps.buttonText}
        </button>
      </div>
    </div>
  ) : (
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button
          className="shadow bg-[#ea3e46] hover:bg-[#d4373f] focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
          type="button"
          onClick={buttonProps.onClick}
          disabled={buttonProps.isDisabled}
        >
          {buttonProps.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
