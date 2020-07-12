export default function mySort(defualtContacts)
{
function compare_item(a, b){
    if(a.lastname.toLowerCase() < b.lastname.toLowerCase()){
            return -1;
    }else if(a.lastname.toLowerCase() > b.lastname.toLowerCase()){
            return 1;
    }else{
            return 0;
    }
  }
  let contacts=defualtContacts.sort(compare_item);
  return contacts
}