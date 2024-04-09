export default (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator("hook", {
    description: "Create a hook",
    prompts: [
      {
        type: "list",
        name: "atomic",
        message: "Where are the hook used ?",
        choices: [{ name: "hooks/utils", value: "utils" }],
      },
      {
        type: "input",
        name: "name",
        message: "What is hook name ? (exp. useXXX)",
        /**
         * validate
         * @param {string} value
         * @returns {boolean | string}
         */
        validate: (value) => {
          if (value.startsWith("use")) return true;

          return "name is valid. (exp. useXXX)";
        },
      },
    ],
    actions: (data) => {
      const path = `../../app/hooks/${data.atomic}`;
      const actions = [
        {
          type: "add",
          path: `${path}/{{camelCase name}}.ts`,
          templateFile: "./hook.ts.hbs",
        },
      ];
      return actions;
    },
  });
};
