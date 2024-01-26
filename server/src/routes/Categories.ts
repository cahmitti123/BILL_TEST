import {Router} from 'express'

export const CategoryRoute = Router()

CategoryRoute.get('/', (req,res,next) => {
    // My Magical Logic Will Sit Here Owww !! 
    res.status(201).send([
        {
            id:1,
            label: 'Category_1',
            description:'Magical category description'
        },
        {
            id:2,
            label: 'Category_2',
            description:'Magical category description'
        },
        {
            id:3,
            label: 'Category_3',
            description:'Magical category description'
        },
    ])
})