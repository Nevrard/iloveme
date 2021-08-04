import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation addUser($username:String!, $email:String!, $password:String!){
    addUser(username: $username, email: $email, password:$password ){
      user{
        username
      }
    }
  }
`;

export const CREATE_HABIT = gql`
  mutation addHabit($name:String, $rating:String){
    addHabit(name:$name, rating:$rating){
      _id
      username
      habits{
        name
      }
    }
  }
`;

export const CREATE_MOOD = gql`
  mutation addMood($description:String, $rating:String){
    addMood(description:$description, rating:$rating){
      _id
      username
      moods{
        description
      }
    }
  }
`

