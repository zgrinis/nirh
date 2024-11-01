import { useViewContext } from "../../contexts/view"

export function ViewContacts(){
    const {setView} = useViewContext();
    return <div className="view-contacts text-white">
        <div className="container">
            <div>phone:</div>
            <div>email:</div>

            <a href="#home" onClick={()=>{setView('home')}}>Go home</a>
        </div>
    </div>
}