import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import cardBg from "../../assets/images/cardBg.svg";

const TemplateCard = ({ application }) => {
  const { id, title, category, application: content, templateby } = application;

  return (
    <div className="bg-white p-2 shadow-md rounded-md cardContainer">
      {/* inner card */}
      <div className="aspect-square bg-[#f9f6fe] text-black flex flex-col p-2 rounded-md relative overflow-hidden">
        <p className="text-xs font-ubuntu z-10">{category}</p>
        <div className="flex-1 flex items-center z-10">
          <h1 className="text-4xl text-blue-500">{title}</h1>
        </div>

        {/* background image */}
        <img
          src={cardBg}
          alt=""
          className="absolute bottom-0 left-0 w-full h-full object-contain  opacity-5"
        />
      </div>

      {/* bottom content */}
      <div className="flex items-center justify-between text-base font-bold py-2">
        <h1 className="line-clamp-2 flex-1">{title}</h1>
        <Link to={"/templates/edit"} state={content}>
          <Button className="bg-black text-white rounded-full hover:bg-black/80">
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TemplateCard;
