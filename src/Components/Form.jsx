import React from 'react'
import './Form.css'
import { useState } from 'react'


const Form = () => {
  let [error,setError] = useState("");
  let [sendedClass,setSendedClass] = useState("not-sended")
  function submit(e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    let objectData = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      coment: formData.get("coment")
    }
    if (formValidotor(objectData).succesed) {
      setSendedClass('sended')
      setTimeout(() => {
        setSendedClass('not-sended')
      },2000)
      document.querySelectorAll("form input").forEach(element => {
        element.value = ""
      });
    }
  }

  function formValidotor(data) {
    let rtr = {message: "",succesed: true};
    if (data.name.length == 0) {
      rtr.message += "Ad daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    else if (data.name[0].toUpperCase() != data.name[0]) {
      rtr.message += "Ad böyük hərf ilə başlamalıdır. \n"
      rtr.succesed = false
    }
    if (data.surname.length == 0) {
      rtr.message += "Soyad daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    else if (data.surname[0].toUpperCase() != data.surname[0]) {
      rtr.message += "Soyad böyük hərf ilə başlamalıdır\n"
      rtr.succesed = false
    }
    if (String(data.phone).length == 0) {
      rtr.message += "Telefon nömrəsi daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    else if (String(data.phone)[0] != "0") {
      rtr.message += "Telefon nomrəsi düzgün daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    else if (String(data.phone).length != 10) {
      rtr.message += "Telefon nomrəsi düzgün daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    if (data.email == '') {
      rtr.message += "E-mail daxil edilməmişdir. \n"
      rtr.succesed = false
    }
    setError(rtr.message)
    return rtr;
  }
  return (
    <div className='Form'>
      <form onSubmit={submit}>
        <label htmlFor="name">Ad</label>
        <input type="text" id="name" name='name' />
        <label htmlFor="surname">Soyad</label>
        <input type="text" id="surname" name='surname' />
        <label htmlFor="phone">Telefon</label>
        <input type="number" id="phone" name = 'phone' />
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name = 'email'/>
        <label htmlFor="coment">Şərh</label>
        <textarea  id="coment" rows = "4" name = 'coment' />
        <button>Göndər</button>
        <div className="alert">
          {error}
        </div>
      </form>
      <div className={sendedClass}>
          <p>Anket göndərildi</p>
      </div>
    </div>
  )
}

export default Form
