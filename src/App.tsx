import { useState } from "react";
import AuthorsTabContent from "./components/AuthorsComponent";
import BooksTabContent from "./components/BooksComponent";
import booksIcon from "./library/assets/icons/books.svg";
import authorsIcon from "./library/assets/icons/authors.svg";

export default function App() {
  const [activeTab, setActiveTab] = useState("booksTab");
  const activeClassName =
    "flex justify-center bg-white rounded-tl-lg rounded-tr-lg border-l border-t border-r border-gray-100 py-4";
  const nonActiveClassName = "flex justify-center py-4";
  return (
    <div className="p-8">
      <ul className="grid grid-flow-col text-center text-gray-500  p-1">
        <li>
          <a
            href="#page1"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("booksTab");
            }}
            className={
              activeTab === "booksTab" ? activeClassName : nonActiveClassName
            }
          >
            <img src={booksIcon} />
            Books
          </a>
        </li>
        <li>
          <a
            href="#page2"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("authorsTab");
            }}
            className={
              activeTab === "authorsTab" ? activeClassName : nonActiveClassName
            }
          >
            <img src={authorsIcon} />
            Authors
          </a>
        </li>
      </ul>
      {activeTab === "booksTab" ? <BooksTabContent /> : <AuthorsTabContent />}
    </div>
  );
}
