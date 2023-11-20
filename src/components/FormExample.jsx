import React, { useState } from "react";

export default function FormExample() {
  const [firstname, setFirstname] = useState("Tola");
  const [lastname, setLastname] = useState("Oni");
  const [email, setEmail] = useState("yahoo");

  return (
    <form>
      <p>
        <label>
          First Name:
          <input type="text" name="firstname" value={firstname} />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input type="text" name="lastname" value={lastname} />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input type="text" name="email" value={email} />
        </label>
      </p>
    </form>
  );
}
