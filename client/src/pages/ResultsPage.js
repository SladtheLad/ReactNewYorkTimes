import React from "react";
import PagePanel from "../components/PagePanel";
import ResultsList from "../components/ResultsList";

const ResultsPage = (props) => (
  <PagePanel name={`Articles`}>
    <ResultsList articles={props.articles} handleSaveArticle={props.handleSaveArticle} />
  </PagePanel>
);

export default ResultsPage;