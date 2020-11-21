import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faClock } from "@fortawesome/free-solid-svg-icons";

function Nav({ setLibraryStatus, libraryStatus, timeStatus, setTimeStatus }) {
  return (
    <nav>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className={`nav-library`}
      >
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
      <h1>altay</h1>
      <button onClick={() => setTimeStatus(!timeStatus)} className={`nav-time`}>
        Timer <FontAwesomeIcon icon={faClock} />
      </button>
    </nav>
  );
}

export default Nav;
