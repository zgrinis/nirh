import './logo.scss';
import { useViewContext } from "../../contexts/view"

export function Logo(){
    const {view} = useViewContext();
    if (view === 'home') return null;

    return <div className="logo">
        Žygimantas <br /> Grinis
    </div>
}