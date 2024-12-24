import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // 이메일 값이 변경되어 컴포넌트가 재실행될 때마다 유효성 검증
  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    // 이벤트 관리 로직
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value, // 속성명에 대괄호[] 지정, value 직접적 지정
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
