
export default function handler(req, res) {
    (async () => {
      try {
        const body = req.body
        // Guard clause checks for first and last name,
        // and returns early if they are not found
        if (!body.first || !body.last) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ data: 'First or last name not found' })
        }
        
        // Found the name.
        // Sends a HTTP success code
        res.status(200).json({ data: `${body.first} ${body.last}` })

      } catch (err) {
        console.error("error executing query:", err);
        res.status(200).json(err);
      } finally {
      }
    })();
      
  }