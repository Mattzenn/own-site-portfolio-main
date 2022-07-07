import { useFormWithValidation } from '../utils/useFormWithValidation';
import React from "react";
import Script from 'next/script';


function Request({  }) {

    // отправка данных для запроса

    const { values, errors, isValid, handleChange } = useFormWithValidation();

    function handleSubmit1(evt) {
        evt.preventDefault();
    }

    return (
        <div className='request'>
            <div className='request-page'>
                <form className='request__form'>
                    <div className='request__form-script'>
                        <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script><iframe src="https://forms.yandex.ru/u/62b0844556e9a6017f983b5f/?iframe=1" frameborder="0" name="ya-form-62b0844556e9a6017f983b5f" width="100%"></iframe>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Request;