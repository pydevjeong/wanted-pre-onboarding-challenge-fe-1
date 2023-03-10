import React, { useEffect, useState } from "react";
import { LOGIN_API } from "../utils/API";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [password, setPassword] = useState("");
  const [isVaild, setIsVaild] = useState(false);
  const [isEmailVaild, setEmailIsVaild] = useState(false);
  const [isPasswordVaild, setPasswordIsVaild] = useState(false);
  const navigate = useNavigate();

  const getEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3,4}$/i;
    const inputEmail = e.target.value;
    if (!emailRegex.test(inputEmail)) {
      setEmailMsg("이메일 형식이 잘못되었습니다");
      setEmailIsVaild(false);
    } else {
      setEmailMsg("올바른 이메일입니다.");
      setEmail(inputEmail);
      setEmailIsVaild(true);
    }
  };

  const getPassword = (e) => {
    const inputPassword = e.target.value;
    if (inputPassword.length >= 8) {
      setPasswordIsVaild(true);
      setPassword(inputPassword);
    } else {
      setPasswordIsVaild(false);
    }
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    const userEmail = email.trim();
    const userPw = password.trim();
    await LOGIN_API.post("/users/login", {
      email: userEmail,
      password: userPw,
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          return navigate("/todos");
        }
      })
      .catch(() => alert('정보가 맞지 않습니다.'));
  };

  useEffect(() => {
    if (isEmailVaild && isPasswordVaild) setIsVaild(true);
    else setIsVaild(false);
  }, [isEmailVaild, isPasswordVaild]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="grid place-items-center">
          <img
            className="w-72 h-72"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=826&t=st=1672749639~exp=1672750239~hmac=358f377758f4b52b69f6fc9162c97d70f3c060fcf71c6c572dd6d202bd96e6c2"
            alt=""
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login
        </h2>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label>Email</label>
              <input
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                type="email"
                name="email"
                id="email"
                onChange={getEmail}
              />
              <p>{emailMsg}</p>
            </div>
            <div>
              <label>Password</label>
              <input
                className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                type="password"
                name="password"
                id="password"
                onChange={getPassword}
              />
            </div>
            <div>
              {isVaild ? (
                <button
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={loginHandler}
                >
                  로그인
                </button>
              ) : (
                <button
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled
                >
                  입력값을 모두 입력해주세요
                </button>
              )}
            </div>
          </div>
        </form>
        <Link
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          to="/create"
        >
          회원가입
        </Link>
        <Link
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          to="/"
        >
          홈으로가기
        </Link>
      </div>
    </div>
  );
};

export default Login;
