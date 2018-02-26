import React from "react";
import PagePanel from "../components/PagePanel";
import ResultsList from "../components/ResultsList";

const SavedArticlesPage = (props) => (
  <PagePanel name={"Saved Articles"}>
    <ResultsList articles={props.savedArticles} handleDeleteSavedArticle={props.handleDeleteSavedArticle} loading={true} />
  </PagePanel>
)

export default SavedArticlesPage;