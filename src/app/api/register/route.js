import UserInfo from "@/models/userInfo";
import {NextResponse} from "next/server";
import dbConnect from "@/utils/dbConn";
import bcryptjs from 'bcryptjs';

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        const { username, email, phone, password } = body;

        const userInfo = await UserInfo.findOne({ email });

        if(userInfo)
        {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            )
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new UserInfo({
            username,
            email,
            phone,
            password: hashedPassword
        })
        await UserInfo.create(newUser);

        return NextResponse.json(
            { message:"Data saved successfully!"}, 
            { status: 200}
        )

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}