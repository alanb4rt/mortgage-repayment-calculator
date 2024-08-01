import { useState } from "react";
import EmptyResult from "./components/EmptyResult";
import Result from "./components/Result";
import IconCalculator from "./assets/images/icon-calculator.svg";

export default function App() {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <button className="btn-reset underline" type="reset">
                    Clear All
                  </button>
                </div>
                <div className="ctn-input">
                  <label htmlFor="amount">Mortgage Amount</label>
                  <div className="ctn-input-content">
                    <div className="input-content-info">£</div>
                    <input type="number" name="amount" id="amount" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="ctn-input">
                    <label htmlFor="term">Mortgage Term</label>
                    <div className="ctn-input-content">
                      <input type="number" name="term" id="term" />
                      <div className="input-content-info">years</div>
                    </div>
                  </div>
                  <div className="ctn-input">
                    <label htmlFor="rate">Interest Rate</label>
                    <div className="ctn-input-content">
                      <input type="number" name="rate" id="rate" />
                      <div className="input-content-info">%</div>
                    </div>
                  </div>
                </div>
                <div className="ctn-input">
                  <fieldset>
                    <legend className="mb-2">Mortgage Type</legend>
                    <label className="ctn-input-radio" htmlFor="repayment">
                      <input
                        type="radio"
                        id="repayment"
                        name="type"
                        value="repayment"
                      />
                      Repayment
                    </label>
                    <label className="ctn-input-radio" htmlFor="interest">
                      <input
                        type="radio"
                        id="interest"
                        name="type"
                        value="interest"
                      />
                      Interest Only
                    </label>
                  </fieldset>
                </div>
                <button
                  className="btn-submit"
                  onClick={() => setShowResult(!showResult)}
                >
                  <img src={IconCalculator} alt="" />
                  Calculate Repayments
                </button>
              </form>
            </div>
            <div className="bg-mySlate-900 text-white p-8 rounded-bl-[4rem]">
              {!showResult ? <EmptyResult /> : <Result />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
