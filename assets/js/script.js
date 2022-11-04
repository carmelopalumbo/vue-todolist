// vue

// 1. avere un elenco di task da fare o fatti

// 2. stamparli in pagina

// 3. al click del task fare il toggle del task fatto o meno

// 4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore

// 5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all elenco dei task

// 6. verificare la lunghezza minima del nuovo task (min 5 caratteri)

// 7. se l elenco e' vuoto non mostrare la lista ma mostrare il messagio non ci sono task

const { createApp } = Vue;

createApp(
    {
        data(){
            return{
                logo: 'assets/img/logo.png',

                tasks: [
                    {
                        text: 'Fare la spesa',
                        done: false
                    },

                    {
                        text: 'Imparare React',
                        done: false
                    },

                    {
                        text: 'Ripassare Bootstrap',
                        done: false
                    }
                ],

                textErrorMsg: '',
                newTaskText: '',
            }
            
        },

        methods: { 

            deleteTask(index){
                if(!this.tasks[index].done){
                    this.textErrorMsg = 'Devi completare la task prima di poterla rimuovere!';
                    return
                }
                this.tasks.splice(index, 1);
                this.textErrorMsg = '';
            },

            addTask(){

                if(this.newTaskText.length < 5){
                    this.textErrorMsg = 'Task troppo corta! Lunghezza minima 5 caratteri.';
                    return
                }

                let checkText = false;

                this.tasks.forEach(task => {
                    if(task.text === this.newTaskText){
                        this.textErrorMsg = 'Task giá presente nella lista!';
                        checkText = true;
                    }
                })

                if(!checkText){
                    const tempTask = {
                        text: this.newTaskText,
                        done: false
                    };
                    this.tasks.unshift(tempTask);
                    this.textErrorMsg = '';
                    this.newTaskText = '';
                }
            }
        },

        mounted(){

        }
    }
).mount('#app')