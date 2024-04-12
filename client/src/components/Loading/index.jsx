/* eslint-disable react/prop-types */
import ReactLoading from "react-loading";

export default function Loading({ theme }) {
  return (
    <div className="min-h-screen mt-16 flex flex-col items-center gap-6">
      <ReactLoading
        type={"spinningBubbles"}
        color={`${theme === "dark" ? "#D1D5DB" : "#1E293B"}`}
        width={200}
        height={200}
      />
      <p
        className={`${
          theme === "dark" ? "text-gray-300" : "text-slate-800"
        } font-semibold text-5xl drop-shadow-md`}
      >
        Loading..
      </p>
    </div>
  );
}
