const userList = require("../dataList");
const userModel = require("../model/userModel");

//-------- With Out Database use-------------
const resolvers = {
    Query: {
        users() {
            return userList
        },
        getUserId(parent, args) {
            const userId = args.id
            let userData = userList.find(val => val.id.toString().includes(userId))
            return userData
        },

        //------------- user DataBase --------------
        findUserDataBase: async () => {
            let data = await userModel.find({})
            console.log(data);
            return data
        },
    },
    Mutation: {
        userSignUp: async (parent, args) => {
            let data = await userModel.create(args.input)
            return data
        },
        updateUserDetails: async (parent, args) => {
            const { id, name, lastName, mobileNo, gender } = args.input
            let data = await userModel.findByIdAndUpdate(
                { _id: id },
                {
                    $set:{
                        name:name,
                        lastName:lastName,
                        mobileNo:mobileNo,
                        gender:gender
                    }
                },
                {new:true}
            )
            return data
        }
    }
}

module.exports = {
    resolvers
}