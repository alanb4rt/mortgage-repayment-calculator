import IconEmpty from "../assets/images/illustration-empty.svg";

export default function EmptyResult() {
  return (
    <>
      <div className="flex flex-col justify-center gap-2 h-full text-center">
        <img className="mx-auto" src={IconEmpty} alt="Illustration" />
        <h2 className="text-2xl font-bold">Results shown here</h2>
        <p className="text-mySlate-500">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </>
  );
}
