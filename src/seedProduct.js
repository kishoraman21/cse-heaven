import {connect} from "./dbConfig/connectDB.js";
import Product from "./models/product.js";

async function seedProducts() {
  await connect();

  await Product.deleteMany();

  const products = [
    // 🔹 SINGLE FILE PRODUCTS
    {
      title: "C Handwritten Notes",
      category: "c",
      price: 199,
      files: ["c/c-handwriteen"],
    },
    {
      title: "Python Handwritten Notes",
      category: "python",
      price: 199,
      files: ["python/python-handwritten-notes"],
    },
    {
      title: "OOPS Handwritten Notes",
      category: "oops",
      price: 199,
      files: ["oops/oops-handwritten-notes"],
    },
    {
      title: "SQL Handwritten Notes",
      category: "sql",
      price: 199,
      files: ["sql/sql-handwritten-notes"],
    },
    {
      title: "Leetcode Top 170 Problems",
      category: "leetcode-top-170-problems",
      price: 199,
      files: ["leetcode-top-170-problems/dsa-170-imp-notes"],
    },

    // 🔹 DSA PACK
    {
      title: "DSA Complete Notes Pack",
      category: "dsa",
      price: 499,
      files: [
        "dsa/dsa-cheatnotes",
        "dsa/dsa-cheatsheets",
        "dsa/algo-notes",
        "dsa/algorithm-cheatsheets",
        "dsa/intro-to-algos",
        "dsa/algo-interview",
        "dsa/timecomplexity-of-algos",
      ],
    },

    // 🔹 HTML / CSS / JS PACK
    {
      title: "HTML, CSS & JavaScript Notes Pack",
      category: "html-css-js",
      price: 399,
      files: [
        "html-css-js/html-cheatsheet",
        "html-css-js/js-notes-beginners",
        "html-css-js/js-notes",
        "html-css-js/css-cheatsheet",
        "html-css-js/js-cheatseet",
      ],
    },

    // 🔹 JAVA PACK
    {
      title: "Java Complete Notes Pack",
      category: "java",
      price: 399,
      files: [
        "java/java-notes",
        "java/java-handwritten-notes",
        "java/java-intro",
      ],
    },

    // 🔹 LEETCODE PACK
    {
      title: "Leetcode Interview Preparation Pack",
      category: "leetcode",
      price: 399,
      files: [
        "leetcode/leetcode-most-asked-questions",
        "leetcode/amazon-leetcode",
        "leetcode/adobe-leetcode",
        "leetcode/logic-building",
      ],
    },

    // 🔹 MERN STACK PACK
    {
      title: "MERN Stack Handwritten Notes",
      category: "mern",
      price: 499,
      files: [
        "mern/node.js-pdf",
        "mern/reactjs-handwritten-notes",
        "mern/mongodb-handwritten-notes",
        "mern/express-handwritten-notes",
        "mern/express-js-notes",
      ],
    },

    // 🔹 VSCODE PACK
    {
      title: "VS Code Shortcuts & Cheatsheets",
      category: "vscode",
      price: 149,
      files: [
        "vscode/vs-code-cheatsheet-compressed",
        "vscode/vs-code-shortcuts",
      ],
    },
  ];

  await Product.insertMany(products);

  console.log("✅ Products seeded successfully");
  process.exit(0);
}

seedProducts().catch((err) => {
  console.error(err);
  process.exit(1);
});
