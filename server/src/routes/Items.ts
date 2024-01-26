import {Router} from 'express'

export const ItemRoute = Router()

ItemRoute.get('/', (req, res,next) => {
    // Magical Logic Here
    res.status(201).send([
        {"id": 1, "label": "item_1", "quantity":4, "PU":3,"isAv":true,"description":"this is a magical description"},
        {"id": 2, "label": "item_2", "quantity":18, "PU":67,"isAv":false,"description":"this is a magical description"},
        {"id": 3, "label": "item_3", "quantity":34, "PU":34,"isAv":true,"description":"this is a magical description"},
        {"id": 4, "label": "item_4", "quantity":4, "PU":3,"isAv":false,"description":"this is a magical description"},
        {"id": 5, "label": "item_5", "quantity":109, "PU":15,"isAv":false,"description":"this is a magical description"},
        {"id": 6, "label": "item_6", "quantity":2, "PU":2,"isAv":true,"description":"this is a magical description"},

    ])
}

)