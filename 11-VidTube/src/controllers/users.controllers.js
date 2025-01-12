import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  deleteFromCloudinary,
  uploadFilesonCloudinary,
} from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  // Vallidation
  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const isThisUserExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (isThisUserExist) {
    throw new ApiError(
      404,
      "User with this username or email is already exist"
    );
  }

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  console.log(avatarLocalPath, coverImageLocalPath);

  let avatar;
  try {
    avatar = await uploadFilesonCloudinary(avatarLocalPath);
    console.log("Uploaded avatar", avatar);
  } catch (error) {
    console.log("Error while uploading avatar", error);
    throw new ApiError(500, "Failed to upload avatar");
  }

  let coverImage;
  try {
    coverImage = await uploadFilesonCloudinary(coverImageLocalPath);
    console.log("Uploaded coverImage", coverImage);
  } catch (error) {
    console.log("Error while uploading coverImage", error);
    throw new ApiError(500, "Failed to upload coverImage");
  }

  try {
    // Construct a user
    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });

    // Select all the data of user, but not the password and refreshToken
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong wjile registering a user");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (error) {
    console.log("User creation failed");
    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a user and images are deleted"
    );
  }
});

export { registerUser };
