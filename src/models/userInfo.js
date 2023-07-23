import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })

const UserInfo = mongoose.models.UserInfo || mongoose.model('UserInfo', userInfoSchema)

export default UserInfo;