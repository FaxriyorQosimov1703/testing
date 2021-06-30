import {useEffect, useState} from 'react';
import {doGet} from '../services';
import PostList from './PostList';
import SelectUser from '../SelectUser';
import Postmodal from './Postmodal';

export default function Posts({history}) {
    function filter(userId){
        return data.filter(item=>(item.userId == userId) || userId==='')
 
     }


    const [post, setPost] = useState([]);
    // const [postUsers, setPostUsers] = useState([]);
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [visible, setViseble] = useState(false)

     function openOnePost(id) {
        history.push('/posts/'+id)
    }



    async function getPost() {
        const res = await doGet('/posts');
        setPost(res)
        setData(res)

    }



    function onChangeUser(id) {
        const res = filter(id)
        setPost(res)
    }

    function changeUser(id) {
        setUser(id)
    }

    useEffect(()=>{
        getPost()
    },[])

    function toggleModal(data) {
        console.log(data);
    }
    
    function onvizible() {
        setViseble(prev=>!prev)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <SelectUser onChange={onChangeUser} />
                </div>
           
                <div className="col-md-4">
                <Postmodal isOpen={visible} toggle={onvizible} changeUser={changeUser} className={'modal'} save={toggleModal} />

                </div>
                <div className="col-md-4">
                    <button className="btn btn-dark" onClick={onvizible}>Add</button>
                </div>


            </div>

            <div className="row">
               {
                  post.map((item, index)=>
                      <div  key={index} className="col-md-3">
                      <div className="card my-4 postCard" onClick={()=>openOnePost(item.id)} >
                          <div className="card-header bg-dark text-white">{item.title}</div>
                          <div className="card-body">{item.body}</div>
                      </div>
                      </div>              
                  )
              }
          </div> 
        </div>
    )
}
