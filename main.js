window.addEventListener('load', () => {
   const form = document.getElementById('new-task-form')
   const input = document.getElementById('new-task-input')
   const list_el = document.getElementById('tasks')

   form.addEventListener('submit', (e) => {
      e.preventDefault()

      const task = input.value
      
      if (!task) {
         alert('Please write your task')
      } else {
         console.log('Success')
      }
   })

})