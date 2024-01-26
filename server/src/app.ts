import express from "express"
import dotenv from 'dotenv'
import { MagicalRoute } from "./routes/MagicalRoutes"
import { ItemRoute } from "./routes/Items"
import { CategoryRoute } from "./routes/Categories"

const app = express()
dotenv.config()

app.use((req,res,next)=>{
    console.log("Yes i'm working as expected ")
    next()
})

const port = process.env.PORT! || 5000

app.use("/magic",MagicalRoute)
app.use("/item",ItemRoute)
app.use("/category",CategoryRoute)


app.get('/', (req, res,next) => {
    res.status(201).send("Hello Baby, I'm Fucking Aliiive!!!! XD")
})

app.listen(port, () => {
    console.log(
        `Shhht quiet, i'm listening to port ${port}`
    )
})