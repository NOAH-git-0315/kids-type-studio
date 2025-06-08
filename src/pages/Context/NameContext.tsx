import { createContext,useState } from "react";

type MynameContextType = {
  Myname: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const MynameText = createContext<MynameContextType>({
  Myname: "ゲスト",
  setName: () => {},
});

export default function MynameTextProvider({ children }: { children: React.ReactNode }){
    const [Myname,setName] = useState("ゲスト");
    return(
        <MynameText.Provider value={{Myname,setName}}>
            {children}
        </MynameText.Provider>
    )
}