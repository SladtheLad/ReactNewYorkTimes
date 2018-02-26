import React from "react";

const ArticleListItem = (props) => (
  <li className="list-group-item">
    <a target="_blank" href={props.article.web_url || props.article.url}><h4>{props.article.snippet || props.article.title}</h4></a>
    {props.article._id ?
      <button
        onClick={() => props.handleDeleteSavedArticle(props.article._id)}
        className="btn btn-danger btn-lg"
      >Delete</button>
      :
      <button
        onClick={() => props.handleSaveArticle(props.article)}
        className="btn btn-success btn-lg"
      >Save</button>}
  </li>
);

export default ArticleListItem;