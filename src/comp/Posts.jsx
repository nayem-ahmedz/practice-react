import { use } from 'react';
import Post from './Post';

export default function Posts({postsPromise}){
    const posts = use(postsPromise);
    return(
        <div>
            <h2>All Posts</h2>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
}