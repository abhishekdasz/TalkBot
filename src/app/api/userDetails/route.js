import UserInfo  from '@/models/userInfo'
import dbConnect from "@/utils/dbConn";
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextResponse } from 'next/server';


export async function GET(request) 
{
    try 
    {
        await dbConnect();
        const userId = await getDataFromToken(request);
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