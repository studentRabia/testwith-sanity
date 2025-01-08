import React from 'react'

const CommentBox = () => {
  return (
    <div>
        <h1>Comment Box</h1>
        <p>Leave a comment below</p>
        <form>
         <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
         </div>
         <div>
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment"/>
         </div>
         <button type="submit">Submit</button>
        </form>
    
    
    </div>
    
  )
}

export default CommentBox
