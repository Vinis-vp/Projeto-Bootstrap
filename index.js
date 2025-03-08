(() => {
    'use strict'
    
    const forms = document.querySelectorAll('.needs-validation')
    
    const validateForm = (event) => {
        event.preventDefault()
        event.stopPropagation()
        
        const form = event.target
        
        if (!form.checkValidity()) {
            // Mostrar erros se formulário inválido
            form.classList.add('was-validated')
        } else {
            // Resetar validação visual
            form.classList.remove('was-validated')
            
            // Remover estados inválidos individuais
            Array.from(form.elements).forEach(element => {
                element.classList.remove('is-invalid')
            })
            
            // Mostrar modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'))
            successModal.show()
            
            // Resetar formulário com timeout para sincronização
            setTimeout(() => {
                form.reset()
                
                // Forçar reset visual dos inputs
                Array.from(form.elements).forEach(element => {
                    element.blur()
                    element.style.backgroundColor = '' // Resetar cores
                })
            }, 100)
        }
    }

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', validateForm, false)
    })
})()