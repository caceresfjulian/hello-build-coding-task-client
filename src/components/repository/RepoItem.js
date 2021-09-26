import React from "react";
import "./repository.css";

export default function RepoItem(props) {
  return (
    <div className="col-md-3 repository__card bg-light m-2 d-flex flex-column  align-items-center justify-content-center py-5">
      <p className="repository__card__title">{props.name}</p>
      <i className="fa fa-code repository__card__icon" aria-hidden="true"></i>
      <a href={props.link} className="repository__card__link fw-bold">Open</a>
    </div>
  );
}
