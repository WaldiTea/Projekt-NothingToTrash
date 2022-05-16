const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const { userRouter } = require("./routes/user-routes");
const { postsRouter } = require("./routes/posts-router");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));
/* const oneDayInMs = 24 * 60 * 60 * 1000;
const isLocalHost = process.env.FRONTEND_URL === 'http://localhost:3000'; */
app.set('trust proxy', 1);
/* app.use(
  cookieSession({
    name: 'session',
    secret: process.env.COOKIE_SESSION_SECRET,
    httpOnly: true,
    expires: new Date(Date.now() + oneDayInMs),
    sameSite: isLocalHost ? 'lax' : 'none',
    secure: isLocalHost ? false : true,
  })
); */

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (_, res) => {
    res.send("it works :)");
});

app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);

app.listen(PORT, () => console.log("Server ready at", PORT));
