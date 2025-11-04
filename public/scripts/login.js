// Login functionality - JavaScript Vanilla
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form')
  const errorMessage = document.getElementById('error-message')
  const submitBtn = document.getElementById('submit-btn')

  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault()
      
      // Limpar mensagem de erro
      errorMessage.style.display = 'none'
      errorMessage.textContent = ''
      
      // Desabilitar botão durante o envio
      submitBtn.disabled = true
      submitBtn.textContent = 'Entrando...'

      // Pegar dados do formulário
      const formData = new FormData(loginForm)
      const email = formData.get('email')
      const password = formData.get('password')

      try {
        // Fazer requisição para API de login
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })

        const data = await response.json()

        if (response.ok) {
          // Login bem-sucedido
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.token)
          
          // Redirecionar para home
          window.location.href = '/'
        } else {
          // Mostrar erro
          showError(data.message || 'Email ou senha inválidos')
        }
      } catch (error) {
        showError('Ocorreu um erro ao fazer login. Tente novamente.')
        console.error('Erro:', error)
      } finally {
        // Reabilitar botão
        submitBtn.disabled = false
        submitBtn.textContent = 'Entrar'
      }
    })
  }

  function showError(message) {
    errorMessage.textContent = message
    errorMessage.style.display = 'block'
  }
})

function handleGoogleLogin() {
  // Implementar login com Google OAuth
  window.location.href = '/api/auth/google'
}
