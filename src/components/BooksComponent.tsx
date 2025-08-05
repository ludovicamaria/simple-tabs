import { useEffect, useState } from "react";
import TabComponent from "../library/components/tabComponent";
import FormComponent from "../library/components/formComponent";
import ErrorComponent from "../library/components/errorComponent";

export default function BooksTabContent() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const blankCondition = isSubmitted && (title.trim() === "" || genre.trim() === "" || publishedYear.trim() === "");

  const validYear = /^\d{4}$/.test(publishedYear);
  
  useEffect(() => {
      setIsButtonDisabled(blankCondition)
  }, [title, genre, publishedYear])


  const handleSubmit = () => {
    setIsSubmitted(true); 
    if (!blankCondition && validYear) {
      alert(JSON.stringify({ title, genre, publishedYear }, null, 2));
    }
  };
  
  
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
              onClick: handleSubmit,
              isDisabled: isButtonDisabled}}
          />
          {isSubmitted && blankCondition ? (
            <ErrorComponent errorMessage="Fields cannot be empty" />
          ) : null}
          {isSubmitted && !validYear ? (
            <ErrorComponent errorMessage="Please insert a valid year" />
          ) : null}
        </>
      }
    />
  );
}
