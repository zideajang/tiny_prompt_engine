import {useForm} from "react-hook-form"
import {PromptDataProvider} from "../contexts/PromptDataContext";

import PromptCellComp from "../components/PromptCellComp";

const PromptEditorPage = ()=>{
    const {
        register,
        handleSubmit,
        watch,
        setValue 
      } = useForm();

    return (
      <PromptDataProvider>
        <div>
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds">
                <div className="field">
                  <div className="control">
                    <label className="label">描述任务(task)</label>
                    <textarea
                      name="input"
                      className="textarea"
                      {...register("response")}
                      placeholder="输入提示语"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="column">
                <PromptCellComp/>
              </div>
            </div>
          </div>
        </div>
      </PromptDataProvider>
    );
}

export default PromptEditorPage;