const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

(async () => {
  await client.connect();
})();

export default function handler(req, res) {
  (async () => {
    try {
      const results = await client.query("select json_agg(students) FROM students");
      //const results = await client.query("SELECT NOW()");
      //console.log(results);
      res.status(200).json(results.rows[0].json_agg)
    } catch (err) {
      console.error("error executing query:", err);
      res.status(200).json(err);
    } finally {
      // client.end();
    }
  })();
    
}
