import { useState } from "react";

import searchImg from "../assets/search.svg";

function SearchBar(props: { handleSearch: Function }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<boolean>(true);

  const handleShowModal = () => {
    setButtonState(false);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setButtonState(true);
    setShowModal(false);
  };
  return (
    <>
      <button
        onClick={handleShowModal}
        className={`flex gap-2 w-full ${buttonState ? "inline" : "hidden"}`}
      >
        <img src={searchImg} alt="search_icon" className="w-[30px] h-[30px]" />
        Search
      </button>

      {showModal && (
        <div className="flex gap-2 justify-around w-full items-center">
          <input
            type="text"
            placeholder="Search song..."
            className="border-2 border-main text-[1rem] rounded-3xl h-[30px] bg-transparent px-3 w-60"
          />
          <p className="my-0 hover:cursor-pointer" onClick={handleCloseModal}>
            &#10005;
          </p>
        </div>
      )}
    </>
  );
}

export default SearchBar;
