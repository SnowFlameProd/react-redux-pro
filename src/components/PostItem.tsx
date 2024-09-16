import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {postAPI} from "../services/PostService";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    const handleUpdate = () => {
        const title = prompt('Введите новый заголовок поста');
        updatePost({id: post.id, title, body: title} as IPost);
    }
    const handleDelete = () => {
        deletePost(post);
    }

    return (
        <div className="post">
            {post.id}. {post.title}
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostItem;