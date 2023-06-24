import { useState, useEffect } from "react";
import Comment from "./Comment";
import AddCommentContainer from "./AddCommentsContainer";
import data from "./data.json"

function App() {

const {image, username } = data.currentUser;

const commentsArray = data.comments;
console.log(commentsArray)


  return (
      <main>
        {data.comments.map(data => (
           <Comment key = {data.id} info={data}/>
        ))}
        <AddCommentContainer />
      </main>
    
  );
}

export default App;
