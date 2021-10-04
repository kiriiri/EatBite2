const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'EatBite',
    password: 'Kiri2018',
    port: 5432,
  })
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })

export default client;