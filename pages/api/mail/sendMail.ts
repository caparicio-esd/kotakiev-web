import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Express-like http controller...
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        res.send({ hola: 'joooorl...' })
    } else {
        res.send({ hola: 'jarl...' })
    }
}
