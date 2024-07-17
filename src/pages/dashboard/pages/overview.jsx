import { K } from "../../../constants";

const Overview = () => {
  return (
    <div className="py-40  px-10">
      <div className="grid grid-cols-3 gap-6">
        {K.OVERVIEW.map(({ icon, text, total }, index) => (
          <div
            key={index}
            className="h-40 w-[280px] bg-[#9BCEE6] text-[#08355D] font-bold shadow-md rounded-xl flex flex-col p-5"
          >
            <div className="flex justify-between">
              <span className="text-bg-[#0B4459]">{icon}</span>
              <span className="=text-lg font-semibold">{text}</span>
            </div>
            <span className="text-2xl font-semibold">{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
