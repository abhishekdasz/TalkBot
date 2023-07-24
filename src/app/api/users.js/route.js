import jwt  from "jsonwebtoken";
import dbConnect from "@/utils/dbConn";
import UserInfo  from '@/models/userInfo'
import { NextResponse } from 'next/server';


export async function GET(request) 
{
    try 
    {
        await dbConnect();
        const userId = await getUserDataFromToken(request);
        const user = await UserInfo.findOne({_id: userId}).select("-password");
        return NextResponse.json(
            { message: 'user found', data: user }
        )
    }
    catch(error)
    {
        return NextResponse.json(
            { error: error.message },
            { status: 400 }, 
        )
    }
}

const getUserDataFromToken = async (request) => {
    try
    {
        const token = request.cookies.get('token').value || '';
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decodedToken.id;
    }
    catch(error)
    {
        throw new Error(error.message);
    }
}



