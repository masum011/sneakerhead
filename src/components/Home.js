import { React, useState } from "react";
import "./home.css";
const ToggleForm = () => {
  // const [login, setlogin] = useState(true);
  const [card, setcard] = useState(false);
  // const [joinlottery, setjoinlottery] = useState(true);

  const [inputtext, setinputtext] = useState({
    first_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [logintext, setlogintext] = useState({
    username: "",
    userpassword: "",
  });

  const [passtype, setpasstype] = useState("password");

  const [passnone, setpassnone] = useState(true);
  const [warnnone, setwarnnone] = useState(true);

  const [conftype, setconftype] = useState("password");

  const [usertype, setusertype] = useState("password");

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "password") {
      if (value.length > 0) {
        setpassnone(false);
      } else {
        setpassnone(true);
      }
    }

    if (name === "confirm_password") {
      if (value.length > 0) {
        setwarnnone(false);
      } else {
        setwarnnone(true);
      }
    }
    setinputtext((lastvalue) => {
      return {
        ...lastvalue,
        [name]: value,
      };
    });
  };

  const JoinLottery = () => {
    if (card) {
      setcard(false);
    } else {
      setcard(true);
    }
  };

  let tiitle =
    " Let's get you all set up so you can verify your personal account.";
  return (
    <>
      <div className="container">
        <div className={`card ${card ? "active" : " "}`}>
          <div className="user signup_form">
            <div className="image_box">
              <img
                src="https://i.ibb.co/R0Y8T8r/nike19.png"
                alt="cover"
              />
            </div>

            <div className="form">
              <h3>Register</h3>
              <p>{tiitle}</p>

              <form>
                <div className="input_div">
                  <div className="input_text">
                    <input
                      type="text"
                      value={inputtext.first_name}
                      name="first_name"
                      onChange={inputEvent}
                    />
                    <span>First Name</span>
                  </div>
                  <div className="input_text">
                    <input type="text" />
                    <span>Last Name</span>
                  </div>
                </div>
                <div className="input_div">
                  <div className="input_text">
                    <input
                      type="text"
                      value={inputtext.phone}
                      name="phone"
                      onChange={inputEvent}
                    />
                    <span>Phone Number</span>
                  </div>
                  <div className="input_text">
                    <input
                      type="text"
                      value={inputtext.email}
                      name="email"
                      onChange={inputEvent}
                    />
                    <span>Email</span>
                  </div>
                </div>
                <div className="input_div">
                  <div className="input_text">
                    <input
                      type={passtype}
                      value={inputtext.password}
                      name="password"
                      onChange={inputEvent}
                    />
                    <span>Password</span>
                  </div>
                  <div className="input_text">
                    <input
                      type={conftype}
                      value={inputtext.confirm_password}
                      name="confirm_password"
                      onChange={inputEvent}
                    />
                    <span>Confirm Password</span>
                  </div>
                </div>
                <div className="button">
                  <button type="submit">Create Account</button>
                  <h4>
                    Already have an account?{" "}
                    <a href="#" onClick={JoinLottery}>
                      Log in
                    </a>
                  </h4>
                </div>
              </form>
            </div>
          </div>

          <div className="user signin_form">
            <div className="image_box">
              <img
                src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/nike-shoes-streetwear-nike-art-prem-vishal.jpg"
                alt="cover"
              />
            </div>
            <div className="form">
              <h3>Login</h3>
              <h4>Login to your account</h4>
              <p>{tiitle}</p>

              <form>
                <div className="input_text">
                  <input
                    type="text"
                    placeholder="Email or phone number"
                    name="username"
                    value={logintext.username}
                    // onChange={loginEvent}
                  />
                  <span>Username</span>
                </div>
                <div className="input_text">
                  <input
                    type={usertype}
                    placeholder="Password"
                    value={logintext.userpassword}
                    name="userpassword"
                    // onChange={loginEvent}
                  />
                  <span>Password</span>
                </div>

                <div className="sign_in">
                  <button type="submit">Sign in</button>
                </div>
              </form>

              <div className="create-account">
                <span>
                  Don't have account yet? <br />
                  <a href="#" onClick={JoinLottery}>
                    Create Account
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToggleForm;
