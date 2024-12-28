# QA Automation Project with Playwright

This README serves as a guide to setting up, using, and maintaining the Playwright QA Automation project. It provides detailed instructions, prerequisites, and best practices for an organized and professional workflow.

---

## Prerequisites

Ensure you have the following tools and dependencies installed before proceeding:

1. **Git**
   - Download and install from [git-scm.com](https://git-scm.com/)

2. **Git Bash**
   - Included with Git installation (recommended for Windows users).

3. **VSCode (Visual Studio Code)**
   - Download and install from [code.visualstudio.com](https://code.visualstudio.com/)

4. **pnpm**
   - Install via npm: `npm install -g pnpm`

5. **nvm (Node Version Manager)**
   - Installation guide: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)
   - Windows: <https://github.com/coreybutler/nvm-windows/releases>

6. **Node.js** (installed via nvm)
   - Use the following commands to install and set a Node.js version:

     ```bash
     nvm list available
     nvm install <version>
     nvm use <version>
     node -v
     ```

7. **Scope**
   - Install Scope via Power Shell console

    ```Power Shell
     Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     irm get.scoop.sh | iex
     ```

8. **Allure**
   - Install Allure via Scoop

     ```bash
     scoop install allure
     ```

---

## Getting Started

Follow these steps to set up the project:

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   ```bash
   pnpm audit
   ```

3. **Run tests**

   ```bash
   pnpm test
   ```

---

## Repository Structure and Test Plan

This section outlines the structure and organization of the repository to facilitate an efficient QA Automation workflow.

### Key Directories

- **`tests/`**: Contains test cases categorized by features.
- **`utils/`**: Utility functions and reusable components.
- **`configs/`**: Configuration files for different environments.
- **`reports/`**: Stores Allure-generated reports.
- **`scripts/`**: Contains scripts for setup, cleanup, and test execution.

### Testing Plan

- Automated test cases are categorized into **smoke**, **regression**, and **end-to-end** scenarios.
- Each feature or module has a corresponding subdirectory within `tests/`.
- Test cases are written using Playwright's robust API.
- Git Flow:
   1. Create a Branch
      - **Command:**

         ```bash
         git checkout -b type/jiraID/branch-name
         ```

      - **Naming Format:** `type/jiraID/branch-name`
         - **Type:**
            - `feature`: New functionality
            - `fix`: Bug fix
            - `docs`: Documentation
            - `style`: Code styling
            - `refactor`: Refactoring
            - `test`: Tests
            - `chore`: Maintenance
         - **Example:**

            ```bash
            git checkout -b test/GX3-123/add-login-tests
            ```

   2. **Commit Changes**
      - **Stage Files:**

         ```bash
         git add .
         ```

      - **Commit Message Format:**  
         `type: (jiraID) description`
      - **Example:**

         ```bash
         git commit -m "test: (GX3-123) add login tests"
         ```

   3. **Sync Your Branch**

      - Update with the latest changes from `QA`:

         ```bash
         git pull origin QA
         ```

   4. **Push Your Branch**

      - Push your branch to the remote repository:

         ```bash
         git push origin branch-name
         ```

   5. **Open a Pull Request (PR)**

      - Use the predefined PR template.
      - Include **test evidence** (screenshots, Allure reports, or pipeline links) in the "Test Results" section.

   6. **Review and Merge**

      - The team will review your PR. After approval, it will be merged into `QA`.

---

## CI/CD Integration

The project uses a CI/CD pipeline to ensure tests run on every commit or pull request.

1. **Pipeline Stages**:
   - Install dependencies
   - Lint and format code
   - Execute test cases
   - Generate and publish Allure reports

2. **Configuration**:
   - `.gitlab-ci.yml` or `.github/workflows/playwright.yml` for CI/CD workflows.
   - Ensure environment variables for secret keys and credentials are configured in the pipeline.

---

## Reporting with Allure

Allure is used for comprehensive test reporting.

1. **Generate Allure reports**

   ```bash
   allure generate ./allure-results --clean -o ./allure-report
   ```

2. **Serve the report**

   ```bash
   allure open ./allure-report
   ```

---

## Test Development Strategies and Naming Conventions

### Strategies

- **Arrange-Act-Assert (AAA)**: Structure tests into clear sections.
- **Reusable Components**: Minimize duplication by abstracting common actions into utility functions.

### Naming Conventions

- Test files: `feature-name.spec.ts`.
- Test cases: Use descriptive titles that reflect the expected behavior.
- Variables: Use camelCase for local variables and CONSTANT_CASE for constants.

---

Feel free to update or extend this README as the project evolves to maintain clarity and usefulness for all contributors.
