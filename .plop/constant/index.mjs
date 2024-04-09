export default (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator("constant", {
    description: "Create a constant",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is constant name ?",
        /**
         * validate
         * @param {string} value
         * @returns {boolean | string}
         */
        validate: (value) => {
          if (value) return true;

          return "name is required";
        },
      },
    ],
    actions: (data) => {
      const path = `../../app/constants`;
      const actions = [
        {
          type: "add",
          path: `${path}/{{camelCase name}}.ts`,
          templateFile: "./constant.ts.hbs",
        },
      ];
      return actions;
    },
  });
};
