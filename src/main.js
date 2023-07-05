import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ref } from "vue";
import axios from "axios";

const nume = ref("");
const prenume = ref("");
const dataDeNastere = ref("");
const comentariu = ref("");

async function formSubmit() {
  try {
    const response = await axios.post("http://laravel.test/forms", {
      nume: nume.value,
      prenume: prenume.value,
      data_de_nastere: dataDeNastere.value,
      comentariu: comentariu.value,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  console.log("in functia de trimitere");
}

export { nume, prenume, dataDeNastere, comentariu, formSubmit };
createApp(App).mount('#app')