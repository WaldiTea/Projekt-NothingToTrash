
const express = require("express")

const { body } = require('express-validator');

const { UserService } = require("../use-cases");
const { doValidations } = require("../facade/doValidations");
const { doAuthMiddleware } = require("../auth/doAuthMiddleware");

const userRouter = express.Router()

userRouter.get("/all", doAuthMiddleware, async (_, res) => {
    try {
        const allUsers = await UserService.listAllUsers()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while loading all users." } })
    }
})

userRouter.get("/myProfileInfo", doAuthMiddleware, async (req, res) => {
    try {
        const userId = req.userClaims.sub
        const allUsers = await UserService.showProfileInfo({ userId })
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while loading your profile." } })
    }
})

userRouter.get("/profile/:username", doAuthMiddleware, async (req, res) => {
    try {
        const username = req.params.username
        const allUsers = await UserService.showUser({ username })
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while loading profile." } })
    }
})

userRouter.post("/login",
    body("username").isLength({ min: 1 }),
    body("password").isStrongPassword(),
    doValidations,
    async (req, res) => {
        try {
            const result = await UserService.loginUser({
                username: req.body.username,
                password: req.body.password
            })

            if(result.refreshToken) {
                req.session.refreshToken = result.refreshToken
            }
            
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while logging in." } })
        }
    }
)

userRouter.post("/refreshtoken",
    async (req, res) => {
        try {
            const result = await UserService.refreshUserToken({
                refreshToken: req.session.refreshToken || req.body.refreshToken
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while refreshing your token." } })
        }
    }
)

userRouter.post("/register",
    body("username").isLength({ min: 1, max: 25 }),
    body("email").isEmail(),
    body("password").isStrongPassword(),
    doValidations,
    async (req, res) => {
        try {
            const userInfo = req.body
            const result = await UserService.registerUser(userInfo)

            res.status(201).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while registering a new account." } })
        }
    }
)

userRouter.post("/verifyEmail", 
    body("email").isEmail(),
    body("sixDigitCode").isLength({ min: 6 }),
    doValidations,
    async (req, res) => {
        try {
            const email = req.body.email
            const sixDigitCode = req.body.sixDigitCode
            const result = await UserService.verifyUserEmail({ email, sixDigitCode })

            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while verifiying your email." } })
        }
    }
)

module.exports = {
    userRouter
}