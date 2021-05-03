const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/register-form.feature");

defineFeature(feature, test => {

   beforeEach(async () => {
      await global.page.goto('http://localhost:3000/registrarse')
   })
   
   test("El usuario no está registrado", ({ given, when, then }) => {
      given("Un usuario sin registrar", () => {
         email = "newuser@test.com"
         password = "newuser"
      });

      when("Rellena el formulario y pulsa Registrarse", async () => {
         await expect(page).toMatch('Registrarse')
         await expect(page).toFillForm('form[name="register"]', {
            email: email,
         })
         await expect(page).toClick('button', { text: 'Registrarse' })
      });

      then("Se le informará mediante un mensaje de bienvenida", async () => {
         await expect(page).toMatch('Usuario añadido correctamente')
      });
   });

   test("El usuario ya está registrado", ({ given, when, then }) => {

      given("Un usuario registrado", () => {
         email = "amigo3@email.com"
         password = "otheruser"
         pod = " "
      });

      when("Rellena el formulario y pulsa Registrarse", async () => {
         await expect(page).toMatch('Registrarse')

         await expect(page).toFillForm('form[name="register"]', {
            email: email,
            password: password,
            pod: pod,
         })
         await expect(page).toClick('button', { text: 'Registrarse' })

         await expect(page).toFillForm('form[name="register"]', {
            email: email,
            password: password,
            pod: pod,
         })
         await expect(page).toClick('button', { text: 'Registrarse' })
      });

      then("Se le informará mediante un mensaje de error", async () => {
         await expect(page).toMatch('Ya existe un usuario con ese email')
      });

   });

   test("El usuario introduce campos vacíos", ({ given, when, then }) => {

      given("Un usuario cualquiera", () => {
         email = ""
         password = " "
         pod = " "
      });

      when("Rellena el formulario con campos vacíos", async () => {
         await expect(page).toMatch('Registrarse')
         await expect(page).toFillForm('form[name="register"]', {
            email: email,
            password: password,
            pod: pod,
         })
         await expect(page).toClick('button', { text: 'Registrarse' })
      });

      then("Se le informará mediante un mensaje de error", async () => {
         await expect(page).toMatch('No pueden existir campos vacíos')
      });

   });

});



