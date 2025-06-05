import {v2 as cloudinary } from "cloudinary"
import fs from "fs";

cloudinary.config({
  cloud_name:'name',
  api_key:'key',
  api_secret:'secret',  
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload.upload(localFilePath,{
      resource_type : "auto",
    })
    //fu=ile has been uploaded successfully
    console.log("File is uploaded on cloudinary",response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temp. file as the uploaded operation failed
    return null;    
  }
}

export {uploadOnCloudinary};