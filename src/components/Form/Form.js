import Input from "../Input/Input"
import RadioButton from '../RadioButton/RadioButton'
import s from './Form.module.css'


const Form = () => {
    return (
        <>
            <form className={s.form}>
                <div className={s.inputText}>
                    <label>
                        <Input
                            type={"name"}
                            placeholder={"Your name"}/>
                        <Input
                            type={"email"}
                            placeholder={"Email"}/>
                        <Input
                            type={"phone"}  
                            placeholder={"Phone"}/>
                    </label>
                    <p className={s.examplePhone}>+38 (XXX) XXX - XX - XX</p>
                </div>

                <p className={s.radioTitle}>Select your position</p>
                <div className={s.radioButton}>
                    <label className={s.labelRadio}>
                        <RadioButton
                            type={"radio"}
                            name={"position"}
                            value={"Frontend developer"}
                            checked={false}/>
                        Frontend developer
                    </label>
                    <label className={s.labelRadio}>
                        <RadioButton
                            type={"radio"}
                            name={"position"}
                            value={"Backend developer"}
                            checked={false}/>
                        Backend developer
                    </label>
                    <label className={s.labelRadio}>
                        <RadioButton
                            type={"radio"}
                            name={"position"}
                            value={"Desiner"}
                            checked={false}/>
                        Desiner
                    </label>
                    <label className={s.labelRadio}>
                        <RadioButton
                            type={"radio"}
                            name={"position"}
                            value={"QA"}
                            checked={false}/>
                        QA
                    </label> 
                </div>
                <div className={s.uploadPhoto}>
                    <label className={s.uploadPhotoLabel}>
                        <button className={s.btnUpload}>
                            Upload
                        </button>
                        <input className={s.inputUpload}
                            type={"upload"}  
                            placeholder={"Upload your photo"}/>
                    </label>
                </div>
            </form>
        </>
            
    )
}

export default Form