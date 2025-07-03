import Card from "./Card";

const Theme6 = ({setAttributes,attributes,isBacked}) => {
    const {productsInfo}=attributes;
    

    
    return (
        <div className="productInfoCards">
           

            {/* {productsInfo.map(((item)) => {
                 <Card />
                
            })} */}
            {
                productsInfo.map((item,index)=><Card key={index} item={item} index={index} attributes={attributes} setAttributes={setAttributes} isBacked={isBacked} />)
            }

           
            
        </div>
    );
};

export default Theme6;