"use server";

import { collectionNamesObj, dbConnect } from "@/lib/dbConnect";


const cartCollection = dbConnect(collectionNamesObj.CART);

export const handleCart = async productId => {
    // const {user} = await 
}