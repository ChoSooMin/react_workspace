import Books from '../Books';
import { makeObservable, observable, action } from 'mobx';

// react 객체가 아니라 mobx 객체!!
class BookStore {
    // @observable은 관찰 대상이 되는 값
    @observable books = Books;
    @observable book = Books[0];

    constructor() {
        makeObservable(this);
    }

    @action // 이벤트가 발생해서 변경해야 할 부분(데이터를 변경시킬 부분)이 있을 경우  = 데이터들을 변경시킬 메소드를 작성 (이전에는 this.setState를 사용해 데이터를 바꿔줬다)
    bookSelect = (book) => {
        this.book = book;
    };

    // @computed는 값을 조작해서 정보를 return해주는 역할을 한다.
}

export default new BookStore(); // 단순히 export default BookStore를 하면 되는게 아니라 export default new BookStore()를 해야한다. (Singleton 패턴)