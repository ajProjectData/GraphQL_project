const {gql} = require("apollo-server");

const typeDefs = gql`
    type userSchema{
        id:ID!
        name:String!
        lastName:String
        email:String!
        password:String!
        mobileNo:String!
        gender:String
    }
    type User{
        id:ID!
        name:String!,
        age:String!,
        friend:[User!]
    }

    input userRegister{
        name:String!
        email:String!
        password:String!
    }
    input updateUserData{
        id:ID!
        name:String
        lastName:String
        email:String
        password:String
        mobileNo:String
        gender:String
    }

    type Mutation{
        userSignUp(input:userRegister!):userSchema
        updateUserDetails(input:updateUserData!):userSchema
    }

    type Query{
        users:[User!]
        getUserId(id:ID!):User
        findUserDataBase:[userSchema!]
    }
`


module.exports = {
    typeDefs
}
