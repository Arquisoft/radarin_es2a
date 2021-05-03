Feature: Registro de usuarios

  Scenario: El usuario no está registrado
    Given Un usuario sin registrar
    When Rellena el formulario y pulsa Registrarse
    Then Se le informará mediante un mensaje de bienvenida

  Scenario: El usuario ya está registrado
    Given Un usuario registrado
    When Rellena el formulario y pulsa Registrarse
    Then Se le informará mediante un mensaje de error

  Scenario: El usuario introduce campos vacíos
    Given Un usuario cualquiera
    When Rellena el formulario con campos vacíos
    Then Se le informará mediante un mensaje de error

    