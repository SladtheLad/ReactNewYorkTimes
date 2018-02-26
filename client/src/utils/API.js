import axios from "axios";

export default {
    getNytArticles: (search) => {
        return axios.post("/api/nytsearch", search);
    },

    saveArticle: (article) => {
        return axios.post("/api/articles", article);
    },

    getSavedArticles: () => {
        return axios.get("/api/articles");
    },

    deleteSavedArticle: (id) => {
        return axios.delete(`/api/articles/${id}`);
    }
}