const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/admin.feature");

defineFeature(feature, test => {

   beforeEach(async () => {
      await global.page.goto('http://localhost:3000/login')
   })
   
   test("Gestión de administrador, añadir usuario existente", ({ given, when, then }) => {
      given("Un administrador", () => {
         email = "uo271314@uniovi.es"
         password = "123456"
         emailUser = "amigo3@email.com"
         passwordUser = "123456" 
      });

      when("Rellena el formulario para añadir nuevo usuario que ya existe y pulsa Guardar", async () => {
         await expect(page).toMatch('INICIAR SESIÓN')
         await expect(page).toFillForm('form[name="login"]', {
            email: email,
            password: password,
         })
         await expect(page).toClick('button', { text: 'Confirmar' })
         await global.page.goto('http://localhost:3000/admin/users')
         await expect(page).toMatch('Gestor de usuarios')
         await expect(page).toFillForm('form[name="userForm"]', {
            email: emailUser,
            password: passwordUser,
         })
         await expect(page).toClick('button', { text: 'Guardar' })
      });

      then("Se le informará mediante un mensaje de error", async () => {
        await expect(page).toMatch('Ya existe un usuario con ese email')
      });

   });
});