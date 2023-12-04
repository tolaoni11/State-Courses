import React, { useState } from "react";

export default function FormExample() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  console.log(firstname, lastname, email);

  return (
    <form>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
    </form>
  );
}
