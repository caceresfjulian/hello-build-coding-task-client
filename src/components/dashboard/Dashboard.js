import React, { useContext, useState } from "react";
import "./dashboard.css";
import animatedGithub from "./animated-github.gif";
import AuthContext from "../../Context";
import Repository from "../repository/Repository";

export default function Dashboard() {
  const { ghUser, ghRepos } = useContext(AuthContext);

  const [filteredRepos, setFilteredRepos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filterOn, setFilterOn] = useState(false);


  function filterRepos(e) {
    setFilteredRepos(
      ghRepos.filter((repo) => repo.name.indexOf(searchTerm) !== -1)
    );
    setSearchTerm("");
    setFilterOn(!filterOn);
  }

  if (ghUser !== undefined) {
    return (
      <div className="dashboard container">
        <div className="dashboard__header">
          <div className="dashboard__header__main">
            <img
              src={ghUser.avatar_url}
              alt="Avatar"
              className="dashboard__profile-pic"
            />
            <h1 className="fw-light d-inline">
              Welcome{" "}
              <span className="fst-italic dashboard__name">
                @{ghUser.login}
              </span>
            </h1>
          </div>
          <div className="d-flex">
            <input
              className="form-control dashboard__search-box"
              placeholder="Search"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button
              className="btn dashboard__filter__btn"
              onClick={(e) => filterRepos(e)}
            >
              {filterOn ? <>Reset</> : <>Filter</>}
            </button>
          </div>
        </div>
        {filterOn ? (
          <Repository repos={filteredRepos}  />
        ) : (
          <Repository repos={ghRepos}  />
        )}
      </div>
    );
  } else {
    return (
      <div className="github">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`}
        >
          <div className="github-box bg-light">
            <h2 className="fst-italic">Click here</h2>
            <img
              src={animatedGithub}
              className="github-animation"
              alt="Github animated"
            />
            <h4 className="fw-light">
              to get your <span className="fw-bold">GitHub's </span> profile
              info
            </h4>
          </div>
        </a>
      </div>
    );
  }
}
