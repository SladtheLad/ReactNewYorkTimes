import React, { Component } from "react";
import Header from "../components/Header";
import SavedArticlesPage from "./SavedArticlesPage";
import API from "../utils/API.js";

class Saved extends Component {
  state = {
    search: {
      topic: "",
      start_date: "",
      end_date: ""
    },
    articles: [],
    savedArticles: [],
    error: "",
    success: ""
  }

  componentDidMount() {
    API.getSavedArticles().then(res => this.setState({ savedArticles: res.data }));
  }

  handleSaveArticle = (article) => {
    API.saveArticle(article).then(res => {
      if (!res.data.error) {
        this.setState({ savedArticles: [...this.state.savedArticles, res.data], error: "" });
      } else {
        this.setState({ error: res.data.error });
      }
    });
  }

  handleDeleteSavedArticle = (id) => {
    API.deleteSavedArticle(id).then(res => {
      if (res.data.success) {
        this.setState({
          savedArticles: this.state.savedArticles.filter(article => article._id !== id),
          success: "Successfully Deleted Article!"
        });
      } else {
        this.setState({ error: res.data.error, success: "" })
      }
    });
  }



  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          {this.state.success ? <h1 className="alert alert-success">{this.state.success}</h1> : false}
          <SavedArticlesPage savedArticles={this.state.savedArticles} handleDeleteSavedArticle={this.handleDeleteSavedArticle} />
        </div>
      </div>
    )
  }


}

export default Saved;