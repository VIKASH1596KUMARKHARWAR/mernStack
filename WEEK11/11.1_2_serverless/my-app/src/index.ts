import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  try {
    // Check if the content-type is JSON before parsing
    if (c.req.header('Content-Type') === 'application/json') {
      const body = await c.req.json()
      console.log('Body:', body)
    } else {
      console.log('No JSON body found.')
    } 

    // Log other details
    console.log('Authorization Header:', c.req.header('Authorization'))
    console.log('Query Parameter (param):', c.req.query('param'))

    return c.text('Hello Hono!')
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return c.text('Error: Invalid JSON input', 400)
  }
})

export default app
