export const defaultLayout = "normal";

export const naiveThemeOverrides = {
  common: {
    primaryColor: "#316C72FF",
    primaryColorHover: "#316C72E3",
    primaryColorPressed: "#2B4C59FF",
    primaryColorSuppl: "#316C72E3",

    infoColor: "#2080F0FF",
    infoColorHover: "#4098FCFF",
    infoColorPressed: "#1060C9FF",
    infoColorSuppl: "#4098FCFF",

    successColor: "#18A058FF",
    successColorHover: "#36AD6AFF",
    successColorPressed: "#0C7A43FF",
    successColorSuppl: "#36AD6AFF",

    warningColor: "#F0A020FF",
    warningColorHover: "#FCB040FF",
    warningColorPressed: "#C97C10FF",
    warningColorSuppl: "#FCB040FF",

    errorColor: "#D03050FF",
    errorColorHover: "#DE576DFF",
    errorColorPressed: "#AB1F3FFF",
    errorColorSuppl: "#DE576DFF",
  },
};

export const basePermissions = [
  {
    code: "ExternalLink",
    name: "外链(可内嵌打开)",
    type: "MENU",
    icon: "i-fe:external-link",
    order: 98,
    enable: true,
    show: true,
    children: [
      {
        code: "ShowDocs",
        name: "项目文档",
        type: "MENU",
        path: "https://docs.isme.top/web/#/624306705/188522224",
        icon: "i-me:docs",
        order: 1,
        enable: true,
        show: true,
      },
    ],
  },
];
