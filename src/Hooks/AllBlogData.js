import { useState } from "react";
import img1 from "../../public/assets/img/blog/01.png";
import img2 from "../../public/assets/img/blog/02.png";
import img3 from "../../public/assets/img/blog/03.png";


const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Swag by HactoberFest",
      commentor: "Muneeb",
      date: "21 April 2023",
      tag: `hacktoberfest`,
      description1:
        "To support open-source contribution a program 'HactoberFest' is held by DEV and Digital Ocean in collaboration with Github every year. GitHub is a version control platform where you can share your projects and can also contribute to other projects, for that you have to open a pull request.",
      description2:
        "HactoberFest is an event based on opening 4 pull request to encourage open source contribution. And as an award by DEV and Digital Ocean swags are given to them. These swags includes tree/t-shirt, stickers and badges.",
      description3:
        "To participate, register at the official site: hacktoberfest.digitalocean.com Make sure you are connected with your GitHub account. Then, submit at least four pull-request (PRs) to any public GitHub repository.",
      
    },
    {
      id: 2,
      img: img2,
      title: "Goodbye Create React App",
      commentor: "Muneeb",
      date: "14 January 2023",
      tag: `React`,
      description1:
        "React is a popular JavaScript library that helps you build user interfaces for websites and apps. When starting a new project with React, you may wonder if you should use a framework or not. React just released its new documentation React Docs and the creators of React recommend using a framework, and in this article, we'll see why.",
      description2:
        "Frameworks are pre-built sets of tools and features that can help you build websites and apps faster and more efficiently. They provide features like routing (helping you move between different parts of your site or app), data fetching (helping you get data from a server), and generating HTML (helping your site or app load faster).",
      description3:
        "While you can use React without a framework, building a project fully with React can lead to problems as your project grows. As you add more features, your JavaScript code can become larger, leading to slower load times. You may also need to figure out how to split code for every route individually or encounter server-client network waterfalls that make your app feel very slow. This is why Svelte has SvelteKit, Vue has Nuxt, and other frameworks exist to solve these problems.",
      description4:
        "React frameworks solve these problems by default, with no extra work from your side. They let you start with a lean codebase and scale your app with your needs. Each React framework has a community, so finding answers to questions and upgrading tooling is easier. Frameworks also give structure to your code, helping you and others retain context and skills between different projects.",
    },
    {
      id: 3,
      img: img3,
      title: "Web Developer? Terms you should understand!",
      commentor: "junad",
      date: "9 January 2023",
      tag: `webdev,codenewbie,programming,beginners`,
      description1:
        "The Tech Industry is full of peculiar words, to which anyone can get confused. Web development is no rule-breaking, and if you need to make it as a programmer, you need to be having some knowledge of the industry lingo. This list will give you a good introduction to some of the most important terms that you’ll come across when working in web development.",
      description2:
        "Code: Code is essentially what web developers write using programming languages. \n Bug: A bug is an error that prevents a website or app from running as it should.\nDebugging: Debugging is the process of identifying and dealing with BUGs.Debugging is a multistep process: the developer locates the problem, isolates the source and then gets to work on fixing it.\nAPI:“Application Program Interface” An API enables two different programs to communicate with each other by making some parts of the website code available to developers.",
      
    },
    
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
