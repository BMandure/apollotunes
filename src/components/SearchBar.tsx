import React, { useState } from "react";

import searchImg from "../assets/search.svg";

function SearchBar(props: { handleSearch: Function }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchInput, setSearchInput] = useState<string>();

  const handleShowModal = () => {
    window.innerWidth > 920
      ? (setShowSearchBar(true), setButtonState(false))
      : setShowSearchModal(true);
  };
  const handleCloseSearchBar = () => {
    setButtonState(true);
    setShowSearchBar(false);
  };
  const handleCloseModal = () => {
    setShowSearchModal(false);
  };
  const handleOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    e.key === "Enter" && console.log("Search: " + searchInput);
  };

  return (
    <>
      <button
        onClick={handleShowModal}
        className={`flex gap-2 w-full max-[920px]:justify-center ${
          buttonState ? "inline" : "hidden"
        }`}
      >
        <img src={searchImg} alt="search_icon" className="w-[30px] h-[30px]" />
        <p className="max-[920px]:hidden">Search</p>
      </button>

      {showSearchBar && (
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search song..."
            className="border-2 border-main border-opacity-75 text-xl rounded-3xl h-[30px] bg-transparent ps-3 pe-8 w-full"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyDown={handleOnInput}
          />
          <div className="h-full absolute right-1 flex items-center">
            <p
              className="bg-main bg-opacity-75 rounded-3xl w-[23px] h-[23px] hover:cursor-pointer text-center text-sm py-[2px]"
              onClick={handleCloseSearchBar}
            >
              &#10005;
            </p>
          </div>
        </div>
      )}
      {showSearchModal && (
        <div className="absolute top-0 left-0 bg-black w-full h-full flex bg-opacity-75 justify-center items-center gap-5 align-middle flex-col">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search song..."
              className="border-2 border-main border-opacity-75 text-3xl rounded-3xl h-[50px] bg-transparent ps-3 pe-8 w-[30vw]"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={handleOnInput}
            />
            <div className="h-full pe-2 absolute right-0 flex items-center cursor-default">
              <p
                className="bg-main bg-opacity-75 rounded-3xl w-[35px] py-1 hover:cursor-pointer text-center"
                onClick={handleCloseModal}
              >
                &#10005;
              </p>
            </div>
          </div>
          <p className="text-gray-700 cursor-default">
            Press <span className="text-2xl">[ ↲ ]</span> to search
          </p>
        </div>
      )}
    </>
  );
}

export default SearchBar;
