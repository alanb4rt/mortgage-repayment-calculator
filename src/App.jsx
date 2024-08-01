import { useState } from "react";
import EmptyResult from "./components/EmptyResult";
import Result from "./components/Result";

export default function App() {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold text-mySlate-900">
                Mortgage Calculator
              </h1>
              <button type="reset">Clear All</button>
              <div>
                <label htmlFor="amount">Mortgage Amount</label>
                <input type="number" name="amount" id="amount" />
              </div>
              <div>
                <label htmlFor="term">Mortgage Term</label>
                <input type="number" name="term" id="term" />
              </div>
              <div>
                <label htmlFor="rate">Interest Rate</label>
                <input type="number" name="rate" id="rate" />
              </div>
              <div>
                <label>Mortgage Type</label>
                <div>
                  <input
                    type="radio"
                    id="repayment"
                    name="type"
                    value="repayment"
                  />
                  <label htmlFor="repayment">Repayment</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="interest"
                    name="type"
                    value="interest"
                  />
                  <label htmlFor="interest">Interest Only</label>
                </div>
              </div>
              <button onClick={() => setShowResult(!showResult)}>
                Calculate Repayments
              </button>
            </form>
          </div>
          <div>{!showResult ? <EmptyResult /> : <Result />}</div>
        </div>
      </main>
    </>
  );
}
