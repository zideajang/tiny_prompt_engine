import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import PromptDataContext from "../contexts/PromptDataContext";

const PromptCellComp = ()=>{

    const {
        promptComps
    } = useContext(PromptDataContext);

    const [role,useRole] = useState(null);
    const [isShowRole,setIsShowRole] = useState(false);

    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm()

    useEffect(()=>{
        const subscription = watch((value, { name, type }) =>
            {console.log(value, name, type)
            if(name === "Role"){
                console.log(value[name])
                setIsShowRole(value[name]);
                console.log(isShowRole)
            }}
        )
    //   return () => subscription.unsubscribe()
    },[watch])

    return(
        <>
        <div className="grid">
        {promptComps.map(comp=>{
            return (<div className="cell" key={comp.name}>
                <label className="checkbox">
                    <input type="checkbox" {...register(`${comp.name}`)} className="mr-3"/>
                    {comp.name}
                </label>
            </div>)
        })}
        </div>
        </>
    )
}

export default PromptCellComp;