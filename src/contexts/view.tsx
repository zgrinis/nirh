import { createContext, useContext, useState } from "react";
import { views } from "../views";

type ViewContext = {
    view:View['alias'],
    setView:React.Dispatch<React.SetStateAction<View['alias']>>
}

const ViewContext = createContext<ViewContext>({} as ViewContext);
export function ViewContextProvider({children}:React.PropsWithChildren){

    const [view,setView] = useState<View['alias']>(()=>{
        const initialView:View = views.find(({initial}:View)=>initial)
        return initialView?.alias
    })

    return <ViewContext.Provider value={{view,setView}}>
        {children}
    </ViewContext.Provider>
}

export const useViewContext = () => useContext<ViewContext>(ViewContext);