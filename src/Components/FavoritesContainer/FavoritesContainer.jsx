import React,{useEffect} from 'react'
import PersonsCard from "../PersonsCard/PersonsCard"
import MyModal from "../Modal/MyModal"
function FavoritesContainer({dcontacts,setdcontacts,showModal,showCardModal,modalUser,setshowModal,setmodalUser,favoriteCheck}) {

    return (
      <> 
    {(dcontacts.filter((item)=>item.favorite==true)).map((item)=>
        
                
                
        <PersonsCard Contacts={item} showCardModal={()=>showCardModal(item)}  favoriteCheck={()=>favoriteCheck(item)}/>
        
    )}

    <MyModal dcontacts={dcontacts} setdcontacts={setdcontacts} showModal={showModal} setshowModal={()=>setshowModal()} modalUser={modalUser} setmodalUser={()=>setmodalUser()}/>
    </>
    )
    
}

export default FavoritesContainer
