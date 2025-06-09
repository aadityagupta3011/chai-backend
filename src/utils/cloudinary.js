import {v2 as cloudinary } from "cloudinary"
import fs from "fs";

cloudinary.config({
  cloud_name:'dvxftpcom',
  api_key:'428731746282345',
  api_secret:'nX3-TDiGy_0gDeiPI7EcpqJwa3I',  
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type : "auto",
    })
    //fu=ile has been uploaded successfully
    // console.log("File is uploaded on cloudinary",response.url);
    fs.unlinkSync(localFilePath)
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temp. file as the uploaded operation failed
    return null;    
  }
}

export {uploadOnCloudinary};