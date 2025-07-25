const express = require("express")
const router = express.Router()

//get /api/products

router.get('/',(req,res)=>{
    const category = req.query.category
    const sampelData = [
    {id: 1, name: 'phone', category: 'electronic' },
    {id: 2, name: 'shirt', category: 'clothing'}
    ]

    if(category){
        const filtered = sampelData.filter(p => p.category === category)
        res.json(filtered)
    }
    else{
        res.json(sampelData)
    }
})

// get /api/products/id

router.get('/:id',(req,res)=>{
    const productId = req.params.id
    res.json({id: productId, name: `product ${productId}`})
})

//get /api/products/productId/product review

router.get('/:productId/reviews',(req,res)=>{
    const {productId} = req.params
    res.json([
        {reviewId: 1, productId, rating: 5},
        {reviewId: 2, productId, rating: 4}
    ])
})

module.exports = router;