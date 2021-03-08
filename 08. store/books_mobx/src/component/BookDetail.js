import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

@inject("BookStore")
@observer
class BookDetail extends Component {
    render() {
        const {book} = this.props.BookStore;

        return (
            <div>
                <Card>
                    <Image src={ book.imgUrl } wrapped ui={ false } />
                    <Card.Content>
                        <Card.Header>{ book.title }</Card.Header>
                        <Card.Meta>
                            <span className='date'>{ book.author } &nbsp; { book.publisher }</span>
                            <span className='date'>{ book.price }</span>
                        </Card.Meta>
                        <Card.Description>
                            { book.introduce }
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default BookDetail;