export const strings = {
  routes: {
    landing: {
      name: "landing",
    },
    overview: {
      name: "overview",
      children: {
        atoms: { name: "atoms" },
        molecules: { name: "molecules" },
        organisms: { name: "organisms" },
      },
    },
  },
  organisms: {
    atomsOverview: {
      title: "Atoms",
      subtitle:
        "Atoms include basic HTML tags like inputs, labels, and buttons",
    },
    moleculesOverview: {
      title: "Molecules",
      subtitle:
        "Molecules are relatively simple groups of UI elements/atoms functioning together as a unit",
    },
    organismsOverview: {
      title: "Organisms",
      subtitle:
        "Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms",
    },
  },
};
