import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <div className="home__container">
            
            <img className="home__image"
            src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg" alt="" />

            <div className="home__row">
             <Product
             id="12321341"
             title='The lean startup'
             price={29.99} 
             image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
             rating={4}  />
            <Product 
             id="49538094"
             title='Kenwood kMix Stand Mixer for Baking,Styling Kitchen mixer with K-beater, Dough Hook and Whisk,5 Litre Glass Bowl'
             price={239.0} 
             image='https://images-na.ssl-images-amazon.com/images/I/41hbQSkaNxL._AC_.jpg'
             rating={5} />
            
            </div>   

            <div className="home__row">
             <Product
             id="49o3850"
             title=" Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
             price={199.99} 
             image='https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY218_.jpg'
             rating={4}
              />
             <Product
             id="23445930"
             title='Amazon Echo (3rd generation) | smart speaker with Alexa, Charcoal Fabric'
             price={98.99} 
             image='https://images-na.ssl-images-amazon.com/images/I/61NqDOhYukL._AC_SL1000_.jpg'
             rating={5} />
             <Product 
             id="3254354345"
             title='New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Genertion)'
             price={598.99} 
             image='https://images-na.ssl-images-amazon.com/images/I/51W2e10l3UL._AC_SL1024_.jpg'
             rating={4}
             />

            </div>

            <div className="home__row">
             <Product 
             id="90829332"
             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
             price={1094.98} 
             image='https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg'
             rating={5}
             
             />
            </div>
            </div> 
        </div>
    )
}

export default Home
