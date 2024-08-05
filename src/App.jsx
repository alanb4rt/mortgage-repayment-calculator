import { useEffect, useState } from "react";
import FormInput from "./components/FormInput";
import EmptyResult from "./components/EmptyResult";
import Result from "./components/Result";
import IconCalculator from "./assets/images/icon-calculator.svg";

export default function App() {
  const initialValues = {
    amount: "",
    term: "",
    rate: "",
    type: "",
  };
  const [myInputs, setMyInputs] = useState({ ...initialValues });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMyInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setMortgage();
    setMyInputs({ ...initialValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    calculateMortgage(
      myInputs.amount,
      myInputs.term,
      myInputs.rate,
      myInputs.type
    );
  };

  const [mortgage, setMortgage] = useState();

  const calculateMortgage = (amount, term, interest, type) => {
    const monthlyInterestRate = interest / 1200;
    const numberOfPayments = term * 12;

    let monthlyPayment, totalRepayment;

    switch (type) {
      case "repayment":
        monthlyPayment =
          (amount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        totalRepayment = monthlyPayment * numberOfPayments;
        break;
      case "interest-only":
        monthlyPayment = amount * monthlyInterestRate;
        totalRepayment = monthlyPayment * numberOfPayments;
        break;
      default:
        console.error("Invalid mortgage type");
        return;
    }

    const currencyFormatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    });

    const formattedMonthlyTotal = currencyFormatter.format(monthlyPayment);
    const formattedTotal = currencyFormatter.format(totalRepayment);

    setMortgage({
      monthlyPayment: formattedMonthlyTotal,
      totalRepayment: formattedTotal,
    });
  };

  return (
    <>
      <main className="container mx-auto">
        <div className="grid place-content-center h-screen">
          <div className="grid grid-cols-2 bg-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-4">
                  <h1 className="text-2xl font-bold text-mySlate-900">
                    Mortgage Calculator
                  </h1>
                  <button
                    className="btn-reset underline"
                    type="reset"
                    onClick={handleReset}
                  >
                    Clear All
                  </button>
                </div>
                <div className="ctn-input">
                  <label htmlFor="amount">Mortgage Amount</label>
                  <div className="ctn-input-content">
                    <div className="input-content-info">£</div>
                    <FormInput
                      type="number"
                      name="amount"
                      value={myInputs.amount}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="ctn-input">
                    <label htmlFor="term">Mortgage Term</label>
                    <div className="ctn-input-content">
                      <FormInput
                        type="number"
                        name="term"
                        value={myInputs.term}
                        handleInputChange={handleInputChange}
                      />
                      <div className="input-content-info">years</div>
                    </div>
                  </div>
                  <div className="ctn-input">
                    <label htmlFor="rate">Interest Rate</label>
                    <div className="ctn-input-content">
                      <FormInput
                        type="number"
                        name="rate"
                        value={myInputs.rate}
                        handleInputChange={handleInputChange}
                      />
                      <div className="input-content-info">%</div>
                    </div>
                  </div>
                </div>
                <div className="ctn-input">
                  <fieldset>
                    <legend className="mb-2">Mortgage Type</legend>
                    <label className="ctn-input-radio" htmlFor="repayment">
                      <FormInput
                        id="repayment"
                        type="radio"
                        name="type"
                        value="repayment"
                        handleInputChange={handleInputChange}
                      />
                      Repayment
                    </label>
                    <label className="ctn-input-radio" htmlFor="interest-only">
                      <FormInput
                        id="interest-only"
                        type="radio"
                        name="type"
                        value="interest-only"
                        handleInputChange={handleInputChange}
                      />
                      Interest Only
                    </label>
                  </fieldset>
                </div>
                <button className="btn-submit">
                  <img src={IconCalculator} alt="" />
                  Calculate Repayments
                </button>
              </form>
            </div>
            <div className="bg-mySlate-900 text-white p-8 rounded-bl-[4rem]">
              {!mortgage ? <EmptyResult /> : <Result price={mortgage} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
