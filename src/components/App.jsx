import React, { useState } from "react";
import Chirp from "./Chirp";
import Header from "./Header";
import Post from "./Post";
import Username from "./Username";
import Userpic from "./Userpic";
import moment from "moment";
import Date from "./Date";
import { BsFillPersonFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { createRef } from "react";

const App = () => {
  const usernameRef = createRef();
  const userimageRef = createRef();
  const userpostRef = createRef();

  const [userimageInput, setuserImageInput] = useState("");
  const [usernameInput, setuserNameInput] = useState("");
  const [userpostInput, setuserPostInput] = useState("");

  const [chirps, setChirps] = useState([
    {
      imgSrc:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2012/February/120224/88019-femshep.jpg",
      username: "Commander_Shepard",
      post: "I'm Commander Shepard and this is my favorite chirp on the Citadel.",
    },

    {
      imgSrc:
        "https://pbs.twimg.com/profile_images/2988806606/27dc8198814905ae7500745bfcf035ca.jpeg",
      username: "Liara_Tsoni",
      post: "By ThE gOdDeSs! 🗣",
    },

    {
      imgSrc:
        "https://www.giantbomb.com/a/uploads/scale_medium/2/25628/2431870-2431810-me3_garrus_normandy.png",
      username: "Garrus_Vakarian",
      post: "Can this chirp wait a bit? I'm in the middle of some calibrations...",
    },
  ]);

  const getUsername = (e) => {
    setuserNameInput(e.target.value);
  };

  const getUserpicture = (e) => {
    setuserImageInput(e.target.value);
  };

  const getUserpost = (e) => {
    setuserPostInput(e.target.value);
  };

  const addNewChirp = () => {
    let addedChirp = {
      imgSrc: userimageInput,
      username: usernameInput,
      post: userpostInput,
    };

    setChirps([...chirps, addedChirp]);
    setuserImageInput("");
    setuserNameInput("");
    setuserPostInput("");
    usernameRef.current.value = "";
    userimageRef.current.value = "";
    userpostRef.current.value = "";
  };

  const removeChirp = (e) => {
    e.target.parentElement.remove();
  };

  const sendChirps = chirps.map((chirp, index) => {
    return (
      <div className="chrp" onDoubleClick={removeChirp}>
        <Chirp key={index}>
          <div className="left-chirp d-flex justify-content-center align-items-center">
            <Userpic imgSrc={chirp.imgSrc} />
            <Username username={chirp.username} />
            <div className="date">
              <span className="date">
                <Date date={moment().calendar()} />
              </span>
            </div>
          </div>
          <div className="right-chirp mx-4">
            <Post post={chirp.post} />
          </div>
        </Chirp>
      </div>
    );
  });



  return (
    <div className="chirper mb-5">
      <Header account={usernameInput} />
      <div className="container d-flex flex-column justify-content-start align-items-start mt-4">
        <div className="chirper-body">
          <div className="post-title-direction">
            <h4 className="post-title justify-content-end">Chirp Something!</h4>
          </div>
          <div id="chirp-submission">
            <div className="input-group username-area mb-3 w-100">
              <span
                className="input-group-text username-icon"
                id="basic-addon1"
              >
                <BsFillPersonFill />
              </span>
              <input
                type="text"
                className="form-control username-input"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={getUsername}
                ref={usernameRef}
              />
            </div>

            <div className="input-group user-image-area mb-3 w-100">
              <span
                className="input-group-text user-image-icon"
                id="basic-addon1"
              >
                <BsFillEmojiLaughingFill />
              </span>
              <input
                type="text"
                className="form-control user-image-input"
                placeholder="Put image url here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={getUserpicture}
                ref={userimageRef}
              />
            </div>

            <div class="input-group message-area">
              <span class="input-group-text message-icon">
                <BsChatTextFill />
              </span>
              <textarea
                class="form-control"
                placeholder="Write your chirp"
                aria-label="With textarea"
                onChange={getUserpost}
                ref={userpostRef}
              ></textarea>
            </div>
            <div className="submit-btn-area d-flex justify-content-center align-items-center">
              <button
                value="Send Chirp"
                className="btn btn-lg chirp-btn mt-2"
                onClick={addNewChirp}
              >
                Send Chirp
              </button>
            </div>
          </div>

          {sendChirps}
          {/* <Chirp>
            <div className="left-chirp d-flex justify-content-center align-items-center">
              <img
                className="user-pic"
                src="https://previews.123rf.com/images/rido/rido1204/rido120400047/13283722-happy-smiling-guy-showing-thumb-up-hand-sign-isolated-on-white-background.jpg"
                alt=""
              />
              <div className="user-name mx-3">
                @Harry <span className="chirped">chirped</span>{" "}
              </div>
              <div className="date">
                <span className="date">(30 seconds ago):</span>
              </div>
            </div>
            <div className="right-chirp mx-4">
              <div className="user-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est
                dolorem accusamus? Quis, nemo.
              </div>
            </div>
          </Chirp> */}
        </div>
      </div>
    </div>
  );
};

export default App;
