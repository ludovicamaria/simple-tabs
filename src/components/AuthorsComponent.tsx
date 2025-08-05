import { useEffect, useState } from "react";
import TabComponent from "../library/components/tabComponent";
import FormComponent from "../library/components/formComponent";
import ErrorComponent from "../library/components/errorComponent";

export default function AuthorsTabContent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const blankCondition = isSubmitted && (firstName.trim() === "" || lastName.trim() === "" || date.trim() === "");

  const isDateInTheFuture = (inputDateStr: string): boolean => {
    const inputDate = new Date(inputDateStr);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate > today;
  };

  useEffect(() => {
    setIsButtonDisabled(blankCondition);
  }, [firstName, lastName, date]);

  const handleSubmit = () => {
    setIsSubmitted(true); 
    if (!blankCondition && !isDateInTheFuture(date)) {
      alert(JSON.stringify({ firstName, lastName, date }, null, 2));
    }
  };

  return (
    <TabComponent
      tabContent={
        <>
          <FormComponent
            inputs={[
              {
                id: "firstName",
                htmlFor: "inline-firstName",
                labelName: "First name",
                placeholder: "Please type in a first name",
                value: firstName,
                onChange: setFirstName,
                isDate: false,
              },
              {
                id: "lastName",
                htmlFor: "inline-lastName",
                labelName: "Last name",
                placeholder: "Please type in a last name",
                value: lastName,
                onChange: setLastName,
                isDate: false,
              },
              {
                id: "date",
                htmlFor: "inline-date",
                labelName: "Date of birth",
                placeholder: "Please type in a date of birth",
                value: date,
                onChange: setDate,
                isDate: true,
              },
            ]}
            buttonProps={{
              buttonText: "Send alert",
              onClick: handleSubmit, 
              isDisabled: isButtonDisabled,
            }}
          />
          {isSubmitted && blankCondition ? (
            <ErrorComponent errorMessage="Fields cannot be empty" />
          ) : null}
          {isSubmitted && isDateInTheFuture(date) ? (
            <ErrorComponent errorMessage="Date of birth cannot be in the future" />
          ) : null}
        </>
      }
    />
  );
}
