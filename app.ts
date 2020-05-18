import { Application } from 'https://deno.land/x/oak/mod.ts'
import 'https://deno.land/x/dotenv/load.ts'

import router from './router.ts'

const HOST = Deno.env.get('HOST') || '127.0.0.1'
const PORT = Deno.env.get('PORT') || 7700

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)