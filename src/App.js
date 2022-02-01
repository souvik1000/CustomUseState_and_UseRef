import "./styles.css";
import { useRef, useState } from "react";
import { useInput } from "./useInput";

export default function App() {
  // const [usenamestate, setUsenamestate] = useState("");
  // const [dobstate, setDOBstate] = useState("");
  const [usenameInput, setUsenameInput] = useInput("");
  const [dobInput, setDOBInput] = useInput("");
  const username = useRef();
  const dob = useRef();

  const submit = (e) => {
    e.preventDefault();
    const usernameVal = username.current.value;
    const dobVal = dob.current.value;
    alert(
      `Using useRef-> Hey ${usernameVal}! Your Date of Birth is ${dobVal}.`
    );
    // alert(`Using useState-> Hey ${usenamestate}! Your DOB is ${dobstate}.`);
    alert(
      `Using custom useState-> Hey ${usenameInput.value}! Your DOB is ${dobInput.value}.`
    );
    username.current.value = "";
    dob.current.value = "";
    // setUsenamestate("");
    // setDOBstate("");
    setUsenameInput("");
    setDOBInput("");
  };

  return (
    <div>
      <form onSubmit={submit} className="mt-3 container">
        <table>
          <tr>
            <td>Your Name:</td>
            <td>
              <input
                className="mx-2 w-100"
                // value={usenamestate}
                {...usenameInput} // then not need to write onChange()
                ref={username}
                type="text"
                // onChange={(e) => setUsenamestate(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>
              <input
                className="mx-2 w-100"
                // value={dobstate}
                {...dobInput} // then not need to write onChange()
                ref={dob}
                type="date"
                // onChange={(e) => setDOBstate(e.target.value)}
              />
            </td>
          </tr>
          <button className="m-2 btn btn-info">Submit</button>
        </table>
      </form>
    </div>
  );
}
