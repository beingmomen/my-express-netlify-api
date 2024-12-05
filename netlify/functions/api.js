const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// تعريف المسارات
router.get("/hello", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use("/api", router);

// تصدير الوظيفة
module.exports.handler = serverless(app);
