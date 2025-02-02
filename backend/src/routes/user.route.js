import { Router } from "express";
import { loginUser, logoutUser, signupUser, refreshAccessToken, changeCurrentPassword, updateUserAvatar } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/signup").post(
    upload.single("avatar"),
    signupUser
    )
router.route("/login").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/logout").get(verifyJWT, logoutUser)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

export default router