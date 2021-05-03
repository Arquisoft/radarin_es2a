Feature: Gestión de administrador

  Scenario: Gestión de administrador, añadir usuario existente
    Given Un administrador
    When Rellena el formulario para añadir nuevo usuario que ya existe y pulsa Guardar
    Then Se le informará mediante un mensaje de error