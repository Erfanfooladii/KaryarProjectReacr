import { Outlet } from "react-router-dom"

const ContianerSinglePage=()=>{
    return(
        <div className="conatiner">
            <Outlet/>
        </div>
    )
}
export default ContianerSinglePage;