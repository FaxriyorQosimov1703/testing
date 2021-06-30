import {useEffect, useState} from 'react';
import {doGet} from '../services'

export default function OnePostPages({history, match, location }) {
    const [post, setPost] = useState('');
    const [postUser, setPostUser] = useState('')

    useEffect(()=> {
        getOnePost(match.params.id)
    })

    async function getOnePost(id) {
        const onePost = await doGet('/posts/'+id)
        setPost(onePost)
        const oneUser = await doGet('/users/'+onePost.userId)
        setPostUser(oneUser)
    }
    return (
        <div>
           <div className="row">
               <div className="col-md-3">
                   <div className="card">
                       <div className="card-header">{postUser.name}</div>
                       <div className="card-body">{postUser.phone}</div>
                   </div>
               </div>
               <div className="col-md-9">
                    <div className="card">
                        <div className="card-header">{ post.id + '. ' + post.title}</div>
                        <div className="card-body">{post.body}</div>
                    </div>
               </div>
           </div>
        </div>
    )
}
