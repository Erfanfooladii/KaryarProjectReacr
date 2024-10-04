const ImageProduct=({mainData,cartData})=>{
    return(
        <div className="image-product">
            <img src={mainData.image_link || cartData[0]?.image_link} alt={`image ${mainData.name || cartData[0]?.name}`} />
        </div>
    )
}
export default ImageProduct;