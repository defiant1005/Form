"use strict"
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        

        if(error===0) {
            alert("Клиент успешно создан");
            form.classList.add("_sending");
            form.reset();
            form.classList.remove("_sending");
            if (response.ok){
                form.reset();
                form.classList.remove("_sending");
                alert("Клиент успешно создан");
            }else {
                alert("Ошибка");
                form.classList.remove("_sending");
            }
        }else {
            alert("Заполните обязательные поля"); 
        }
    }

    function formValidate(form) {
        let error = 0; 
        let formReq = document.querySelectorAll("._req");
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]; 
            formRemoveError(input);
            if(input.value === "") {
                formAddError(input);
                error++;
            }
        }
        return error; 
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }
});
