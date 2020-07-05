const faunadb = require('faunadb')
const q = faunadb.query;



exports.handler = (event, context) => {
    process.env.FAUNADB_SERVER_SECRET = "fnADvmrqN6ACBhRqBdGQGZ9QrAqk2-m7vlopS97n"

    console.log(process.env.FAUNADB_SERVER_SECRET);
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SERVER_SECRET
    })
    return client.query(
        q.Map(
          q.Paginate(
            q.Match(q.Index("all_albums"))
          ),
          q.Lambda("X", q.Get(q.Var("X")))
        )
    ).then((res) => {
      return {
        statusCode: 200,
        body: JSON.stringify(res.data)
      }
    })
  }