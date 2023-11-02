/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

beforeEach(() => {
  localStorage.setItem(
    "Admin_Token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgyMDkxZWZkYzVlY2E4YzdiNGEwN2EiLCJlbWFpbCI6ImNvbW1hQWRtaW5AZ21haWwuY29tIiwidXNlcl90eXBlIjozLCJuYW1lIjoiY29tbWEgQWRtaW4iLCJtb2JpbGVfbnVtYmVyIjoiOTkxMzQ2MjUxNSIsInBlcm1pc3Npb24iOltdLCJjcmVhdGVkX2J5IjoiNjQ4MjA5MWVmZGM1ZWNhOGM3YjRhMDdhIiwiYWxsb3dfcHJpbnQiOiJObyIsImlhdCI6MTY5MDc4MjE3MCwiZXhwIjoxNjkwODY4NTcwfQ.9BJcD3_wsYPYyoaq9vEuCa9c_pG47xDXSvW0tytLdOg"
  );
  localStorage.setItem(
    "School_Token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg5ODdmMTZmM2IyNTgyNzQ3MjJhNjgiLCJlbWFpbCI6InN5bW9uZC5zY2hvb2xAZ21haWwuY29tIiwidXNlcl90eXBlIjoxLCJuYW1lIjoic3ltb25kIHNjaG9vbCIsIm1vYmlsZV9udW1iZXIiOiI3NDExMTQ2NTczIiwicGVybWlzc2lvbiI6W10sImNyZWF0ZWRfYnkiOiI2NDg5ODdmMTZmM2IyNTgyNzQ3MjJhNjgiLCJhbGxvd19wcmludCI6Ik5vIiwiaWF0IjoxNjkwNzgyNzQzLCJleHAiOjE2OTA4NjkxNDN9.lH9te0GFpIRtTDqCLHjeXaq-eqqeD42xwa4eqIVBNHU"
  );
  localStorage.setItem(
    "School_Token_Permission",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZjOTE3ZTEzNDhkOTFkN2Q4NmNjNGMiLCJlbWFpbCI6InN3YW1pbmFyYXlhbi5zY2hvb2xAZ21haWwuY29tIiwidXNlcl90eXBlIjoxLCJuYW1lIjoiY29tbWFzdG9wIHNvbnMgb3JnIiwibW9iaWxlX251bWJlciI6Ijc0ODcwNDY1NzMiLCJwZXJtaXNzaW9uIjpbInN0YW5kYXJkIiwicGFzc3BvcnQtaW1hZ2UiLCJkaXZpc2lvbiJdLCJjcmVhdGVkX2J5IjoiNjQ2YzkxN2UxMzQ4ZDkxZDdkODZjYzRjIiwiYWxsb3dfcHJpbnQiOiJObyIsImlhdCI6MTY5MDc4MjY3MSwiZXhwIjoxNjkwODY5MDcxfQ.zrLTmDv1ZM5tPFvDHddmnFN3i-lK19Q5fL7LeDkFzHU"
  );
  localStorage.setItem(
    "Org_Token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZjOTI1YjEzNDhkOTFkN2Q4NmNjNWQiLCJlbWFpbCI6ImNvbW1hQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6MiwibmFtZSI6ImNvbW1hc3RvcCBhbmQgaGlzIHNvbiBvcmciLCJtb2JpbGVfbnVtYmVyIjoiMTIzNDU2Nzg5MCIsInBlcm1pc3Npb24iOltdLCJjcmVhdGVkX2J5IjoiNjQ2YzkyNWIxMzQ4ZDkxZDdkODZjYzVkIiwiYWxsb3dfcHJpbnQiOiJObyIsImlhdCI6MTY5MDc4MjY5MiwiZXhwIjoxNjkwODY5MDkyfQ.rNBVJhktvsH2-SkkSEFAPFcYfFKetI6KVj6ezZLfC1g"
  );
  localStorage.setItem(
    "Org_Token_permission",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZjJmYzYwZTFjYzgyOGUxM2EyNzAiLCJlbWFpbCI6InZhc3VraS50cmFkZXJzQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6MiwibmFtZSI6InZhc3VraSB0cmFkZXJzIiwibW9iaWxlX251bWJlciI6Ijg4ODg2ODM1MDIiLCJwZXJtaXNzaW9uIjpbImdyb3VwIiwibXktb3JkZXIiLCJkZXBhcnRtZW50IiwiZGl2aXNpb24iXSwiY3JlYXRlZF9ieSI6IjY0OGZmMmZjNjBlMWNjODI4ZTEzYTI3MCIsImFsbG93X3ByaW50IjoiTm8iLCJpYXQiOjE2OTA3ODI3MTksImV4cCI6MTY5MDg2OTExOX0.nKL8-780RnEVcknuYguZDE10CvZE5UAV35UORXZtMCE"
  );

  //Token for my-account
  localStorage.setItem(
    "Token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgxZTU5ZGZkYzVlY2E4YzdiNDkzMWMiLCJlbWFpbCI6InNoYXJ0aGkuc2Nob29sQGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6MSwibmFtZSI6InNoYXJ0aGkgc2Nob29sIiwibW9iaWxlX251bWJlciI6Ijk5MjUyNTA3NDIiLCJwZXJtaXNzaW9uIjpbXSwiY3JlYXRlZF9ieSI6IjY0ODFlNTlkZmRjNWVjYThjN2I0OTMxYyIsImFsbG93X3ByaW50IjoiTm8iLCJpYXQiOjE2ODk1ODU4MTEsImV4cCI6MTY4OTY3MjIxMX0.sqhzJjxSkRZOmu9QbSzNWCBwyrdqEN7c20qMtWZV_JM"
  );

  localStorage.setItem("Address_Valid_Id", "646b3087326054919cf88839");
  localStorage.setItem("Address_Invalid_Id", "646b87326054919cf88839");
  localStorage.setItem("Address_Delete_Id", "6461ffcc56765bf2c64bf93a");
});

