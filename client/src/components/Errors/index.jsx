/* eslint-disable react/prop-types */
export default function Errors({ errors }) {
  return (
    <p className="text-red-600 font-bold text-2xl h-48 flex items-center justify-center uppercase">
      {errors}
    </p>
  );
}
