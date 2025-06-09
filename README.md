# cursor-like IDE using simple NODE JS script and interacting with an LLM

## Simple Cursor like application which can create simple projects by taking user input and creates projects with respective files and expectation is that it works end to end.

### Apps like weather app, todo app and form submission apps are tested in this project.

---

#### The below prompt is an example prompt for the project that is created using our cursor like prompt.

> **Add your OPENAI_API_KEY in the index.js file and then just run:**  
> `npm install`  
> `npm run dev`

#### Example Interaction

> ### 🚀 START  
> **Enter your query:**  
> Create a form submission project with a folder containing HTML, CSS and JS files. The page should contain firstname, lastname, age, gender with Male, Female, and NA dropdown fields and a submit button along with reset button. Submit should mimic real server submission experience with loading icon and success message, reset should clear all values entered by the user and set page to initial state.

> ### 💡 THINK  
> User wants a form submission project that includes HTML, CSS, and JS files in a folder. The form fields should be firstname, lastname, age, and gender with a dropdown for Male, Female, and NA. There should be submit and reset buttons. Submit should mimic a real server submission with loading icon and success message. Reset should clear all values and reset the page.

> ### 💡 THINK  
> To implement this, I need to create a folder for the project, then create the HTML file containing the form with the specified fields. The CSS file will style the form and loading icon. The JS file will handle the form submission, simulate loading, display success message, and implement the reset functionality.

> ### 💡 THINK  
> I will create a folder named 'form_submission_project', and inside that create three files: index.html, styles.css, and script.js. The HTML file will have the form with the required fields, CSS for styling, and JS for form behavior.

> ### ⚡️ ACTION  
> Tool Call executeCommand: (`mkdir form_submission_project && cd form_submission_project && echo ...`)

> ### 👀 OBSERVE  
> The form submission project has been created inside the 'form_submission_project' folder. Its ready to be tested.


> ### ✅ OUTPUT  
> The form submission project has been created inside the 'form_submission_project' folder. It contains three files: index.html, styles.css, and script.js. The form includes fields for firstname, lastname, age, gender with dropdown options Male, Female, and NA, and Submit and Reset buttons. The Submit button simulates a server submission with a loading message and shows a success message after 2 seconds. The Reset button clears the form and resets the page state.
