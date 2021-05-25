<template>
  <div class="listCheck">
    <section>
       <header>
          <h1>Lista de Tareas</h1>
          <form @submit.prevent="saveTask(task)">
              <input type="text" name="description" id="description" v-model="task.description" placeholder="Ingrese nueva tarea"/>
              <button type="submit" ><font-awesome-icon icon="plus" /></button>
          </form>
      </header>
      <article>
        <div v-if="new_Task.length > 0">
          <div class="list_box" v-for="(task, index) in new_Task" :key="index">
            <p><b>{{task.description}}</b></p>
            <div class="submenu">
              <input type="checkbox">
              <p>Completado</p>
              <button @click="deleteTask(index)"><font-awesome-icon icon="trash" /></button>
            </div>
          </div>    
        </div>
        <div v-else>
          <div class="empty animate__animated animate__tada animate__delay-2s animate__infinite animate__slow">
              <h2>No hay ninguna tarea ingresada</h2>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'List-Check',
  data(){
    return{
        task:{
          description: '',
        }
    }  
  },
  computed: {
    ...mapGetters(['new_Task'])
  },
  methods:{
    ...mapActions(['addTask']),

    saveTask(task){
      if (task.description !== null){
        let new_task = {
          description: task.description
        }
        this.$store.dispatch('addTask', new_task);
        this.task.description = ''
      }else{
        console.log('Aun no se ingresa ninguna tarea a la lista')
      }
    },
    deleteTask(index){
      this.$store.dispatch('deleteThisTask', index)
    }
  }
}

</script>
<style>
  .listCheck{
    display: flex;
    justify-content: center;
  }
  .listCheck section{
    display: flex;
    flex-direction: column;
    width: 310px;
    border: 2px solid #fff;
    border-radius: 8px;
    background: gray;
    margin: 1rem 0;
  }
  .listCheck h1{
    text-align: center;
  }
  .listCheck header input{
    margin:0 0 .5rem .5rem;
    border-radius: 8px 0 0 8px;
    padding: .5rem;
    width: 78%;
  }
  .listCheck header button{
    border-radius: 0 8px 8px 0;
    padding: .5rem;
  }
  .list_box{
    background: #e5e5e5;
    border: 1px solid #000;
    border-radius: 8px;
    margin: .5rem;
    padding: .5rem;
  }
  .list_box .submenu{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_box .submenu button{
    margin-left: 100px;
    background: #ff0000;
    padding: .5rem 1rem;
    border-radius: 8px;
    color: #fff;
  }
  .empty{
    display: flex;
    align-items: center;
    margin: 7rem 0;
  }
  .empty h2{
    text-align: center;
    background: #e5e5e5;
    border-radius: 8px;
    padding: 1rem;
    margin: 1.5rem;
  }
</style>