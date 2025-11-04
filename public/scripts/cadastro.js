// Cadastro functionality - JavaScript Vanilla
document.addEventListener('DOMContentLoaded', function() {
  const cadastroForm = document.getElementById('cadastro-form')
  const errorMessage = document.getElementById('error-message')
  const successMessage = document.getElementById('success-message')
  const submitBtn = document.getElementById('submit-btn')

  if (cadastroForm) {
    cadastroForm.addEventListener('submit', async function(e) {
      e.preventDefault()
      
      // Limpar mensagens
      hideMessages()
      
      // Desabilitar botão durante o envio
      submitBtn.disabled = true
      submitBtn.textContent = 'Criando conta...'

      // Pegar dados do formulário
      const formData = new FormData(cadastroForm)
      const name = formData.get('name')
      const email = formData.get('email')
      const password = formData.get('password')
      const confirmPassword = formData.get('confirmPassword')

      // Validar senhas
      if (password !== confirmPassword) {
        showError('As senhas não correspondem')
        submitBtn.disabled = false
        submitBtn.textContent = 'Criar conta'
        return
      }

      // Validar comprimento da senha
      if (password.length < 6) {
        showError('A senha deve ter no mínimo 6 caracteres')
        submitBtn.disabled = false
        submitBtn.textContent = 'Criar conta'
        return
      }

      try {
        // Fazer requisição para API de registro
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password
          })
        })

        const data = await response.json()

        if (response.ok) {
          // Cadastro bem-sucedido
          showSuccess('Conta criada com sucesso! Redirecionando...')
          
          // Aguardar 2 segundos e redirecionar para login
          setTimeout(() => {
            window.location.href = '/login'
          }, 2000)
        } else {
          // Mostrar erro
          showError(data.message || 'Erro ao criar conta')
        }
      } catch (error) {
        showError('Ocorreu um erro ao criar conta. Tente novamente.')
        console.error('Erro:', error)
      } finally {
        // Reabilitar botão
        submitBtn.disabled = false
        submitBtn.textContent = 'Criar conta'
      }
    })
  }

  function showError(message) {
    errorMessage.textContent = message
    errorMessage.style.display = 'block'
  }

  function showSuccess(message) {
    successMessage.textContent = message
    successMessage.style.display = 'block'
  }

  function hideMessages() {
    errorMessage.style.display = 'none'
    errorMessage.textContent = ''
    successMessage.style.display = 'none'
    successMessage.textContent = ''
  }
})
