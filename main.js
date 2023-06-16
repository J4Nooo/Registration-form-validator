function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;

  // Warunek długości nazwy użytkownika
    if (username.length < 5) {
      alert('Nazwa użytkownika musi mieć minimum 5 znaków');
      return false;
    }

  // Warunek długości hasła
    if (password.length < 6) {
      alert('Hasło musi mieć minimum 6 znaków');
      return false;
    }

  // Warunki, które musi spełnić hasło odnośnie rodzaju znaków
    var hasNumber = /\d/.test(password);
  
    var hasUppercase = /[A-Z]/.test(password);
  
    var hasLowercase = /[a-z]/.test(password);
  
    var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
    if (!(hasNumber && hasUppercase && hasLowercase && hasSpecialChar)) {
      alert('Hasło musi zawierać co najmniej jedną małą i jedną wielką literę, jedną cyfrę oraz jeden znak specjalny');
      return false;
    }

  // Warunek identycznych haseł
    if (password !== confirmPassword) {
      alert('Hasła muszą być takie same');
      return false;
    }
    
  // Warunek prawidłowego adresu email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Nieprawidłowy adres e-mail');
      return false;
    }
  
    alert('Pomyślnie zarejestrowano nowego użytkownika!');
    return true;
  }