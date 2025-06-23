import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../util/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { LOGO } from "../util/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Should contain displayName & photoURL
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

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      {/* Logo */}
      <img className="w-36 md:w-48" src={LOGO} alt="Netflix Logo" />

      {/* Avatar + Name + Logout */}
      {user && (
        <div className="flex gap-4 items-center text-white space-y-1">
          <div className="text-center">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border border-gray-400"
            />
            <span className="text-sm">{user?.displayName || "User"}</span>
          </div>

          <button
            onClick={handleSignOut}
            className=" text-white bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
