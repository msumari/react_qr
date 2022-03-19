import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import app from "./firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Creator() {
  const [id, setID] = useState("");
  // const db = getFirestore(app);
  // try {
  //   const docRef = await addDoc(collection(db, "Pork"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815,
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  //   setID(docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  return (
    <div className="">
      <h1>This is the creator part</h1>
      <Formik
        initialValues={{ owner: "", location: "", weight: 0, status: "Piglet" }}
        validate={(values) => {
          const errors = {};
          if (!values.owner) {
            errors.owner = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.owner = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="owner" />
            <ErrorMessage name="owner" component="div" />
            <Field type="text" name="location" />
            <ErrorMessage name="location" component="div" />
            <Field type="number" name="weight" />
            <Field as="select" name="status">
              <option value="Piglet">Piglet</option>
              <option value="Onsale">Sale</option>
              <option value="Slaughtered">Slaught</option>
            </Field>
            <ErrorMessage name="weight" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Creator;
