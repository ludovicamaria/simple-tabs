import { useEffect, useState } from "react";
import TabComponent from "../library/components/tabComponent";
import FormComponent from "../library/components/formComponent";
import ErrorComponent from "../library/components/errorComponent";

export default function AuthorsTabContent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [showButton, setShowButton] = useState(false);

  const blankCondition = firstName === "" || lastName === "" || date === "";

  const isDateInTheFuture = (inputDateStr: string): boolean => {
    const inputDate = new Date(inputDateStr);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate > today;
  };

  useEffect(() => {
    setShowButton(blankCondition);
  }, [firstName, lastName, date]); 

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
              onClick: () =>
                alert(JSON.stringify({ firstName, lastName, date }, null, 2)),
              isDisabled: showButton,
            }}
          />
          {blankCondition ? (
            <ErrorComponent errorMessage="Fields cannot be empty" />
          ) : null}
          {isDateInTheFuture(date) ? (
            <ErrorComponent errorMessage="Date of birth cannot be in the future" />
          ) : null}
        </>
      }
    />
  );
}
