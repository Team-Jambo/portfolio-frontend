import { PlusCircleIcon } from "lucide-react";

const PagesLayout = ({ headerText, buttonText, children }) => {
  return (
    <div className="p-10 flex-col gap-y-16">
      <div className="flex">
        <h1 className="text-2xl font-bold">{headerText}</h1>
        <button className="bg-[#0A524F] text-white px-6 py-2 ml-auto rounded-lg flex-gap-x-2 ">
          <PlusCircleIcon /> {buttonText}
        </button>
      </div>
      <div>{children} </div>
    </div>
  );
};

export default PagesLayout;
