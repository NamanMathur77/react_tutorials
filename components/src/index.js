import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return(
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                author="Sam" 
                time="Today 2:00PM" 
                image={faker.image.avatar()} 
                comment="Nice post"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                time="Today 1:00AM" 
                image={faker.image.avatar()} 
                comment="Nice post"
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Ram" 
                time="Yesterday 7:00PM" 
                image={faker.image.avatar()} 
                comment="Nice post"
            />
        </ApprovalCard>
        </div>
        

    );
};

ReactDOM.render(<App/>,
    document.querySelector("#root")
    );