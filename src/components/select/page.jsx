const SelectProduct=({defaultValue,setChanges})=>{
    const list_number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <select className="select-items" onChange={setChanges} defaultValue={defaultValue} >
            {
                list_number.map(item => <option key={item} value={item}>Quantity: {item}</option>)
            }
        </select>
    )
}
export default SelectProduct;