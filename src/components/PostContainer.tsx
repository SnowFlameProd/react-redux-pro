import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);
    const [createPost, {}] = postAPI.useCreatePostMutation();

    const handleCreate = async () => {
        const title = prompt('Введите заголовок поста');
        await createPost({title, body: title} as IPost);
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Создать пост</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};

export default PostContainer;