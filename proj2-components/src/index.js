import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Sam" timeAgo="Today at 2:54 PM" comment={Faker.lorem.sentence()} pfp={Faker.image.avatar()}/>
      <CommentDetail name="Jon" timeAgo="Today at 9:00 AM" comment={Faker.lorem.sentence()} pfp={Faker.image.avatar()}/>
      <CommentDetail name="Joe" timeAgo="Yesterday at 8:47 PM" comment={Faker.lorem.sentence()} pfp={Faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));