import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

const dbz = []

servidor.get('/dragonball', (req, res) => {
    res.send(dbz)
})

servidor.post('/dragonball', (req, res) => {
    const personagen = req.body
   dbz.push(personagen)

    res.send('Dragon Ball cadastrado!')
})

servidor.listen(3000, () => {console.log('deu bom')})
