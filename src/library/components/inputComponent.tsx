import type { InputProps } from "../interfaces/inputProps";

export const InputComponent = (inputProps: InputProps) => {
  return (
    <>
      {inputProps.isDate ? (
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={inputProps.htmlFor}
            >
              {inputProps.labelName}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="date"
              id={inputProps.id}
              name="date"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#ea3e46]"
              value={inputProps.value}
              onChange={(e) => inputProps.onChange(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor={inputProps.htmlFor}
            >
              {inputProps.labelName}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#ea3e46]"
              id={inputProps.id}
              type="string"
              placeholder={inputProps.placeholder}
              value={inputProps.value}
              onChange={(e) => inputProps.onChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputComponent;
