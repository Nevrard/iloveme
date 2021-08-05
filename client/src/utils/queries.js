import { gql } from '@apollo/client';


export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      moods {
        description
        rating
        date
      }
      habits{
        name
        rating
        date
      }
    }
  }
`

export const QUERY_MOOD = gql`
query moodByDateById($date:String, $id:String){
  moodByDateById(date:$date, id:$id){
    moods{
      rating
    }
  }
}
`
