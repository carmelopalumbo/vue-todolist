// vue

const { createApp } = Vue;

// inizializzazione dell'app
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

        //  metodi
        methods: { 
            
            // elimina task al click della x
            deleteTask(index){ 
                if(!this.tasks[index].done){
                    this.textErrorMsg = 'Devi completare la task prima di poterla rimuovere!';
                    return;
                }
                this.tasks.splice(index, 1);
                this.textErrorMsg = '';
            },

            // aggiunge nuova task
            addTask(){

                if(this.newTaskText.length === 0) return;

                if(this.newTaskText.length < 5){
                    this.textErrorMsg = 'Task troppo corta! Lunghezza minima 5 caratteri.';
                    return
                }

                const checkTask = this.tasks.find(task => task.text.toLowerCase() === this.newTaskText.toLowerCase());

                if(checkTask){
                    this.textErrorMsg = 'Task giá presente nella lista!';
                    return;
                }

                const tempTask = {
                    text: this.newTaskText,
                    done: false
                    }

                this.tasks.unshift(tempTask);
                this.textErrorMsg = '';
                this.newTaskText = '';
                
            }
        }
    }
).mount('#app')