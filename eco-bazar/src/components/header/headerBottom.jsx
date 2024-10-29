import React from "react";

const headerItems = [
  {
    id: 1,
    title: "Veg",
    subItems: [
      { id: 1, title: "Cabbage" },
      { id: 2, title: "Carrot" },
      { id: 2, title: "Cucumber" },
    ],
  },
  {
    id: 2,
    title: "Fruits",

    subItems: [
      { id: 1, title: "Apple" },
      { id: 2, title: "Banana" },
      { id: 2, title: "Orange" },
    ],
  },
];

const HeaderBottom = () => {
  return (
    <div className="container mx-auto">
      <ul className="flex items-center">
        {headerItems.map((item) => (
          <HeaderItems title={item.title} subItems={item.subItems} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderBottom;

const HeaderItems = ({ title, subItems  })  => {
  return (
    <li className="mr-4 group relative">
      {title}

      <div className="hidden group-hover:block absolute bg-white shadow-md">
        <ul>
          {subItems.map((subItem) => (
            <li>{subItem.title}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};
