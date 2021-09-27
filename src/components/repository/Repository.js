import React, {useContext} from "react";
import AuthContext from "../../Context";
import "./repository.css";
import RepoItem from "./RepoItem";

export default function Repository({repos, addFav}) {
  const { ghUser } = useContext(AuthContext);

  if (Array.isArray(repos)) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h4 className="fw-light repository__title">
        {ghUser.name}'s' repository
        </h4>
        <div className="repository__list row">
          {repos.map((e) => {
            return <RepoItem key={e.id} name={e.name} addFav={addFav} id={e.id} ></RepoItem>;
          })}
        </div>
      </div>
    );
  } else {
    return <h1 className="fw-light text-center">Cargando...</h1>;
  }
}
