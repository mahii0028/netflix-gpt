import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../util/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../util/constants";
import { toggleGptSeacrh } from "../store/slices/gptSearchSlice";
import { changeLanguage } from "../store/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Should contain displayName & photoURL
  const { showSearchGpt } = useSelector((state) => state.gptSearch);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 w-full px-4 md:px-8 py-4 bg-gradient-to-b from-black flex flex-wrap items-center justify-between z-30">
      <img className="w-28 md:w-40" src={LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 text-white mt-4 md:mt-0">
          {showSearchGpt && (
            <select
              onChange={handleLanguageSelect}
              className="bg-transparent text-white border border-gray-500 px-3 py-1 rounded text-sm appearance-none focus:outline-none focus:border-white pr-8"
            >
              {SUPPORTED_LANGUAGES.map((item, i) => (
                <option key={i} value={item.value} className="text-black">
                  {item.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={() => dispatch(toggleGptSeacrh())}
            className="px-4 py-1 bg-pink-600 hover:bg-pink-700 text-sm font-medium rounded transition"
          >
            {showSearchGpt ? "Home Page" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="px-4 py-1 bg-red-600 hover:bg-red-700 text-sm font-medium rounded transition"
          >
            Logout
          </button>

          <div className="flex items-center gap-2 ml-2">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border border-gray-400 object-cover"
            />
            <span className="text-sm font-semibold">
              {user?.displayName || "User"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
