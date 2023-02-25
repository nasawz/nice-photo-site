import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL;
const NS = process.env.NS;
const DB = process.env.DB;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    let sql = `select count() from auth where username='${username}' GROUP BY ALL`;
    console.log(sql);

    const countRes = await axios({
      method: "post",
      baseURL: BASE_URL,
      auth: {
        username: USERNAME,
        password: PASSWORD,
      },
      headers: {
        NS: NS,
        DB: DB,
        Accept: "application/json",
      },
      url: `sql`,
      data: sql,
    });
    if (countRes.data[0].result.length > 0) {
      return res.status(500).json({ error: "用户名已存在" });
    } else {
      try {
        const signupRes = await axios({
          method: "post",
          baseURL: BASE_URL,
          headers: {
            NS: NS,
            DB: DB,
            Accept: "application/json",
          },
          url: `signup`,
          data: {
            NS: NS,
            DB: DB,
            SC: "everyone",
            username,
            password,
          },
        });
        return res.status(200).json({ message: "注册成功" });
      } catch (error) {
        return res.status(500).json({ error: "非法请求" });
      }
    }
  }
  return res.status(500).json({ error: "非法请求" });
}
