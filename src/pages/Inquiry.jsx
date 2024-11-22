import React, { useState } from 'react'
import '../styles/Inquiry.css';


function Inquiry() {
  const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);

    // 글 입력 처리
    const handleInputChange = (event) => {
        setPost(event.target.value);
    };

    // 글 제출 처리
    const handleSubmit = (event) => {
        event.preventDefault();
        if (post.trim() !== '') {
            setPosts([...posts, post]);
            setPost('');
        }
    };

    return (
        <div className='container'>
          <br/><br/>
            <h1> 건의사항 </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={post}
                    onChange={handleInputChange}
                    placeholder="글을 입력하세요..."
                />
                <br/><br/>
                <button type="submit">글 작성</button>
            </form>
            <div>
              <br/><br/><br/><br/>
                {posts.map((item, index) => (
                    <div key={index} className="post">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inquiry