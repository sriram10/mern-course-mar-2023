# Simple eCommerce App

## App folder structure
- commerce-ui (Client) (React App)
  - Create using - Vite
  - package.json
  - src
- commerce-api (Server) (Express App)
  - package.json
  - src
    - models (data dependencies)
    - routes
      - module (context-based-folders)
        - module.controller.js
        - module.router.js
    - settings.js
    - server.js
- package.json (to run both client and server using single script)
  - this will not contain any dependencies
