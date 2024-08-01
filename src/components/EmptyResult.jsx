import IconEmpty from "../assets/images/illustration-empty.svg";

export default function EmptyResult() {
  return (
    <>
      <div className="text-center">
        <img className="mx-auto" src={IconEmpty} alt="Illustration" />
        <h2 className="text-2xl font-bold">Results shown here</h2>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </>
  );
}
