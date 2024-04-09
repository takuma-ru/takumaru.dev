export default (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "list",
        name: "atomic",
        message: "Where are the components used ?",
        choices: [
          { name: "component/common", value: "common" },
          { name: "component/layouts", value: "layouts" },
          { name: "top page components", value: "routes/top" },
          { name: "confirm page components", value: "routes/confirm" },
          { name: "message page components", value: "routes/message" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is component name ?",
        validate: (value) => {
          if (value) return true;

          return "name is required";
        },
      },
    ],
    actions: (data) => {
      const path = `../../app/components/${data.atomic}`;
      const actions = [
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: "./component.tsx.hbs",
        },
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
          templateFile: "./component.module.scss.hbs",
        },
      ];

      return actions;
    },
  });
};
