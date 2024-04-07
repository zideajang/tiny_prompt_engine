import axios from "axios";
import { 
    createContext,
    useState,
    useEffect } from "react";

const PromptDataContext = createContext({});


export const PromptDataProvider = ({children}) => {

    const [message,setMessage] = useState(null);
    const [promptComps,setPromptComps] = useState([]);

    useEffect(()=>{
        const fetchPromptComps = async () =>{
            try{
                const response = await axios.get('/api/v1/promptcomponents');

                setPromptComps(response.data.promptComps)
                // console.log(response.data)
            }catch(error){
                console.error("Error fetching data: ",error);
            }
        }

        fetchPromptComps();
    },[]);
    
    return (
        <PromptDataContext.Provider value={{
            promptComps
        }}>
            {children}
        </PromptDataContext.Provider>
    )
}

export default PromptDataContext;