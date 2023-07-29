
let response = (
    {
    "sub": "google-oauth2|113525695039403033662",
    "given_name": "Cliff",
    "family_name": "Weng",
    "nickname": "weng.cliff",
    "name": "Cliff Weng",
    "picture": "https://lh3.googleusercontent.com/a/AAcHTtcuWufI9ClAXmSm48cTBA9n9TtLabYYjYJQBwmeF5SneyX0=s96-c",
    "locale": "en",
    "updated_at": "2023-07-28T23:23:39.341Z"
    }
)
export default function handler(req, res) {
    (async () => {
      try {
        res.status(200).json(response)
      } catch (err) {
        console.error("error executing query:", err);
        res.status(200).json(err);
      } finally {
      }
    })();
      
  }
