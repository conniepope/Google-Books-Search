import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import API from "../utils/API";
import { Link } from "react-router-dom";

class SearchPage extends Component {
    state = {
        books: [],
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    };

    // componentDidMount() {
    //     this.loadBooks();
    //   }
    
    //   loadBooks = () => {
    //     API.getBooks()
    //       .then(res =>
    //         this.setState({ 
    //         books: res.data, 
    //         title: "", 
    //         authors: [],
    //         description: "",
    //         image: "",
    //         link: ""})
    //       )
    //       .catch(err => console.log(err));
    //   };

      searchBooks = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };
    
      // not sure what this one is for
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.authors) {
            API.getBooks({
                title: this.state.title,
                authors: this.state.authors,
                description: this.state.description,
                image: this.state.image,
                link: this.state.link
            })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container">
                <Search>
                </Search>

                <h1>Results</h1>
                {this.state.books.length ? (
                    <Results>
                    {this.state.books.map(book => (
                        <Link to={"/books/" + book._id}>
                        </Link>
                    ))}
                    </Results>

                ) : (
                <h3>No Results to Display</h3>
                )}
            </div>
                
        );
    }
}

export default SearchPage;