const express=require('express')
const router=express.Router()
const ProductInfo=require('../Controllers/Products.controller')
const getProducts=ProductInfo.getProducts
const getFilters=ProductInfo.getFilters
const getProductByBrand=ProductInfo.getProductByBrandName
const Product =require( '../Models/Products.model')
const Filter =require( '../Models/Filter.model')
router.route('/').get(getProducts)
router.route('/filters').get(getFilters)
router.route('/:brand').get(getProductByBrand)










/*for saving details of products
router.post('/',(req,res,next)=>{
    const product=new Product({
		"landingPageUrl": "Watches/Daniel-Klein/Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5/2466435/buy",
		"productId": 2466435,
		"product": "Daniel Klein Women Black Analogue Watch DK11421-5",
		"productName": "Daniel Klein Women Black Analogue Watch DK11421-5",
		"rating": 4.1847577,
		"ratingCount": 2598,
		"discount": 2625,
		"brand": "Daniel Klein",
		"searchImage": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg",
		"effectiveDiscountPercentageAfterTax": 65,
		"effectiveDiscountAmountAfterTax": 2423,
		"inventoryInfo": [{
			"skuId": 15601164,
			"label": "Onesize",
			"inventory": 610,
			"available": true
		}],
		"sizes": "Onesize",
		"images": [{
			"view": "default",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg"
		}, {
			"view": "search",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg"
		}, {
			"view": "top",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/5a51798e-0e4d-480d-b9ed-bdfcc30e22b51526878966366-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-6.jpg"
		}, {
			"view": "left",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/314e6bcc-c0ae-408a-b3a8-8a31b2f337d51526878966390-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-5.jpg"
		}, {
			"view": "back",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/368417e0-6013-4b48-ae5b-619cc2f467581526878966440-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-3.jpg"
		}, {
			"view": "right",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/150476b5-b06a-466c-a7c6-4767ea8f2a061526878966418-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-4.jpg"
		}, {
			"view": "front",
			"src": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/09caaa2f-c6ec-4fc2-812b-f97976f820431526878966463-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-2.jpg"
		}],
		"gender": "Women",
		"primaryColour": "Black",
		"discountLabel": "Flat_Search_Percent",
		"discountDisplayLabel": "(70% OFF)",
		"additionalInfo": "Women Analogue Watch",
		"category": "Watches",
		"mrp": 3750,
		"price": 1125,
		"colorVariantAvailable": false,
		"discountType": "1",
		"catalogDate": "1520467200000",
		"season": "Winter",
		"year": "2017",
		"systemAttributes": []
	}
    )

    product.save();
})
router.post('/filters',async(req,res)=>{
    const filters=new Filter({
        "Gender":["Men","Women","Boys","Girls"],
        "Categories":["TShirts","Kurtas","Jeans","Trousers","Sareers","Dresses"],
        "Brand":["RoadStar","Puma","Max","DressBerry"],
        "Price":["Rs. 50 to Rs. 36518","Rs. 36518 to Rs. 72986"]
    })

    filters.save();

})*/
module.exports=router;