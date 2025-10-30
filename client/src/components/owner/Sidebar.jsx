import React, { useState } from "react";
import { assets, ownerMenuLinks, dummyUserData } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState(null);

  const updateImage = async () => {
    if (image) {
      user.image = URL.createObjectURL(image);
      setImage(null);
    }
  };

  return (
    <div className="relative min-h-screen md:flex-col items-center pt-8 w-60 border-r border-borderColor text-sm bg-white">
      <div className="group relative flex flex-col items-center">
        <label htmlFor="image">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>

      {image && (
        <button
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
          onClick={updateImage}
        >
          Save
          <img src={assets.check_icon} width={13} alt="" />
        </button>
      )}

      <p className="mt-2 text-base max-md:hidden text-center">{user?.name}</p>

      <div className="w-full mt-6">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary"
                : "text-gray-600"
            }`}
          >
            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt="icon"
              className="w-5 h-5"
            />
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${
                link.path === location.pathname && "bg-primary"
              } w-1.5 h-8 rounded-l right-0 absolute`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
