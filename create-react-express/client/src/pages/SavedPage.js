import React, { Component } from "react";
import Saved from "../components/Saved";
import API from "../utils/API";
import { Link } from "react-router-dom";

class SavedPage extends Component {
    state = {
        book: [],
    };

    componentDidMount() {
        API.getBook(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
            <h1>Saved Books</h1>
            {this.state.books.length ? (
                <Saved>
                {this.state.books.map(book => (
                    <Link to={"/books/" + book._id}>
                    </Link>
                ))}
                </Saved>

            ) : (
              <h3>No Results to Display</h3>
            )}
                
            </div>
        )
    };
}

export default SavedPage;