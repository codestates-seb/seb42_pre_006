import React from "react";
import SiteMapNav from "./SiteMapNav";

const SITE_MAPS = [
  {
    title: "Stack Overflow",
    items: [
      {
        text: "Questions",
        url: "/questions",
      },
      {
        text: "Help",
        url: "/",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        text: "Teams",
        url: "/",
      },
      {
        text: "Advertising",
        url: "/",
      },
      {
        text: "Collectives",
        url: "/",
      },
      {
        text: "Talent",
        url: "/",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        text: "About",
        url: "/",
      },
      {
        text: "Press",
        url: "/",
      },
      {
        text: "Work Here",
        url: "/",
      },
      {
        text: "Legal",
        url: "/",
      },
      {
        text: "Privacy Policy",
        url: "/",
      },
      {
        text: "Terms of Service",
        url: "/",
      },
      {
        text: "Contact Us",
        url: "/",
      },
      {
        text: "Cookie Settings",
        url: "/",
      },
      {
        text: "Cookie Policy",
        url: "/",
      },
    ],
  },
  {
    title: "Stack Exchange Network",
    items: [
      {
        text: "Technology",
        url: "/",
      },
      {
        text: "Culture & recreation",
        url: "/",
      },
      {
        text: "Life & arts",
        url: "/",
      },
      {
        text: "Science",
        url: "/",
      },
      {
        text: "Professional",
        url: "/",
      },
      {
        text: "Business",
        url: "/",
      },
      {
        text: "Api",
        url: "/",
      },
      {
        text: "Data",
        url: "/",
      },
    ],
  },
];

function SiteMap() {
  return (
    <nav className="flex ">
      {SITE_MAPS.map((nav, index) => (
        <SiteMapNav key={index}>
          <SiteMapNav.Title>{nav.title}</SiteMapNav.Title>
          <SiteMapNav.Children>
            {nav.items.map((item, itemIndex) => (
              <SiteMapNav.Item url={item.url} key={itemIndex}>
                {item.text}
              </SiteMapNav.Item>
            ))}
          </SiteMapNav.Children>
        </SiteMapNav>
      ))}
    </nav>
  );
}

export default SiteMap;
