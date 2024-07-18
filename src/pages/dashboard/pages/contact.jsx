import { MessageSquareMore, TextCursorIcon } from "lucide-react";
import PagesLayout from "../layouts/pagesLayout";

const Contact = ({ onClick }) => {
  return (
    <>
      <PagesLayout buttonText="Add New Contact"></PagesLayout>

      <div className="p-2 flex-col gap-y-16">
        <button
          className="bg-[#0B4459] text-white px-4 py-2 ml-auto rounded-lg flex flex-gap-x-3"
          onClick={onClick}
        >
          Chart Now <MessageSquareMore className="ml-20" />
        </button>
      </div>
    </>
  );
};

export default Contact;
