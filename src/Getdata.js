import { useQuery } from 'react-query';
import axios from 'axios';

const Users = () => {
  
  const fetchFromApi = async()=>{
    let response
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {response = data})
      return response
  }
  

  const { status, data, error } = useQuery('listData',fetchFromApi);

  return {
     status,
     data,
     error
  }


}

export default Users;