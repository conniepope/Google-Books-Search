import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
// import { List } from "../components/List/";
import API from "../utils/API";

class SearchPage extends Component {
    state = {
        books: [],
        title: "",
    };

    // getBooks = () => {
    //   console.log("getBooks" + this.state.title);
    //   API.getBooks(this.state.title)
    //     .then(res =>
    //       this.setState({ 
    //         books: res.data
    //     }) 
    //     )
    //     .catch(() => {
    //       console.log("Could not find a book by this name. Please try again.")

    //       this.setState({
    //         books: [],
    //       });           

    //     })
    // };

    // searchBooks = title => {
    //   API.search(title)
      
    //     .then(res => 
    //       {console.log(title);
    //       this.setState({ books: res.data.data })})
    //     .catch(err => console.log(err));
    // };
    
    handleInputChange = event => {
      const { name, value } = event.target;
      // console.log("handleInputChange" + value)
      this.setState({
        [name]: value
      });
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
      console.log("handleFormSubmit" + this.state.title)
      if (this.state.title) {
          API.getBooks(this.state.title)
          .then(res => {this.setState({ books: res.data });
          // console.log(res.data)
          console.log(this.state.books)
        })
        .catch(err => console.log(err)); 
      }
    }
    
  

    render() {
        return (
            <div className="container">
                <Search 
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  title={this.state.title}>
                </Search>


                <h4>Results</h4>
                {console.log("results", this.state.books.length)}
                {this.state.books.length ? (
                  <Results>
                  {console.log("list", this.state.books)}
                    {this.state.books.map(book => (
                      <div>
                      key={book.id},
                      title={book.volumeInfo.title},
                      authors={book.volumeInfo.authors},
                      description={book.volumeInfo.description},
                      image={book.volumeInfo.imageLinks.thumbnail},
                      link={book.volumeInfo.infoLink}
                      </div>
                      ))}
                      </Results>
                ) : (
                <h4>No Results to Display</h4>
                )}
            </div>
                
        );
    }
}

export default SearchPage;