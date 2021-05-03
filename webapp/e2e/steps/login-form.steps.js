const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/login-form.feature");

defineFeature(feature, test => {

   beforeEach(async () => {
      await global.page.goto('http://localhost:3000/login')
   })

   test("The user is not loged in the site and introduce incorrect data", ({ given, when, then }) => {

      let email;
      let password;

      given("An unlogged user", () => {
         email = "user@test.com"
         password = "user"
      });

      when("I fill the data in the form and press submit", async() =>  {
         await expect(page).toMatch('¿Tienes un pod?')
         await expect(page).toFillForm('form[name="logIn"]', {
            email: email,
            password: password,
         })
         await expect(page).toClick('button', { text: 'Confirmar' })
         await expect(page).toMatch('¿Tienes un pod?')
      });

      then("An error message should be shown in the screen", async() => {
      });
   });

   test("The user introduces correct data", ({ given, when, then }) => {

      let email;
      let password;

      given("An unlogged user", () => {
        email = "usuario2@usuario.com"
        password = "12345"
      });

      when("I fill the data in the form and press submit", async() => {
         await expect(page).toMatch('Confirmar')
         await expect(page).toFillForm('form[name="logIn"]', {
            email: email,
            password: password,
         })
         await expect(page).toClick('button', { text: 'Confirmar' })
         await page.waitFor(500);
         await expect(page).toMatch('Ver el codigo de la aplicacion en github')
      });

      then("The home window should be shown", async() => {
      });

   });
});
