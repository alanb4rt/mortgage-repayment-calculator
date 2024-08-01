export default function App() {
  return (
    <>
      <main className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <form>
              <h1>Mortgage Calculator</h1>
              <button>Clear All</button>
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
              <button>Calculate Repayments</button>
            </form>
          </div>
          {/* <!-- Empty results start --> */}
          <div>
            <h2>Results shown</h2>
            <p>
              here Complete the form and click “calculate repayments” to see
              what your monthly repayments would be.
            </p>
          </div>
          {/* <!-- Empty results end --> */}
          {/* <!-- Completed results start --> */}
          <div>
            <h2>Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <div>
              <p>Your monthly repayments</p>
              X,XXX,XXX
            </div>
            <div>
              <p>Total you'll repay over the term</p>
              X,XXX,XXX
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
