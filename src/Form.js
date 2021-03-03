import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [FormData, setFormData] = useState({});
  const url =
    "https://us-east4-frapp-prod.cloudfunctions.net/dumdum-brand-details";

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.error(`Error : ${error}`));
  };

  return (
    <>
      {Object.keys(FormData).length !== 0 ? (
        <>
          <div className="form-style-10">
            <h1>
              Futwork<span></span>
            </h1>
            <form>
              <div className="section">
                <span>1</span>General Information
              </div>
              <div className="inner-wrap">
                <label>
                  Identificaton Number
                  <input type="text" name="field1" value={FormData.id} />
                </label>
                <label>
                  Start Date
                  <input
                    type="datetime"
                    name="field1"
                    value={FormData.startDate}
                  />
                </label>
                <label>
                  End Date
                  <input
                    type="datetime"
                    name="field1"
                    value={FormData.endDate}
                  />
                </label>
                <label>
                  Title
                  <input type="text" name="field1" value={FormData.title} />
                </label>
                <label>
                  Description
                  <input
                    type="text"
                    name="field1"
                    value={FormData.description}
                  />
                </label>
              </div>

              <div className="section">
                <span>2</span>KYC Documents
              </div>
              <div className="inner-wrap">
                <label>
                  {FormData.kycDocs[0].title}
                  <input
                    type="url"
                    name="field3"
                    value={FormData.kycDocs[0].url}
                  />
                </label>
                <label>
                  {FormData.kycDocs[1].title}
                  <input
                    type="url"
                    name="field4"
                    value={FormData.kycDocs[1].url}
                  />
                </label>
              </div>

              <div className="section">
                <span>3</span>Organisation Type
              </div>
              <div className="inner-wrap">
                <label>{FormData.organizationType.title}</label>

                {FormData.organizationType.options.map((val, idx) => (
                  <label key={val.optionVal}>
                    <input type="radio" name="organisation" />
                    {val.optionText}
                  </label>
                ))}
              </div>
            </form>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Form;
