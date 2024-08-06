export default function Result({ price }) {
  const { monthlyPayment, totalRepayment } = price;

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Your results</h2>
        <p className="text-mySlate-500">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div className="flex flex-col gap-8 p-8 mt-4 bg-black/25 rounded-lg border-t-4 border-primary">
          <div className="flex flex-col gap-2">
            <p className="text-mySlate-500">Your monthly repayments</p>
            <span className="text-4xl font-bold text-primary truncate sm:text-5xl">
              {monthlyPayment}
            </span>
          </div>
          <hr className="opacity-20" />
          <div className="flex flex-col gap-2">
            <p className="text-mySlate-500">Total you'll repay over the term</p>
            <span className="text-2xl truncate">{totalRepayment}</span>
          </div>
        </div>
      </div>
    </>
  );
}
