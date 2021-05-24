import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>WARNING</h4>
                    Honkity honk honk
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name='Sam'
                    timeAgo='Today at 2:54 PM'
                    comment={Faker.lorem.sentence()}
                    pfp={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name='Jon'
                    timeAgo='Today at 9:00 AM'
                    comment={Faker.lorem.sentence()}
                    pfp={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name='Joe'
                    timeAgo='Yesterday at 8:47 PM'
                    comment={Faker.lorem.sentence()}
                    pfp={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
