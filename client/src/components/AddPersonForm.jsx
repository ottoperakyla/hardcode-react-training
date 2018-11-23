import React from "react";
import { Formik } from "formik";
import uuid from "uuid";
import Button from "./Button";
import random from "../services/random";

const AddPersonForm = props => {
  return (
    <Formik
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki",
        birthDay: "1961-01-01"
      }}
      onSubmit={values => {
        const person = {
          ...values,
          id: uuid(),
          gender: random.pick(["m", "f"]),
          handedness: random.pick(["l", "r"]),
          salary: random.integer(500, 1000),
          age: random.integer(10, 60),
          email: "gaylord.lohiposki@dr-kobros.com",
          relatedToCEO: random.bool()
        };

        props.hirePerson(person);
      }}
    >
      {renderProps => {
        const { handleSubmit, handleChange, values } = renderProps;

        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="firstName">Last name</label>
              <input
                type="text"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="firstName">Birthday</label>
              <input
                type="text"
                id="birthDay"
                value={values.birthDay}
                onChange={handleChange}
              />
            </div>

            <Button type="submit">Add person</Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPersonForm;
