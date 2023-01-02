import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AUTH_API } from '../utils/Constant';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVaild, setIsVaild] = useState(false);
  const [isEmailVaild, setEmailIsVaild] = useState(false);
  const [isPasswordVaild, setPasswordIsVaild] = useState(false);

  const getEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3,4}$/i;
    const inputEmail = e.target.value;
    if (!emailRegex.test(inputEmail)) {
      setEmail("이메일 형식이 잘못되었습니다");
      setEmailIsVaild(false);
    } else {
      setEmail("올바른 이메일입니다.");
      setEmailIsVaild(true);
    }
  };

  const getPassword = (e) => {
    const inputPassword = e.target.value;
    if (inputPassword.length >= 8) {
      console.log("good");
      setPasswordIsVaild(true);
      setPassword(inputPassword);
    } else {
      setPasswordIsVaild(false);
    }
  };
  const signUp = (e) => {
    e.preventDefault();
    return axios
      .post(AUTH_API + "create", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (isEmailVaild && isPasswordVaild) setIsVaild(true);
    else setIsVaild(false);
  }, [isEmailVaild, isPasswordVaild]);
  return (
    <form>
      <label>Email</label>
      <input type="email" name="email" id="" onChange={getEmail} />
      <p>{email}</p>
      <label>Password</label>
      <input type="password" name="password" id="" onChange={getPassword} />
      <p>{password}</p>
      {isVaild ? (
        <button onClick={signUp}>회원가입</button>
      ) : (
        <button disabled>회원가입</button>
      )}
    </form>
  );
};

export default Signup;