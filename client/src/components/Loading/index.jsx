import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="min-h-screen mt-16 flex flex-col items-center gap-6">
      <ReactLoading
        type={"spinningBubbles"}
        color="rgb(45 212 191 / var(--tw-text-opacity))"
        width={200}
        height={200}
      />
      <p className="text-slate-800 font-semibold text-5xl drop-shadow-md">
        Loading..
      </p>
    </div>
  );
}
