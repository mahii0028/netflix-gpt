import React from "react";
import { lang } from "../util/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const { preferedLang } = useSelector((state) => state.config);

  return (
    <form className="flex flex-col sm:flex-row w-full max-w-3xl gap-3 items-center bg-black px-4 py-4 sm:py-2 rounded z-10">
      <input
        className="flex-1 px-4 py-2 rounded border border-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-white transition text-sm"
        type="text"
        placeholder={lang[preferedLang]?.gptPlaceHolder}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition text-sm w-full sm:w-auto"
      >
        {lang[preferedLang]?.search}
      </button>
    </form>
  );
};

export default GptSearchBar;
