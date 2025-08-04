import { useEffect, useState } from "react";
import TabComponent from "../library/components/tabComponent";
import FormComponent from "../library/components/formComponent";
import ErrorComponent from "../library/components/errorComponent";

export default function BooksTabContent() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [showButton, setShowButton] = useState<boolean>(false)
  const blankCondition = title === "" || genre === "" || publishedYear === "";
  const validYear = /^\d{4}$/.test(publishedYear);

  useEffect(() => {
    if (blankCondition) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  })

  return (
    <TabComponent
      tabContent={
        <>
          <FormComponent
            inputs={[
              {
                id: "title",
                htmlFor: "inline-title",
                labelName: "Title",
                placeholder: "Please type in a title",
                value: title,
                onChange: setTitle,
                isDate: false,
              },
              {
                id: "genre",
                htmlFor: "inline-genre",
                labelName: "Genre",
                placeholder: "Please type in a genre",
                value: genre,
                onChange: setGenre,
                isDate: false,
              },
              {
                id: "year",
                htmlFor: "inline-year",
                labelName: "Published year",
                placeholder: "Please type in a published year",
                value: publishedYear,
                onChange: setPublishedYear,
                isDate: false,
              },
            ]}
            buttonProps={{
              buttonText: "Send alert",
              onClick: (e) =>
                alert(JSON.stringify({ title, genre, publishedYear }, null, 2)),
              isDisabled: showButton}}
          />
          {blankCondition ? (
            <ErrorComponent errorMessage="Fields cannot be empty" />
          ) : null}
          {!validYear ? (
            <ErrorComponent errorMessage="Please insert a valid year" />
          ) : null}
        </>
      }
    />
  );
}
