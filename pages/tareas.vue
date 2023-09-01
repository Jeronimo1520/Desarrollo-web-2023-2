<template>
    <div>
      <h1>Gestión de tareas</h1>
      <p>Formulario para la gestión de tareas de los estudiantes.</p>
  
      <form action="javascript:void(0)" @submit="saveTask">
  
        <v-text-field label="Nombre" v-model="task.name" required placeholder="Ingrese su nombre" />
  
        <v-text-field label="Correo" v-model="task.email" type="email" placeholder="Ingrese su correo" />
  
        <v-textarea label="Descripción" v-model="task.description" cols="10" rows="3"></v-textarea>
  
        <v-checkbox v-model="task.conditions">
          <template v-slot:label>
            <a href="http://google.com" target="_blank">Acepta terminos y condiciones</a>
          </template>
        </v-checkbox>
  
        <label>Tipo de tarea</label>
        <v-radio-group v-model="task.type">
          <v-radio label="Actividad" value="typeA"></v-radio>
          <v-radio label="Tarea" value="typeB"></v-radio>
        </v-radio-group>
  
        <v-select @change="updatePeriod()" label="Semestre" v-model="task.period" :items="['Semestre 1', 'Semestre 2', 'Semestre 3']"></v-select>
  
  
        <v-btn type="submit" >Enviar</v-btn>
  
      </form>
      <v-btn @click="getTasks()">Obtener tareas</v-btn>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <b>{{ task.id }}</b> {{ task.name }}
        </li>
      </ul>
    
    </div>
  </template>
  <script setup>

  import axios from "axios";
  const task = ref({ conditions: true, period: '1' })
  const tasks = ref({})

  const saveTask = async() => {
    console.log(task.value);
    const result = await axios.post("http://localhost:3001/task",task.value)
    console.log(result);
  }

  const getTasks = async()=>{
    try {
      const result = await axios.get("http://localhost:3001/task")
      tasks.value = result.data;
    } catch (error) {
      console.log(error);
    }
  }

  const updatePeriod = () => {
    console.log(task.value);
  }
  </script>