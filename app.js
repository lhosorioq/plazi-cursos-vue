new Vue({
    el: '#app',
    data() {
        return {
            courses: [
                // { title: 'JavaScript', time: 2 },
                // { title: 'Vue', time: 5 },
                // { title: 'Vue + components', time: 3 },
                // { title: 'Laravel', time: 8 },
            ],
            title: '',
            time: null,
            cantidad: 0
        }
    },
    computed: {
        // funcion para calcular el tiempo y cursos tomados
        totalTime() {
            let tt = 0
            for (var i = 0; i < this.courses.length; i++) {
                // se deben parsear para que no concatene si no que sume
                tt = parseInt(tt) + parseInt(this.courses[i].time)
            }
            // retornamos el arreglo con los dos valores requeridos
            return { time: tt, count: i }
        }
    },
    methods: {
        // para agregar cursos a la lista
        addCourse() {
            // creamos arreglo con los valores enviados con v-model desde el formulario en la vista
            if (this.title != '' && this.time != '') {
                let newCourse = { title: this.title, time: this.time }
                this.courses.push(newCourse)
                    // limpiamos campos
                this.title = ''
                this.time = null
            }
        }
    }

})