<div align="left" style="position: relative;">
<img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>GESTOCK</h1>
<p align="left">
	<em>Empowering Inventory Insight, One Click at a Time.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/s-pl/gestock?style=social&logo=opensourceinitiative&logoColor=white&color=060606" alt="license">
	<img src="https://img.shields.io/github/last-commit/s-pl/gestock?style=social&logo=git&logoColor=white&color=060606" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/s-pl/gestock?style=social&color=060606" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/s-pl/gestock?style=social&color=060606" alt="repo-language-count">
</p>
<p align="left">Built with the tools and technologies:</p>
<p align="left">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=social&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=social&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=social&logo=Firebase&logoColor=black" alt="Firebase">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=social&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=social&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/MUI-007FFF.svg?style=social&logo=MUI&logoColor=white" alt="MUI">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=social&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=social&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=social&logo=chartdotjs&logoColor=white" alt="Chart.js">
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Gestock is a cutting-edge inventory management platform designed to streamline stock control and enhance operational efficiency for businesses. With features like real-time analytics, customizable dashboards, and seamless integration with Firebase for secure data handling, Gestock is ideal for small to medium enterprises looking to optimize their inventory processes. Its intuitive interface and robust functionality make it a valuable tool for improving decision-making and operational transparency.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes modern JavaScript frameworks like `<React>` and libraries such as `<@mui/material>` and `<@emotion/react>` for frontend development.</li><li>Employs `<Vite>` for enhanced build performance and development experience.</li><li>Integrates `<Firebase>` for backend services including authentication and database interactions.</li><li>Structured around a component-based architecture, facilitating modularity and reuse.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Adopts `<ESLint>` for static code analysis to maintain code quality and consistency.</li><li>Uses `<eslint-plugin-react-hooks>` and `<eslint-plugin-react-refresh>` to enforce best practices in React development.</li><li>Codebase includes detailed configuration files like `eslint.config.js` to manage coding standards.</li><li>JavaScript and JSX are the primary languages, ensuring a modern web development approach.</li></ul> |
| 📄 | **Documentation** | <ul><li>Documentation includes detailed `install_commands`, `usage_commands`, and `test_commands` using `<npm>`.</li><li>Codebase comments and README files provide guidance on setup, usage, and maintenance.</li><li>Language diversity in documentation with JSON, JS, HTML, CSS, and JSX files.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with `<Firebase>` for real-time database operations and authentication.</li><li>Uses `<react-router-dom>` for SPA routing capabilities.</li><li>Charting functionalities integrated using `<chart.js>` and `<react-chartjs-2>` for data visualization.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Highly modular structure with components like `Card.jsx`, `Modal.jsx`, and `AuthContext.jsx`.</li><li>Theme and authentication contexts (`ThemeContext.jsx` and `AuthContext.jsx`) enhance modularity by centralizing functionality.</li><li>Utilizes Material UI's design system for consistent UI components.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Testing commands provided in the documentation for execution via `<npm>`.</li><li>Project setup suggests a structured approach to testing, although specific testing frameworks are not detailed in the provided context.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Uses `<Vite>` and `<@vitejs/plugin-react-swc>` for fast rebuilding and optimized production builds.</li><li>Employment of efficient frontend libraries like React for responsive UIs.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Implements secure authentication flows using `<Firebase>` and custom React contexts.</li><li>Protected routes with `ProtectedRoute.jsx` to ensure that sensitive areas of the application are accessible only to authenticated users.</li></ul> |

---

## 📁 Project Structure

```sh
└── gestock/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   │   └── gestock-logo.svg
    │   ├── components
    │   │   ├── Auth
    │   │   │   ├── Login.jsx
    │   │   │   ├── ProtectedRoute.jsx
    │   │   │   ├── ResetPassword.jsx
    │   │   │   └── Signup.jsx
    │   │   ├── Card
    │   │   │   └── Card.jsx
    │   │   ├── Charts
    │   │   │   └── Charts.jsx
    │   │   ├── Hero
    │   │   │   └── Hero.jsx
    │   │   ├── Inventory
    │   │   │   ├── Inventory.jsx
    │   │   │   └── InventoryStats.jsx
    │   │   ├── Layout
    │   │   │   └── Layout.jsx
    │   │   ├── Modal
    │   │   │   ├── Modal.jsx
    │   │   │   └── ModalContents.jsx
    │   │   ├── Reviews
    │   │   │   └── Reviews.jsx
    │   │   └── Snippets
    │   │       └── Snippets.jsx
    │   ├── contexts
    │   │   ├── AuthContext.jsx
    │   │   └── ThemeContext.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages
    │       ├── About.jsx
    │       ├── Contact.jsx
    │       ├── Dashboard.jsx
    │       └── Home.jsx
    └── vite.config.js
```


### 📂 Project Index
<details open>
	<summary><b><code>GESTOCK/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the "segunda-entrega-lnd" project serves a critical role in managing and ensuring the consistency of dependencies used throughout the application<br>- This file locks the versions of all packages and their dependencies, ensuring that the same versions are installed across different environments, thereby preventing discrepancies that could arise from version mismatches<br>- It supports the stability and reliability of the build process in the project's development lifecycle.

In the broader architecture of the codebase, this file interacts with the Node.js ecosystem, specifically with npm (Node Package Manager), to facilitate precise control over the packages installed<br>- This is crucial for maintaining the integrity and predictability of the application's behavior across various development and production environments<br>- The dependencies listed, such as "@emotion/react", "@mui/material", and others, indicate the project's reliance on these libraries for its frontend development, highlighting its modern, component-based UI architecture.

Overall, the `package-lock.json` file is an essential component that supports the project's configuration management by ensuring that all team members and deployment pipelines use exactly the same versions of third-party libraries, thus safeguarding the application against potential bugs and compatibility issues introduced by varying dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/vite.config.js'>vite.config.js</a></b></td>
				<td>- Configures the build and development settings for a React application using Vite<br>- It integrates the React SWC plugin to optimize the compilation process<br>- This configuration enhances the development experience by leveraging Vite's fast build tooling, significantly improving load times and streamlining the development workflow within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/package.json'>package.json</a></b></td>
				<td>- Serves as the configuration backbone for the "segunda-entrega-lnd" project, defining project metadata, dependencies, and scripts for development and production environments<br>- It orchestrates the build system, manages package dependencies for React and Material UI components, and sets up linting and preview tools to streamline development workflows.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/index.html'>index.html</a></b></td>
				<td>- Serves as the entry point for the Gestock web application, initializing the user interface<br>- It sets up essential metadata, links to external resources like fonts and icons, and integrates the main application script<br>- The structure ensures optimal display across various devices, enhancing user accessibility and experience in inventory management.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>- Configures ESLint for JavaScript and JSX files across the project, emphasizing code quality and consistency<br>- It integrates specific plugins for React hooks and refresh patterns, setting up rules that enforce recommended practices while allowing certain global variables and patterns<br>- This setup ensures clean, efficient code particularly in development environments involving React components.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Integrates the 'Inter' font into the project's global styling by importing it directly within the main CSS file located at src/index.css<br>- This setup ensures that the 'Inter' font is available throughout the entire application, enhancing the UI consistency and readability across all components and pages.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/App.css'>App.css</a></b></td>
				<td>- Defines and manages responsive styling for the application, ensuring optimal readability and layout across various devices<br>- It adjusts font sizes and container dimensions based on the screen width, catering to mobile, tablet, and desktop views<br>- This approach enhances user interface consistency and accessibility throughout the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/App.jsx'>App.jsx</a></b></td>
				<td>- App.jsx serves as the central routing hub for a web application, orchestrating navigation and layout management<br>- It integrates authentication and theme contexts to provide a cohesive user experience across various pages like Home, About, Contact, and user authentication interfaces<br>- It also secures sensitive routes, ensuring protected access to the Dashboard.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/main.jsx'>main.jsx</a></b></td>
				<td>- Initiates the React application by setting up the root component within a strict mode context<br>- It integrates the main application component, App, and applies global styles and fonts<br>- This setup ensures that the entire application adheres to strict coding standards from the start, enhancing overall code quality and reliability within the project's architecture.</td>
			</tr>
			</table>
			<details>
				<summary><b>contexts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/contexts/AuthContext.jsx'>AuthContext.jsx</a></b></td>
						<td>- AuthContext.jsx establishes a centralized authentication management system using Firebase services<br>- It provides functions for user registration, login, logout, password reset, and profile updates<br>- The context ensures that user authentication state is globally accessible across the application, enhancing security and user experience by managing session states and user data efficiently.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/contexts/ThemeContext.jsx'>ThemeContext.jsx</a></b></td>
						<td>- Manages the application's theme settings by providing a context for theme management within the React component hierarchy<br>- It enables components to access and toggle between light and dark modes, enhancing user interface flexibility and personalization<br>- The context encapsulates theme state and functionality, ensuring efficient theme switching across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>Card</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Card/Card.jsx'>Card.jsx</a></b></td>
								<td>- Card.jsx serves as a reusable UI component within the codebase, designed to display content in a card format<br>- It utilizes Material UI components to structure and style a card that presents a title and description<br>- This component enhances the user interface by providing a consistent and visually appealing method for displaying brief information blocks across different parts of the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Hero</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Hero/Hero.jsx'>Hero.jsx</a></b></td>
								<td>- Hero.jsx serves as the entry point component for new and returning users in the Gestock inventory management platform<br>- It provides a welcoming interface, guiding users either to log in or directly to their dashboard based on authentication status<br>- Additionally, it showcases key features of the platform such as stock management, transaction history, category organization, and analytics through interactive cards.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Snippets</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Snippets/Snippets.jsx'>Snippets.jsx</a></b></td>
								<td>- Snippets.jsx serves as a user interface component within the larger application, providing a detailed, interactive display of API functionalities<br>- It showcases various API operations through a tabbed interface, allowing users to explore code examples in JavaScript, Python, and cURL, thus enhancing understanding and ease of API integration for developers.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Modal</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Modal/Modal.jsx'>Modal.jsx</a></b></td>
								<td>- CustomModal, located within the Modal component directory, serves as a reusable UI component across the application<br>- It leverages Material UI's Joy UI components to present a styled modal dialog that can display dynamic content and titles<br>- This component enhances user interaction by providing a centralized, customizable modal for various user interfaces within the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Modal/ModalContents.jsx'>ModalContents.jsx</a></b></td>
								<td>- Provides essential legal and policy information for Gestock users, detailing terms of service, privacy policies, and cookie usage<br>- It ensures users are informed about their rights, data usage, and the operational policies of the platform, enhancing transparency and compliance.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Auth</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Auth/Signup.jsx'>Signup.jsx</a></b></td>
								<td>- Signup.jsx serves as the user registration component within the application's authentication system<br>- It facilitates the creation of new user accounts by handling user inputs for email and password, verifying password consistency, and interacting with the authentication context to register users<br>- Upon successful registration, it redirects users to the homepage.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Auth/ProtectedRoute.jsx'>ProtectedRoute.jsx</a></b></td>
								<td>- ProtectedRoute.jsx serves as a security component within the application's authentication system, ensuring that only authenticated users can access certain routes<br>- It utilizes the AuthContext to check if a user is currently logged in and redirects unauthenticated users to the login page, while permitting authenticated users to proceed to their requested routes.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Auth/Login.jsx'>Login.jsx</a></b></td>
								<td>- Login.jsx serves as the user authentication interface within the application, enabling users to log in using their email and password<br>- It handles user inputs, validates credentials, manages authentication states, and navigates users to the home page upon successful login, while also providing links for password reset and new user registration.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Auth/ResetPassword.jsx'>ResetPassword.jsx</a></b></td>
								<td>- ResetPassword.jsx serves as a user interface component within the authentication system, enabling users to reset their passwords<br>- It interacts with the AuthContext to manage state and handle the password reset process, providing feedback through alerts and guiding users back to the login page if needed.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Charts</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Charts/Charts.jsx'>Charts.jsx</a></b></td>
								<td>- Charts.jsx serves as a visual representation component within the inventory management system, displaying real-time data analytics through interactive bar charts<br>- It visualizes inventory trends, quarterly performance, consumption patterns, and data-driven stock management, enhancing strategic decision-making capabilities for users.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Inventory</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Inventory/InventoryStats.jsx'>InventoryStats.jsx</a></b></td>
								<td>- InventoryStats.jsx serves as a visual analytics component within the application, providing users with graphical representations of their inventory data<br>- It fetches product information from a Firestore database, categorizes this data, and displays it through bar charts, highlighting product quantities and inventory values by category, enhancing user insight into inventory management.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Inventory/Inventory.jsx'>Inventory.jsx</a></b></td>
								<td>- Manages the inventory component within a React application, interfacing with Firebase to perform CRUD operations on product data<br>- It enables user authentication, product management, and real-time updates, providing functionalities for adding, editing, and deleting products, as well as handling user interactions through a modal-based UI.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Reviews</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Reviews/Reviews.jsx'>Reviews.jsx</a></b></td>
								<td>- Displays user testimonials in a visually appealing grid layout, utilizing components from the Joy UI library<br>- Each testimonial card includes the user's avatar, name, role, company, comment, and a custom star rating<br>- This component enhances the user interface by providing real-time feedback on the product's impact, directly contributing to user engagement and trust.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Layout</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/components/Layout/Layout.jsx'>Layout.jsx</a></b></td>
								<td>- Provides the structural framework for the user interface in the application, integrating navigation, authentication, and modal management<br>- It facilitates user interactions across different sections such as home, about, dashboard, and contact, while handling session management and displaying terms, privacy, and cookies policies through modals.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/pages/About.jsx'>About.jsx</a></b></td>
						<td>- About.jsx serves as the informational hub for the Gestock application, detailing the company's mission, unique selling propositions, and team ethos<br>- It utilizes a structured layout to present key aspects of the service, emphasizing ease of use, real-time access, and detailed analytics to potential users, thereby enhancing user engagement and understanding of Gestock's value proposition.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/pages/Contact.jsx'>Contact.jsx</a></b></td>
						<td>- Provides a user interface for visitors to submit contact information and messages through a form, and displays contact details such as address, phone, and email<br>- It handles user input validation, submission feedback, and resets the form upon successful submission, enhancing user interaction and data collection efficiency.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
						<td>- Dashboard.jsx serves as the user interface for authenticated users within the application, providing a navigational hub to access and manage inventory data<br>- It features a tabbed layout, allowing users to switch between viewing inventory items and statistical data related to inventory management, ensuring a streamlined user experience focused on essential operational insights.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/gestock/blob/master/src/pages/Home.jsx'>Home.jsx</a></b></td>
						<td>- Home.jsx serves as the main landing page within the application's architecture, orchestrating the user interface by integrating various components<br>- It features a Hero section for impactful visual engagement, Charts for data visualization, Snippets for brief informational content, and Reviews to display user feedback, collectively enhancing the user experience and providing a comprehensive overview at the entry point of the site.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with gestock, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### ⚙️ Installation

Install gestock using one of the following methods:

**Build from source:**

1. Clone the gestock repository:
```sh
❯ git clone https://github.com/s-pl/gestock
```

2. Navigate to the project directory:
```sh
❯ cd gestock
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run gestock using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/s-pl/gestock/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/s-pl/gestock/issues)**: Submit bugs found or log feature requests for the `gestock` project.
- **💡 [Submit Pull Requests](https://github.com/s-pl/gestock/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/s-pl/gestock
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/s-pl/gestock/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=s-pl/gestock">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
