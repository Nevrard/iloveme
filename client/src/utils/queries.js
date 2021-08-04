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
{
moodByDate {
      description
      rating
      date
    }
  }
  `

export const QUERY_MOOD_DESCRIPTION = gql`
{
  moodByDate {
    mood {
      description
=======
export const QUERY_MOOD = gql`
  query mood($id: ID!, $date: String!) {
    meById(_id: $id)  {
      mood(date: $date) {
        rating
      }

