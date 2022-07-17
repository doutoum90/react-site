import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  FormEvent,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { CustomError } from "../interfaces/error.interface";
import { User } from "../interfaces/user.interface";
import useAuth from "../hooks/UseAuth";
import { Button, Form } from "react-bootstrap";

const users: User[] = require("../assets/users.json");

export default function Connexion(): JSX.Element {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;
  const from = state?.from?.pathname || "/articles";

  const userRef =
    useRef<HTMLHeadingElement>() as MutableRefObject<HTMLInputElement>;
  const errRef =
    useRef<HTMLHeadingElement>() as MutableRefObject<HTMLInputElement>;

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => userRef.current?.focus(), []);

  useEffect(() => setErrMsg(""), [user, pwd]);

  if (auth?.name) {
    navigate(from);
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await getUser(user, pwd);
      setAuth(response);
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (error) {
      const err = error as CustomError;
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };
  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Authentification</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="username">Nom d'utilisateur:</Form.Label>
            <Form.Control
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="mdp">Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <Button variant="primary" type="submit">
              Se connecter
            </Button>
          </Form.Group>
        </Form>
        <p>
          Besoins d'un compte?
          <br />
          <span className="line">
            <Link to="/inscription">Inscription</Link>
          </span>
        </p>
      </section>
    </>
  );
}

export async function getUser(
  username: string,
  password: string
): Promise<User | undefined> {
  const selectedUser: User | undefined = await users.find(
    (user: User) => user.username === username && user.password === password
  );

  return selectedUser
    ? {
        ...selectedUser,
        /* accessToken: "accessTokenaccessToken",
        roles: ["admin", "eerjhrje"], */
      }
    : selectedUser;
}
