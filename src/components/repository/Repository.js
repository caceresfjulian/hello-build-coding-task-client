import React, { useContext } from "react";
import AuthContext from "../../Context";
import "./repository.css";
import RepoItem from "./RepoItem";

export default function Repository() {
  const { ghUser, ghRepos } = useContext(AuthContext);

  if (Array.isArray(ghRepos)) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h4 className="fw-light repository__title">
          {ghUser.name}'s' repository
        </h4>
        <div className="repository__list row">
          {ghRepos.map((e) => {
            return <RepoItem key={e.id} name={e.name} link={e.html_url} ></RepoItem>;
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Cargando...</h1>;
  }
}
