<template>
  <div class="home">
    <section>
      <div class="form">
        <div class="logo">
          <img class="animate__animated animate__tada animate__delay-2s animate__infinite animate__slow" src="./../assets/logo.png" alt="To-Do App">
        </div>
        <form @submit.prevent="login">
          <label for="user"><b>Correo Electrónico</b></label>
          <input type="email" placeholder="Ingresa tu correo electrónico" name="email" id="email" v-model="email" required>
          <label for="password"><b>Contraseña</b></label>
          <input type="password" placeholder="Ingresa tu contraseña" name="password" id="password" v-model="password" required>
          <button type="submit">Ingresar</button>
          <a v-on:click="recoverPass" href="#">¿Olvidaste tu contraseña?</a>
        </form>
        <p>App creada por ©Sebastian Araos 2021</p>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import firebase from 'firebase';

export default {
  name: 'Home',
  data(){
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    recoverPass: function (event){
      Swal.fire({
        title: 'Datos:',
        text: 'Email: prueba@todo.com Password: 123456',
        width: '300px'
      }
      )
      if(event){
        console.log('Email: admin-geosolve@geosolve.com / Password: geosolve2021')
      }
    },
    login(){
      if(this.email && this.password){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Bienvenido!',
          showConfirmButton: false,
          timer: 1500,
          width: '300px'
        })
        console.log('Inicio de sesión correcta')
        this.$router.push({name: 'List-Check'});
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Los datos ingresados son incorrectos',
          footer: 'Por favor, vuelva a intentarlo',
          width: '300px'
        })
        .then(() => {
          this.email = '',
          this.password = ''
        })
        console.log('Datos ingresados incorrectamente')
        console.error(error);
      });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Los datos ingresados son incorrectos',
          footer: 'Por favor, vuelva a intentarlo',
          width: '300px'
        })
      }
    }
  }
}
</script>

<style>
  .home{
    display: flex;
    justify-content: center;
  }
  .home section{
    display: flex;
    align-content: center;
    width: 310px;
    border: 2px solid #fff;
    border-radius: 8px;
    background: gray;
    margin: 6rem 0;
  }
  .home img{
    width: 85%;
    height: 80px;
    margin: 3rem 1.5rem;
  }
  .home form{
    display: flex;
    flex-direction: column;
    margin: 0 .5rem;
    text-align: center;
  }
  .home input{
    margin: .5rem 0;
    border-radius: 8px;
    padding: .5rem;
  }
  .home button{
    width: 50%;
    background: #14213D;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    padding: .5rem 0;
    margin: 0 auto;
    border-radius: 8px;
  }
  .home a{
    text-align: center;
    margin: 1rem 0;
    font-size: .8rem;
    color: #fff;
  }
  .home p{
    font-size: .8rem;
    border-top: 1px solid black;
    padding: .5rem 0;
    text-align: center;
  }
</style>
