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
                        text: 'Andare dal barbiere',
                        done: false
                    },

                    {
                        text: 'Ripassare Bootstrap',
                        done: false
                    }
                ],

                textErrorMsg: 'Messaggio di errore!'
            }
            
        },

        methods: { 
            deleteTask(index){
                if(!this.tasks[index].done){
                    this.textErrorMsg = 'Devi completare la task prima di poterla rimuovere!';
                    return
                }
                this.tasks.splice(index, 1);
            }
        },

        mounted(){

        }
    }
).mount('#app')