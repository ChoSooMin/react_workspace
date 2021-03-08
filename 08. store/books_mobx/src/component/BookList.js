import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import BookItem from './BookItem';

@inject("BookStore")
@observer
class BookList extends Component {
    render() {
        const { books, bookSelect } = this.props.BookStore;
        const listItems = books.map((book) => {
            return (
                <BookItem key={ book.ISBN } book={ book } bookSelect={ bookSelect } />
            );
        });
        return (
            <Item.Group>
                { listItems }
            </Item.Group>
        );
    }
}

export default BookList;