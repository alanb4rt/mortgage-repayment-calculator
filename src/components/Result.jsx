export default function Result() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div>
          <p>Your monthly repayments</p>
          £X,XXX,XXX
        </div>
        <div>
          <p>Total you'll repay over the term</p>
          £X,XXX,XXX
        </div>
      </div>
    </>
  );
}
