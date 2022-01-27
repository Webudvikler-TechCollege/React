import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CommentListItem } from '../CommentListItem/CommentListItem';
import { getAuthData, postAuthData, deleteAuthData } from '../../../helpers/fetch'
import { AppContext } from '../../../context/ContextProvider'


export const CommentSection = () => {

    const { loginData } = useContext(AppContext)
    const { productId } = useParams();
    const [commentData, setCommentData] = useState();
    const [comment, setComment] = useState('');
    const [title, setTitle] = useState('');

    const getComments = async () => {
        let key = loginData.access_token;
        let url = `https://api.mediehuset.net/bakeonline/comments/${productId}`;
        const result = await getAuthData(url, key);
        result.items.reverse();
        setCommentData(result.items);
    }

    const submitComment = async(e) => {

        if(comment.length > 0 && title.length > 0) {
            e.preventDefault();
            let url = `https://api.mediehuset.net/bakeonline/comments`;
            let formData = new FormData();
            let key = loginData.access_token;
            formData.append('title', title);
            formData.append('comment', comment);
            formData.append('user_id', loginData.user_id);
            formData.append('product_id', productId);
            formData.append('active', true);

            let result = await postAuthData(url, key, formData);
            console.log(result);
            setTitle('');
            setComment('');
            getComments('');
        } else {
            e.preventDefault();
        }
    }

    const deleteComment = async(id) => {
        let key = loginData.access_token;
        let url = `https://api.mediehuset.net/bakeonline/comments/${id}`;
        let res = await deleteAuthData(url, key);
        console.log(res);
        getComments();
    }

    useEffect(() => {
        if(loginData.username && !commentData) {
            getComments();
        }
        return null;
    })

    return (
        loginData.username ?         
            <>
                <h2>Kommentarer</h2>

                <form>
                    <div>
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}  name="title" placeholder="Emne" />
                    </div>
                    <div>
                        <textarea type="text" value={comment} onChange={(e) => {setComment(e.target.value)}}  name="comment" placeholder="Kommentar" />
                    </div>
                    <div className="buttonpanel">
                        <button type="button" onClick={(e) => submitComment(e)}>Indsend kommentar</button>
                    </div>
                </form>

                <section>
                {commentData && commentData.map((item, i) => {
                    return (
                        <CommentListItem key={item.id}  data={item} loginData={loginData} delete={deleteComment} />
                    )
                })}
                </section>
            </>
        : 
        <h3>Du skal logge ind for at kommentere</h3>
    )
}