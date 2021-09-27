import React from "react";
import "./repository.css";

export default function RepoItem({name}) {
  return (
    <div className="col-md-3 repository__card bg-light m-2 d-flex flex-column  align-items-center justify-content-center py-5">
      <p className="repository__card__title">{name}</p>
      <i class="fa fa-code repository__card__icon" aria-hidden="true"></i>
    </div>
  );
}
