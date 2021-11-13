import React, { useState } from "react";
import { createRoutine } from "../api";
import { getToken, getUser } from "../auth";
import "./NewRoutine.css";

const NewRoutineForm = ({ setAllRoutine, allRoutine }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="new-Routine-component-main-container">
      <form
        id="newRoutineSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const token = getToken();
            const user = getUser();
            console.log(token, user, "!!!!!!!!");
            const createNewRoutine = await createRoutine(title, description);
            setAllRoutine([createNewRoutine, ...allRoutine]);
            console.log("button works");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h2>Create Routine Here</h2>
        <fieldset className="auth-component_input">
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </fieldset>

        <fieldset className="auth-component_input">
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>

        <button type="submit" id="newRoutineSubmit">
          Submit Routine
        </button>
      </form>
    </div>
  );
};

export default NewRoutineForm;
