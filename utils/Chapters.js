module.exports = {
  "1": [
    {
      "id": 1,
      "title": "Introduction to Programming",
      "content": "Introduction to Programming in C is the first chapter that teaches the basics of computer programming. It covers fundamental concepts like variables, data types, and how to write simple code. You'll learn how to use C to give instructions to a computer, solving problems step by step. This chapter sets the foundation for the rest of your programming journey, helping you create programs that perform tasks and solve real-world problems. It's like learning the alphabet before writing sentences in the language of computers.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Introduction to programming languages.Types of programming languages: low-level, mid-level, high-level programming languages."
        },
        {
          "id": "1.2",
          "name": "Algorithm � concept of algorithm, pseudo-code convention like � assignment statements develop algorithm to solve simple problems.Flowchart - concept of flowchart, symbols of flowchart"
        }
      ]
    },
    {
      "id": 2,
      "title": "Fundamentals of C",
      "content": "Certainly! The fundamentals of C programming involve learning the basic building blocks of the language. These include variables, which store data, and operations like arithmetic and logical calculations. C also includes control structures like loops and conditional statements for program flow. Functions are essential for organizing code, and libraries provide pre-written functions for various tasks. Lastly, C is known for its simplicity and efficiency, making it a popular choice for system-level programming.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "History of C, features of C.Structure of C program.Header files,Main function.Character set,Data types in C."
        },
        {
          "id": "2.2",
          "name": "Token, constant, variable, keywords and identifiers in C.Rules for constructing variable names,declaration of variables"
        },
        {
          "id": "2.3",
          "name": "Symbolic constant with example.Basic Input/Output:-Input and Output statements using printf ()and scanf(),Character Input/Output statements using getchar() and putchar(),formatted input and formatted output"
        }
      ]
    },
    {
      "id": 3,
      "title": "Operators and Expression",
      "content": "Operators in C are symbols or special characters used to perform operations on variables and values. They include arithmetic operators like + (addition) and - (subtraction), comparison operators like == (equality check), and logical operators like && (logical AND). Expressions are combinations of variables, values, and operators that produce a result. For example, 'x + y' is an expression that adds the values of variables x and y. Understanding operators and expressions is fundamental to writing C programs and manipulating data efficiently.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Concept of operator, operand, unary and binary operator.Arithmetic operator.Relational and logical operator"
        },
        {
          "id": "3.2",
          "name": "Assignment and equality operator.Conditional operator.Bitwise operator"
        },
        {
          "id": "3.3",
          "name": "Unary operator:++ and - -.Integer and float conversion, type conversion in expression.Hierarchy of operations"
        }
      ]
    },
    {
      "id": 4,
      "title": "Control Structure",
      "content": "In C programming, control structures are essential for directing the flow of your code. There are three main types: conditional statements, loops, and function calls. Conditional statements, like if and switch, help you make decisions based on conditions, allowing your program to take different paths. Loops, such as for,while, and do-while, enable repetitive tasks, executing a block of code multiple times. Function calls allow you to reuse code by encapsulating it in functions that can be called whenever needed. Understanding and using these control structures efficiently is crucial for building effective and organized C programs.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Decision making and branching control structure-: if statement, if else,else if,else if ladder, Nested if else,switch"
        },
        {
          "id": "4.2",
          "name": "Looping control structure-for loop,while loop,do-while loop,nesting of loop, break,continue and goto statement.Comparison of while and do-while loop"
        }
      ]
    },
    {
      "id": 5,
      "title": "Array and String",
      "content": " Arrays and strings are fundamental concepts in C programming. An array is a collection of elements of the same data type, stored in contiguous memory locations. You can access individual elements using their index. Strings, on the other hand, are essentially arrays of characters, terminated by a null ('\u0000') character. They are used to represent text and can be manipulated using various string functions like strcpy() and strlen(). Both arrays and strings are crucial for storing and processing data efficiently in C, making them essential building blocks for many programs. Understanding how to work with them is essential for any C programmer.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Array & Need of array, Definition Array declaration, initialization and accessing array element.Array elements in memory, Bound checking Program for finding largest, smallest element and to perform searching and sorting operation on one dimensional array"
        },
        {
          "id": "5.2",
          "name": "Two dimensional array firstly Declaration and initialization of two dimensional array and secondly Program to store and display two dimensional array elements."
        },
        {
          "id": "5.3",
          "name": "String Declaration and initialization of string variable. Reading string from terminal Writing string to screen String related library function strlen(), strcpy(),strcat(),strcmp().simple programs on string using library functions,to re verse string,to check whether string is palindrome"
        }
      ]
    },
    {
      "id": 6,
      "title": "User defined functions",
      "content": "User-defined functions in C are custom blocks of code created by the programmer to perform specific tasks. These functions help in organizing and simplifying code by breaking it into smaller, reusable parts. To create a user-defined function, you specify its name, define the input parameters it needs, and provide the code that carries out the desired task. Once defined, you can call this function from anywhere in your program to execute its code, reducing redundancy and making your code more modular and readable. User-defined functions are essential for enhancing code efficiency, maintainability, and reusability in C programming.",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Introduction to function-Need of function,Definition, Advantages of function.Function handling-Function declaration, Function definition, Function call"
        },
        {
          "id": "6.2",
          "name": "Different types of functions:- Function with no argument and no return value, Function with no argument and with return value, Function with argument and0020with return value.Storage classes and scope of variable:- storage classes -auto,static,extern,register scope and visibility of variables �local and global variable.recursion concept with example"
        }
      ]
    },
    {
      "id": 7,
      "title": "Structures and Union ",
      "content": "In C programming, structures and unions are used to group different data types together. A structure allows you to create a composite data type by defining a group of variables with unique names and various data types, which are stored in memory sequentially. This helps organize related data, making it easier to work with complex information. On the other hand, a union is similar to a structure but only stores one value at a time, sharing memory space among its members. This means that changing one member can affect the others. Structures are typically used when you need to store multiple pieces of data, while unions are useful when you want to save space and only need one value from a group of choices. Both structures and unions are essential tools for managing data efficiently in C.",
      "subtopics": [
        {
          "id": "7.1",
          "name": "Introduction to structure:- Definition ,Declaring and initialization of structure ,Accessing structure elements, Nested structure"
        },
        {
          "id": "7.2",
          "name": "Union-Introduction to union, Syntax with example.recursion concept with example"
        }
      ]
    },
    {
      "id": 8,
      "title": "Pointers",
      "content": "Pointers in C are variables that store memory addresses rather than actual data. They are essential for efficient memory management and accessing data indirectly. By using pointers, you can manipulate data in memory directly, making them a powerful tool in C programming. To declare a pointer, you specify the data type it points to, like int or char. You can access the value at the memory location it points to using the dereference operator (*). However, mishandling pointers can lead to memory-related errors like segmentation faults, so it's crucial to use them carefully. Mastering pointers is a fundamental skill for C programmers, enabling dynamic memory allocation, data structures, and more complex operations. ",
      "subtopics": [
        {
          "id": "8.1",
          "name": "Introduction to pointer:-Need of pointer, Definition, Declaration and initialization of pointer.Accessing variables using pointer.Advantages of pointers"
        }
      ]
    },
    {
      "id": 9,
      "title": "File Input/Output",
      "content": "File input/output in C allows you to read and write data to files on your computer. You can think of a file as a storage container for information. To read from a file, you open it, specify the data type you expect, and use functions like fscanf()  to retrieve data. For writing to a file, you also open it, provide the data you want to save using fprintf() , and then close the file. These operations are essential for storing and retrieving information, making them crucial in various programming tasks.",
      "subtopics": [
        {
          "id": "9.1",
          "name": "file operation-open, close, read and write (using fgetc() ,fputc())."
        },
        {
          "id": "9.2",
          "name": "file opening modes"
        }
      ]
    }
  ],
  "2": [
    {
      "id": 1,
      "title": "Introduction to JavaScript",
      "content": "JavaScript is a versatile programming language that powers the dynamic behavior of websites. Developed by Netscape in the mid-1990s, it has evolved significantly since its inception. Despite its name, JavaScript bears little resemblance to Java, as it's a distinct language. To start working with JavaScript, you'll need to set up an environment which can be facilitated by Integrated Development Environments (IDEs) or directly through Browser Developer Tools. These tools allow you to write and execute your JavaScript code. Understanding variables and data types is crucial, involving the declaration of variables using 'var', 'let', or 'const', and recognizing data types such as Number, String, Boolean, and Object, among others. Furthermore, JavaScript employs operators for tasks like arithmetic, comparison, and logical operations, with expressions and statements forming the building blocks of code execution. This foundational knowledge is essential for harnessing the full potential of JavaScript in web development.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "What is JavaScript? History and Evolution of JavaScript JavaScript vs. Java"
        },
        {
          "id": "1.2",
          "name": "Setting Up a JavaScript Environment Integrated Development Environments (IDEs) Browser Developer Tools Writing and Running First JavaScript Code"
        },
        {
          "id": "1.3",
          "name": "Variables and Data Types Declaring Variables (var, let, const) Data Types (Number, String, Boolean, Object, etc.) Type Conversion and Coercion"
        },
        {
          "id": "1.4",
          "name": "1.4: Operators and Expressions Arithmetic, Comparison, Logical Operators Expressions and Statements"
        }
      ]
    },
    {
      "id": 2,
      "title": "Control Flow and Functions",
      "content": "Control flow and functions are fundamental concepts in JavaScript, a versatile programming language commonly used for web development. In JavaScript, control flow involves the way the program executes instructions, and functions are blocks of reusable code that perform specific tasks. Functions can be defined with parameters (input values) and can return values as output. They also have their own scope, meaning variables declared within a function are local and not accessible outside of it. Additionally, JavaScript supports arrow functions, which provide a more concise syntax compared to traditional function expressions. Arrow functions have some key differences from regular functions, particularly in how they handle the 'this' keyword and lack their own 'arguments' object. Understanding these aspects of control flow and functions is crucial for effective JavaScript programming.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Conditional Statements if, else if, else switch case"
        },
        {
          "id": "2.2",
          "name": "Loops for, while, do-while loops Loop Control Statements (break, continue)"
        },
        {
          "id": "2.3",
          "name": "Functions Defining Functions Parameters and Arguments Return Values Function Scope"
        },
        {
          "id": "2.4",
          "name": "Arrow Functions and Anonymous Functions Arrow Function Syntax Differences between Arrow Functions and Traditional Functions"
        }
      ]
    },
    {
      "id": 3,
      "title": "Data Structures and Objects",
      "content": "Data Structures and Objects in JavaScript are fundamental components for organizing and managing data within the language. JavaScript, denoted as 1.1, is a versatile programming language commonly used for web development. In terms of data structures, Arrays (3.1) play a pivotal role, allowing the storage and manipulation of collections of values. They offer an array of methods such as push, pop, and slice for adding, removing, and extracting elements efficiently. Additionally, arrays can be traversed using loops or higher-order functions to perform operations on each element. Objects (3.2), on the other hand, are dynamic entities capable of holding key-value pairs, which can represent real-world entities or concepts. They can be created using object literals or through constructors and prototypes for a more structured approach. Objects also possess properties and methods, enabling encapsulation of data and behaviors. Furthermore, JavaScript Object Notation (JSON) (3.3) provides a standardized format for data interchange. It employs a simple syntax and structure, making it easily readable by both humans and machines. JSON facilitates seamless parsing and stringifying operations, enabling the transmission and storage of data in a concise and portable manner.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "3.1: Arrays Creating and Manipulating Arrays Array Methods (push, pop, slice, etc.) Iterating through Arrays"
        },
        {
          "id": "3.2",
          "name": "Objects Creating Objects Object Properties and Methods Object Constructors and Prototypes"
        },
        {
          "id": "3.3",
          "name": "JSON (JavaScript Object Notation) Syntax and Structure Parsing and Stringifying JSON"
        }
      ]
    },
    {
      "id": 4,
      "title": "DOM Manipulation and Events",
      "content": "JavaScript is a versatile programming language commonly used for web development. It operates within a browser environment and enables dynamic interactivity on websites. Central to JavaScript is the Document Object Model (DOM), a hierarchical representation of a web page's structure. Through JavaScript, developers can access and manipulate elements within this structure, allowing for real-time updates and modifications to a webpage's content. This involves techniques like altering text content using properties like innerText and innerHTML, as well as dynamically adding or removing elements. Additionally, JavaScript facilitates event handling, where actions like clicks, submissions, or keystrokes trigger responses in the form of event listeners. Understanding event types and propagation is crucial for creating responsive and interactive web applications. Overall, JavaScript's proficiency in DOM manipulation and event handling is essential for building engaging and user-friendly web experiences.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Introduction to the DOM (Document Object Model) What is the DOM?Accessing DOM Elements"
        },
        {
          "id": "4.2",
          "name": "Event Handling Event Listeners Event Types (click, submit, keyup, etc.) Event Propagation"
        },
        {
          "id": "4.3",
          "name": "Modifying DOM Elements Changing Content (innerText, innerHTML) Adding and Removing Elements"
        }
      ]
    },
    {
      "id": 5,
      "title": "Asynchronous JavaScript",
      "content": "Asynchronous JavaScript refers to the capability of JavaScript to execute tasks concurrently, allowing it to handle multiple operations simultaneously. This is vital for tasks that may take time to complete, such as fetching data from a server or performing complex calculations. To manage asynchronous operations, JavaScript offers several techniques. Firstly, callback functions (5.1) are used to ensure that a specific task is executed once a preceding task is completed. This is a fundamental approach but can lead to callback hell, making the code hard to read and maintain. Promises (5.2) provide a more structured solution. They represent a future value, allowing cleaner handling of asynchronous code. Promises can be chained together for sequential execution. Finally, Async/Await (5.3) is a modern syntax introduced in ECMAScript 2017 that simplifies working with asynchronous code. It allows developers to write code that looks synchronous while actually being asynchronous under the hood. Additionally, Async/Await provides an elegant way to handle errors in asynchronous operations. These techniques collectively empower JavaScript developers to efficiently manage asynchronous tasks in their applications.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Callback Functions Handling Asynchronous Code with Callbacks"
        },
        {
          "id": "5.2",
          "name": "Promises Creating and Consuming Promises Chaining Promises"
        },
        {
          "id": "5.3",
          "name": "Async/Await Working with Async/Await Syntax Error Handling with Async/Await"
        }
      ]
    },
    {
      "id": 6,
      "title": "Advanced JavaScript Concepts",
      "content": "Advanced JavaScript Concepts encompass a range of crucial topics for proficient JavaScript developers. At 1.1, it delves into the fundamentals, elucidating JavaScript as a versatile, high-level programming language commonly used for web development. Moving forward, section 6.1 delves into the critical concepts of Closures and Scope. This involves understanding Lexical Scope, which refers to the scope determined by the placement of variables in the source code, and delves into Closure Use Cases, which enables the creation of private variables and functions, aiding in encapsulation and data privacy. Following this, 6.2 addresses Modules and ES6 Imports/Exports. Here, it covers the significance of organizing code with Modules, which promotes maintainability and scalability, and expounds on Importing and Exporting, which facilitate the seamless integration of code across different files and projects. Lastly, 6.3 delves into Error Handling and Debugging. This section encompasses try-catch Blocks, a pivotal construct for handling exceptions, and delves into Debugging Techniques and Tools, essential for identifying and rectifying errors in complex codebases. These advanced concepts collectively form a robust foundation for proficient JavaScript development, enabling developers to build robust, scalable, and maintainable applications.",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Closures and Scope Understanding Lexical Scope Closure Use Cases"
        },
        {
          "id": "6.2",
          "name": "Modules and ES6 Imports/Exports Organizing Code with Modules Importing and Exporting"
        },
        {
          "id": "6.3",
          "name": " Error Handling and Debugging try-catch Blocks Debugging Techniques and Tools"
        }
      ]
    }
  ],
  "3": [
    {
      "id": 1,
      "title": "Introduction to CSS",
      "content": "CSS, short for Cascading Style Sheets, plays a pivotal role in web development by serving as the language used to style and format the appearance of web pages. It accomplishes this by allowing developers to define how elements on a webpage should be presented, including aspects like colors, fonts, spacing, and layout. One of its core principles is the separation of content and presentation, ensuring that the structure and content of a webpage remain distinct from its visual design. CSS follows a specific syntax involving selectors, properties, and values, where selectors target HTML elements and apply specific styles using properties and values. The concept of cascading and specificity helps determine which styles take precedence when conflicts arise. Additionally, developers can implement CSS in various ways, such as inline, internal, or external stylesheets, each with its own advantages and drawbacks. Mastering CSS and adhering to best practices for organization are essential skills for creating visually appealing and responsive websites.)",
      "subtopics": [
        {
          "id": "1.1",
          "name": "What is CSS? Importance of CSS in web development Separation of content and presentation"
        },
        {
          "id": "1.2",
          "name": "CSS Syntax Selectors, properties, and values Cascading and specificity"
        },
        {
          "id": "1.3",
          "name": " Inline vs. Internal vs. External CSS Pros and cons of each approach Best practices for CSS organization"
        }
      ]
    },
    {
      "id": 2,
      "title": "Basic Styling with CSS",
      "content": "Basic styling with CSS involves applying styles to HTML elements to enhance the visual presentation of a webpage. This encompasses a range of aspects including backgrounds and colors, allowing for customization of the visual backdrop of elements. Fonts and text properties enable the modification of text appearance, providing options for size, style, and spacing. Borders and margins give structure and spacing around elements, while the box model, comprising padding, border, and margin, defines the space an element occupies on the page. Understanding box sizing is crucial, as it influences how elements interact within the layout. Display and positioning properties determine how elements are displayed on the page, with distinctions between block and inline elements. Additionally, relative, absolute, fixed, and static positioning options enable precise control over the placement of elements within the webpage's layout. This comprehensive knowledge of CSS basics forms the foundation for creating visually appealing and well-structured web pages.",
      "subtopics": [
        {
          "id": "2.1",
          "name": " Applying Styles Backgrounds and colors Fonts and text properties Borders and margins"
        },
        {
          "id": "2.2",
          "name": "Box Model Understanding padding, border, margin Box sizing and its impact on layout"
        },
        {
          "id": "2.3",
          "name": "Display and Positioning Block vs. inline elements Relative, absolute, fixed, and static positioning"
        }
      ]
    },
    {
      "id": 3,
      "title": "Layout and Responsive Design ",
      "content": "Layout and responsive design are fundamental concepts in web development. In terms of JavaScript (1.1), it's a versatile programming language commonly used for enhancing interactivity on websites. Moving on to creating layouts (3.1), developers have traditionally utilized techniques like floats and clear for positioning elements on a page. However, modern practices increasingly favor Flexbox and Grid layouts, which offer more intuitive and flexible ways to arrange content. When it comes to responsive design principles (3.2), media queries are employed to adjust the layout based on different screen sizes, ensuring a seamless user experience across devices. A mobile-first approach is recommended, emphasizing the importance of designing for mobile devices first and then scaling up for larger screens. Finally, in the context of Flexbox and Grid (3.3), developers can employ advanced techniques and create complex grid systems to achieve intricate and visually appealing layouts on web pages. These techniques collectively empower developers to craft websites that are both visually engaging and user-friendly on a variety of devices.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Creating Layouts Floats and clear Flexbox and Grid layout"
        },
        {
          "id": "3.2",
          "name": "Responsive Design Principles Media queries for different screen sizes Mobile-first approach"
        },
        {
          "id": "3.3",
          "name": "Flexbox and Grid Advanced layout techniques Creating complex grid systems"
        }
      ]
    },
    {
      "id": 4,
      "title": "Advanced CSS Techniques",
      "content": "Advanced CSS techniques encompass a range of powerful tools and methods for enhancing the visual and interactive aspects of a website. Pseudo-classes and pseudo-elements, denoted by selectors like :hover or :nth-child, allow for dynamic styling based on user actions or element positions. These can significantly elevate user experience and engagement. Transitions and animations introduce motion to elements, achieved through the use of keyframes and timing functions, enabling smooth and engaging visual effects. Transformations and 3D effects, including rotations, scaling, skewing, and translating, provide the means to manipulate elements in space, creating a sense of depth and dynamism within a webpage. Additionally, CSS allows for the creation of impressive 3D effects, further pushing the boundaries of web design. These advanced techniques collectively offer web developers a rich toolkit to craft highly interactive and visually compelling user interfaces.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Pseudo-classes and Pseudo-elements  :hover, :active, :nth-child, etc. ::before, ::after, ::first-line, etc."
        },
        {
          "id": "4.2",
          "name": "Transitions and Animations Adding motion to elements Keyframes and timing functions"
        },
        {
          "id": "4.3",
          "name": " Transformations and 3D Effects Rotate, scale, skew, and translate Creating 3D effects with CSS"
        }
      ]
    },
    {
      "id": 5,
      "title": "CSS Preprocessors and Frameworks",
      "content": "CSS preprocessors like Sass and Less are tools that enhance the capabilities of standard CSS by introducing features like variables, nesting, and mixins. This allows for more efficient and maintainable stylesheets. Preprocessors require compilation to generate standard CSS files that browsers can interpret. On the other hand, CSS frameworks like Bootstrap and Foundation offer pre-built styles and components, enabling rapid development of responsive and visually appealing web applications. These frameworks serve as a foundation for building websites, offering a grid system, typography, and various UI components. Moreover, they are highly customizable, allowing developers to tailor the framework to specific project requirements and extend its functionality as needed. This combination of preprocessors and frameworks significantly streamlines the process of designing and styling web applications.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Introduction to Preprocessors (e.g., Sass, Less) Variables, nesting, and mixins Compiling preprocessors to CSS"
        },
        {
          "id": "5.2",
          "name": "CSS Frameworks (e.g., Bootstrap, Foundation) Utilizing pre-built styles and components Customizing and extending frameworks"
        }
      ]
    },
    {
      "id": 6,
      "title": " CSS Best Practices and Optimization",
      "content": "Content for Chapter 1 (Module 2)",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Code Organization and Maintainability CSS methodologies (e.g., BEM, SMACSS) Avoiding CSS anti-patterns"
        },
        {
          "id": "6.2",
          "name": "Performance Optimization Minification and concatenationReducing HTTP requests"
        }
      ]
    }
  ],
  "4": [
    {
      "id": 1,
      "title": "Introduction to web application",
      "content": " An introduction to web applications, a chapter in HTML, delves into the fundamental concept of creating dynamic and interactive websites. It explores how HTML, alongside other technologies like CSS and JavaScript, enables developers to build engaging web experiences. In this chapter, you'll learn how to structure web content, style it for a polished look, and incorporate scripts for interactivity. Understanding web applications is crucial for anyone aspiring to design modern websites that can respond to user input and offer rich, seamless experiences. This chapter serves as a foundational step towards mastering the art of web development. ",
      "subtopics": [
        {
          "id": "1.1",
          "name": " Basic web terminology-Web site, Web server, Web client,  Web page& Web browser "
        },
        {
          "id": "1.2",
          "name": " Web content-Static web content and dynamic web content &  Difference between static and dynamic web site "
        },
        {
          "id": "1.3",
          "name": " Different types of web sites- Informational web site, personal web site,  e-commerce web site, Commercial web site, Entertainment web site, Social networking site, Forum, blogs & Search engine, web portal "
        }
      ]
    },
    {
      "id": 2,
      "title": "Introduction to HTML and basic tags of HTML",
      "content": " HTML, which stands for HyperText Markup Language, is the foundation of web development. It's used to create the structure and content of web pages. HTML documents consist of various tags that define elements on a webpage. Basic HTML tags include <html> (denoting the beginning and end of an HTML document), <head> (containing metadata like the page title), and <body> (housing the visible content). You can use tags like <h1> for headings, <p> for paragraphs, and <a> for links. These fundamental tags help structure and display content on a webpage, forming the building blocks of web design. ",
      "subtopics": [
        {
          "id": "2.1",
          "name": " Introduction to HTML5 DOCTYPE , Character encoding , Components of HTML5-Elements,Tags,Attributes,  General structure of HTML document "
        },
        {
          "id": "2.2",
          "name": " Block level tags heading, paragraph, line break, horizontal rule, div, span, preformatted text, address, blockquotes,  header, footer, comment "
        },
        {
          "id": "2.3",
          "name": " Text level tag bold, italic, underline, small, sub, sup, kbd, ins, del special character entity "
        },
        {
          "id": "2.4",
          "name": "body tag"
        },
        {
          "id": "2.5",
          "name": " List ordered, unordered, definition and nested list "
        }
      ]
    },
    {
      "id": 3,
      "title": "Image and links in  HTML",
      "content": " In HTML, images and links are essential elements for enhancing web content. Images are used to display graphics, photos, and illustrations on web pages, making them visually appealing. You can insert images using the <img> tag, specifying the image source (URL) and optional attributes like alt text for accessibility.Links, on the other hand, allow users to navigate between web pages. They are created with the <a> tag, and you define the destination URL in the href attribute. By clicking on links, users can access different web pages, documents, or resources, creating a connected and interactive browsing experience. Images can also be linked to other pages, combining visuals and navigation. ",
      "subtopics": [
        {
          "id": "3.1",
          "name": " URL and anchor tag  URL, types of URL-absolute and relative URL , Anchor tag with href, target, download, title attributes "
        },
        {
          "id": "3.2",
          "name": " Linking document in same folder, in different folder, linking specific section in document, linking document on the web "
        },
        {
          "id": "3.3",
          "name": " Image img tag with height, src, width, alt attributes. "
        },
        {
          "id": "3.4",
          "name": " Image as link "
        },
        {
          "id": "3.5",
          "name": " Image map client side and server side image map using ismap, usemap tag applying style to image and link "
        }
      ]
    },
    {
      "id": 4,
      "title": "Tables and Forms",
      "content": " In HTML, tables are used to organize and display data in rows and columns. They consist of table elements like <table>, <tr> for rows, and <td> for individual cells. Tables help structure content neatly.HTML forms are used to collect user input, such as text, checkboxes, and radio buttons. Form elements like <form>, <input>, and <button> allow users to submit data. Forms are essential for interactive web pages and data collection. ",
      "subtopics": [
        {
          "id": "4.1",
          "name": " Creating table Table, TR,TH,TD and caption tag "
        },
        {
          "id": "4.2",
          "name": " Applying style to table "
        },
        {
          "id": "4.3",
          "name": "merging of rows and columns"
        },
        {
          "id": "4.4",
          "name": " Form<form> tag with action and method ,name attributes, difference between get and post method."
        },
        {
          "id": "4.5",
          "name": " Form fields input, text area, button, select, option, field set ,label , legend fields. <input>tag with types- text, checkbox, radio, date, email, search, number, password ,range ,submit, reset, button<input> tag with auto complete, autofocus, max length, min ,name, placeholder, required attributes"
        }
      ]
    },
    {
      "id": 5,
      "title": "Frames",
      "content": " In HTML, a frame refers to a way of dividing a web page into multiple sections or windows, each displaying a different HTML document. Frames were commonly used in the past to create layouts with separate scrollable areas. However, they are considered outdated and not recommended for modern web development. Instead, web developers now use more flexible and accessible techniques like CSS and responsive design to achieve desired page layouts, ensuring better compatibility and user experience across various devices and browsers.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Introduction to frames"
        },
        {
          "id": "5.2",
          "name": " <iframe> tag with src, height, name , width, src, doc, sandbox"
        },
        {
          "id": "5.3",
          "name": "Apply styles to frames"
        }
      ]
    },
    {
      "id": 6,
      "title": "Adding audio/video to web page and web site hosting",
      "content": "",
      "subtopics": [
        {
          "id": "6.1",
          "name": " Adding audio/video using audio, video and embed tag with src, height, width, auto play,  auto buffer, control, loop attributes."
        },
        {
          "id": "6.2",
          "name": " Publishing web site on Internet .Hiring web space, uploading files , accessing web site."
        }
      ]
    }
  ],
  "5": [
    {
      "id": 1,
      "title": "Concepts Of Object- Oriented Programming",
      "content": "Object-Oriented Programming (OOP) is a programming approach that revolves around the concept of objects. These objects represent real-world entities and encapsulate both data (attributes) and behavior (methods) related to them. In OOP, you organize your code into classes, which serve as blueprints for creating these objects. This promotes reusability and modularity, making it easier to manage and maintain large-scale projects. Additionally, OOP emphasizes concepts like inheritance, allowing one class to inherit attributes and methods from another, fostering code extensibility and flexibility. Polymorphism is another crucial aspect, enabling objects to take on multiple forms, enhancing adaptability in diverse scenarios. Overall, OOP provides a structured and efficient way to model and interact with complex systems in programming.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Procedure Oriented Programming- concept ,characteristics, limitations"
        },
        {
          "id": "1.2",
          "name": "Object Oriented Programming- concept, characteristics, benefits"
        },
        {
          "id": "1.3",
          "name": "Difference between OOP and POP.Introduction to basic Concepts of Object-Oriented Programming-class, object, inheritance, polymorphism, data abstractions and encapsulation,message passing, dynamic binding"
        }
      ]
    },
    {
      "id": 2,
      "title": "Introduction to C++",
      "content": "C++ is a versatile programming language widely used for creating software applications. It builds upon the foundation of the C programming language, adding object-oriented features. This means that it organizes code into reusable objects, making it easier to manage complex tasks. C++ allows for both high-level abstractions and low-level memory manipulation, giving developers a powerful toolset. With its broad applicability, C++ finds applications in areas like game development, system software, and even resource-constrained environments. Learning C++ equips you with a valuable skillset for building a wide range of software solutions.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Structure of C++ Program,iostream file, I/O Operators -: cin, cout, Cascading of I/O Operators, Comments in C++.Tokens ,Keyword, Identifiers & Constants in C++"
        },
        {
          "id": "2.2",
          "name": "Data types"
        },
        {
          "id": "2.3",
          "name": "Variable, Declarations Of Variables, symbolic constant.Dynamic Initialization Of variables.Concept of Reference Variables"
        },
        {
          "id": "2.4",
          "name": "Operators in C++ -: Arithmetic ,logical, relational, assignment operators Scope resolution operator Memory management operators -: new and delete"
        },
        {
          "id": "2.5",
          "name": "Manipulators :- endl, setw, width,left, right, setfill, setprecision,fixed.Control Structures -: Branching structure - if, if-else, switch looping structure- for ,while and do-while loop"
        }
      ]
    },
    {
      "id": 3,
      "title": "Functions in C++",
      "content": "In C++, functions are blocks of code that perform specific tasks. They allow you to break down a program into smaller, manageable pieces. Functions take input values, called parameters, and can return an output, known as the return value. This makes code more organized and reusable, as you can call a function multiple times with different inputs. Functions also enhance the readability of your code, making it easier to understand and debug. Additionally, C++ supports both user-defined functions, which you create yourself, and built-in functions that are provided by the language, like those for mathematical calculations or string manipulations. Understanding functions is fundamental in writing efficient and modular C++ programs.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "The main () function.Function prototyping.Inline Functions"
        },
        {
          "id": "3.2",
          "name": "Call by reference.Return by reference.Function with Default arguments.Function Overloading "
        }
      ]
    },
    {
      "id": 4,
      "title": "Classes and Objects",
      "content": "Certainly! In C++, classes and objects are fundamental concepts used for organizing and modeling data. A class acts like a blueprint or a template that defines the structure and behavior of objects. It encapsulates data (attributes) and functions (methods) that operate on that data. An object, on the other hand, is an instance of a class. It is created from the class blueprint and represents a specific entity with its own unique data values. Think of a class as a recipe for creating objects, and each object as a distinct dish made using that recipe. This allows for efficient code organization, reusability, and the ability to model real-world entities in a program.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "C structures and Classes - Limitation of C structures, Extension to structures.Specifying a class � creation of class, objects, accessing class members, Visibility modifiers- public, private, protected"
        },
        {
          "id": "4.2",
          "name": "Defining member functions - Outside the class definition, Inside the class definition.Making an outside function inline"
        },
        {
          "id": "4.3",
          "name": "Nesting of member function.Private member functions.Static Data Members and Member Functions"
        },
        {
          "id": "4.4",
          "name": "Arrays of Objects"
        },
        {
          "id": "4.5",
          "name": "Objects as function arguments.Friendly functions-characteristics of friend function and implementation"
        }
      ]
    },
    {
      "id": 5,
      "title": "Constructors And Destructors",
      "content": "Certainly! In C++, constructors and destructors are special functions used in object-oriented programming. Constructors are like blueprints for creating objects from a class, and they are automatically called when an object is instantiated. They initialize the object's data members and set it up for use. Destructors, on the other hand, are called when an object goes out of scope or is explicitly deleted. They clean up any resources the object may have acquired during its lifetime, like memory or file handles. Constructors and destructors play a crucial role in managing the lifecycle of objects, ensuring they are properly set up and cleaned up as needed, which helps in writing robust and efficient code.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Constructors-need of constructor, definition, syntax, characteristic of constructor.Default Constructor.Parameterized constructors"
        },
        {
          "id": "5.2",
          "name": "Multiple constructors in a class.Constructors with Default Arguments"
        },
        {
          "id": "5.3",
          "name": "Dynamic Initialization of Objects.Copy Constructor"
        },
        {
          "id": "5.4",
          "name": "Dynamic Constructor.Destructors"
        }
      ]
    },
    {
      "id": 6,
      "title": "Operator Overloading",
      "content": "Operator overloading in C++ allows you to redefine the behavior of built-in operators (like +, -, *, /) for user-defined data types. This means you can make these operators work with your own custom classes or data structures, giving them more intuitive and natural syntax. For example, you can define how a custom class should behave when you add two objects using the + operator. This makes it easier to work with user-defined types, as you can use familiar operators to perform operations on them. Keep in mind that while overloading operators can make code more expressive, it should be used judiciously to maintain clarity and avoid confusion for other programmers.",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Defining operator overloading.Rules for operator overloading"
        },
        {
          "id": "6.2",
          "name": "Overloading Unary Operators.Overloading Binary Operators"
        }
      ]
    },
    {
      "id": 7,
      "title": "Inheritance",
      "content": "Inheritance in C++ is a fundamental concept that allows one class to inherit properties and behaviors from another class. This enables the creation of new classes based on existing ones, forming a hierarchy of related objects. The class that provides the properties is called the 'base' or 'parent' class, while the class inheriting those properties is known as the 'derived' or 'child' class. Through inheritance, the derived class gains access to the member variables and functions of the base class, which can be used directly or overridden to customize behavior. This promotes code reusability and helps organize code in a logical and efficient manner.",
      "subtopics": [
        {
          "id": "7.1",
          "name": "Defining base class, Derived classes.Derivation Modes- public, private, protected"
        },
        {
          "id": "7.2",
          "name": "Single Inheritance.Multilevel Inheritance.Multiple Inheritance.Hierarchical Inheritance.Hybrid Inheritance"
        },
        {
          "id": "7.3",
          "name": "Making a private member inheritable.Virtual Base Class.Constructors in Derived Class"
        }
      ]
    },
    {
      "id": 8,
      "title": "Pointers, Virtual Functions",
      "content": "In C++, Pointers are like special variables that hold memory addresses. They allow us to directly manipulate and access data stored in memory. Virtual Functions, on the other hand, are a feature of object-oriented programming. They enable a base class to define a function that can be overridden by derived classes. This means that a derived class can provide its own implementation of a function defined in the base class. This is particularly useful for achieving polymorphism, where different objects can be treated in a uniform way, even if they belong to different classes. In simple terms, Pointers help us work with memory efficiently, while Virtual Functions allow us to create flexible and extensible code structures in C++.",
      "subtopics": [
        {
          "id": "8.1",
          "name": "Introduction to Pointers-declaration and initialization of pointers.Pointers to Objects"
        },
        {
          "id": "8.2",
          "name": "this Pointer.Pointers to Derived classes"
        },
        {
          "id": "8.3",
          "name": "Virtual Functions, Rules for virtual function.Pure Virtual Function and abstract class"
        }
      ]
    },
    {
      "id": 9,
      "title": "Exception Handling",
      "content": "Exception handling in C++ is a technique used to manage errors or exceptional situations that may occur during the execution of a program. It allows the program to gracefully respond to unexpected events, preventing abrupt terminations. This is achieved through the use of try, catch, and throw blocks. The 'try' block encloses the code where an exception might occur, while the 'catch' block specifies how to handle the exception if it arises. If an exception is thrown within the 'try' block, the program looks for a matching 'catch' block to handle it. If no suitable 'catch' block is found, the program may terminate. Exception handling promotes robust and reliable code by separating error-handling logic from the main program flow, enhancing the program's overall stability and user experience.",
      "subtopics": [
        {
          "id": "9.1",
          "name": "Exception handling mechanism,"
        },
        {
          "id": "9.2",
          "name": "Try block, Catch handler, Throw statement."
        }
      ]
    }
  ],
  "6": [
    {
      "id": 1,
      "title": "Grammar",
      "content": "Communication skills encompass several vital elements. Firstly, understanding parts of speech enables us to construct sentences effectively by identifying the function of each word. Secondly, mastering tenses is crucial as it allows us to convey actions or events in different time frames accurately. Additionally, being able to change voice provides flexibility in expressing ideas, whether focusing on the doer or receiver of an action. Transforming sentences, such as changing assertive to exclamatory or affirmative to negative, adds depth and nuance to our expressions. Furthermore, grasping concepts like removing 'too', employing 'not only...but also', and using question tags refines our ability to convey meaning with precision. Lastly, articles play a subtle yet significant role in specifying and generalizing nouns, adding a layer of clarity to our communication. These components collectively form a solid foundation for effective and articulate communication. ",
      "subtopics": [
        {
          "id": "1.1",
          "name": "1.1 Parts of Speech: Noun, Pronoun, Adjective, Verb, Adverb, Prepositions, Conjunctions, Interjections"
        },
        {
          "id": "1.2",
          "name": "Tenses"
        },
        {
          "id": "1.3",
          "name": "Change the voice"
        },
        {
          "id": "1.4",
          "name": "Transformation of sentences: Assertive to exclamatory and viceversa 1) Affirmative to negative and vice- versa 2) Remove 'too' 3) Not only�but alsos 4) Question Tag"
        },
        {
          "id": "1.5",
          "name": "Articles"
        }
      ]
    },
    {
      "id": 2,
      "title": "Notice and Agenda",
      "content": "Certainly! Notice drafting involves the skill of creating clear and concise messages for various purposes, such as meetings, academic announcements, company updates, or housing notices. It requires the ability to convey information effectively, ensuring that the intended audience receives and comprehends the message. On the other hand, agenda drafting pertains to the process of outlining the topics and activities to be discussed or addressed during a meeting or event. This involves organizing the sequence of items, allocating time slots, and providing context for each agenda item. Both notice and agenda drafting are essential communication skills that play a vital role in disseminating information efficiently and facilitating productive gatherings.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Notice Drafting (Notices for meetings, academic notices, to be displayed on notice boards, company notices, housing notices)Agenda Drafting"
        }
      ]
    },
    {
      "id": 3,
      "title": "Letter Writting",
      "content": "In formal letters, you might write to the Principal for documents like Transfer Certificate, Duplicate Identity Card, or Bonafide Certificate. Another scenario could involve contacting the Librarian regarding unavailable or lost books. Addressing the Workshop Superintendent or Head of Department might be necessary for specific matters. Additionally, letters to authorities like the Commissioner of Police or Telephone Department, Ward Officer, or Magistrate may be required for various concerns. In editorial letters to newspaper editors, you could discuss local issues such as water problems, garbage/drainage concerns, transportation issues, or problems related to street dogs in your area.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Fomal Letters"
        },
        {
          "id": "3.2",
          "name": "Editorial Letters"
        }
      ]
    }
  ],
  "7": [
    {
      "id": 1,
      "title": "Theory of Communication",
      "content": "Communication is the process of sharing information, ideas, or thoughts between individuals or groups. It involves a sender, who initiates the message, a message itself, a channel through which it's conveyed, a receiver who interprets it, and a feedback loop for clarification. Feedback is crucial for ensuring understanding. The cycle of communication encompasses these stages, forming a continuous loop. In the business world, effective communication is vital for smooth operations, decision-making, and building relationships with clients and stakeholders. The principles of effective communication include clarity, conciseness, consideration of the audience, completeness, and correctness, ensuring messages are accurately conveyed and understood.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Concept of Communication, Meaning and Definitions & Elements of Communication (sender, message, channel, receiver, feedback process ) Importance of feedback"
        },
        {
          "id": "1.2",
          "name": "Cycle of communication & Need & Importance in the Business world"
        },
        {
          "id": "1.3",
          "name": "Principles of Effective Communication"
        }
      ]
    },
    {
      "id": 2,
      "title": "Objectives Of Communication",
      "content": "Communication serves various crucial objectives. Firstly, it conveys information, ensuring that messages are clear and understood. It also plays a vital role in education and training, enabling the transfer of knowledge and skills. Additionally, communication serves as a source of motivation and morale-boosting, inspiring individuals and fostering a positive work environment. It is instrumental in giving orders and instructions, ensuring tasks are carried out efficiently and effectively. Furthermore, communication is a tool for persuasion and suggestion, influencing decisions and actions through compelling messages. In essence, communication is the cornerstone of effective interaction and achieving desired outcomes in various aspects of life.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Information, Education & Training"
        },
        {
          "id": "2.2",
          "name": "Motivation & Raising Morale, Orders & Instructions And Persuasion & Suggestion"
        }
      ]
    },
    {
      "id": 3,
      "title": "Channels Of Communication",
      "content": "Channels of communication can be broadly categorized into formal and informal channels. In formal communication, information flows in distinct directions: upward, which moves from employees to higher-ups; downward, which originates from management and disseminates to subordinates; vertical, involving communication across different levels of the organizational hierarchy; and horizontal, which occurs between individuals or units at the same level. On the other hand, informal communication takes the form of the grapevine, a network of unofficial and spontaneous exchanges that typically occur outside official channels. This grapevine can transmit information rapidly but may not always be reliable or accurate, making it important for organizations to maintain a balance between formal and informal channels to ensure effective communication.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Formal"
        },
        {
          "id": "3.2",
          "name": "Informal-Grapevine"
        }
      ]
    },
    {
      "id": 4,
      "title": "Methods Of Communication",
      "content": "Communication can be broadly categorized into two main types: verbal and non-verbal. Verbal communication involves the use of spoken or written words to convey information, ideas, and emotions. This form of communication is direct and explicit, allowing for precise expression and clarification. Non-verbal communication, on the other hand, encompasses gestures, facial expressions, body language, tone of voice, and other subtle cues that convey meaning without the use of words. It often complements verbal communication and can provide additional context or emotional nuance to a message. Understanding and effectively utilizing both verbal and non-verbal communication is essential for successful interpersonal interactions and effective conveyance of information in various social and professional settings.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Verbal Communication"
        },
        {
          "id": "4.2",
          "name": "Non - Verbal Communincation"
        }
      ]
    },
    {
      "id": 5,
      "title": "Barriers Of Communication",
      "content": "Communication barriers can be categorized into five main types. First, physical barriers encompass environmental factors that hinder effective communication, such as distance, noise, or poor lighting. Second, language barriers arise when individuals do not share a common linguistic framework, leading to misunderstandings or misinterpretations. Third, socio-psychological barriers stem from personal attributes, attitudes, or emotions that can impede communication, including prejudices, ego, or anxiety. Fourth, semantic barriers involve differences in the meaning of words or phrases, which can lead to confusion or miscommunication. Finally, cross-cultural barriers result from disparities in cultural norms, values, and practices, making it challenging for individuals from different backgrounds to convey messages accurately. Understanding and addressing these various barriers is crucial for fostering effective communication in diverse contexts.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Physical barrier and Language Barrier"
        },
        {
          "id": "5.2",
          "name": "Socio-psychological barrier and Semantic barrier"
        },
        {
          "id": "5.3",
          "name": "Cross Cultural barrier"
        }
      ]
    },
    {
      "id": 6,
      "title": "Social Etiquettes",
      "content": "Social Etiquettes encompass a set of culturally defined behaviors that govern interactions in various social settings. Within a business context, adhering to business ethics is crucial, emphasizing integrity, transparency, and fair practices. Proper telephone etiquette ensures clear and effective communication, including courteous greetings and active listening. Table manners play a pivotal role in formal settings, emphasizing proper utensil use, posture, and respectful engagement. Small talk serves as a valuable icebreaker, facilitating initial interactions and establishing rapport. Punctuality, a universal sign of respect for others' time, is a fundamental aspect of social etiquette, demonstrating professionalism and consideration for others' schedules.",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Business Ethics, Telephone Etiquettes & Table manners"
        },
        {
          "id": "6.2",
          "name": "Small Talk & Punctuality"
        }
      ]
    },
    {
      "id": 7,
      "title": "Defining and Describing Objects",
      "content": "Defining objects involves outlining their appearance and primary utility. This encompasses physical attributes and practical functions that collectively characterize the entity. Describing objects goes beyond surface-level features, delving into their purpose, constituent components, operational functions, and potential applications. This comprehensive breakdown provides a holistic understanding of an object's role and potential uses. Additionally, giving instructions concerning objects entails providing precise and directive guidance on how to interact with or manipulate them effectively, ensuring optimal functionality and intended outcomes. This process facilitates seamless integration into various contexts and maximizes the object's utility.",
      "subtopics": [
        {
          "id": "7.1",
          "name": "Defining objects- Appearance, its use"
        },
        {
          "id": "7.2",
          "name": "Describing objects- purpose, components, functions and applications Giving instructions- precise and directive"
        }
      ]
    }
  ],
  "8": [
    {
      "id": 1,
      "title": "Logarithm and Antilogirthm",
      "content": "Logarithms are mathematical functions that provide a way to solve exponential equations. They serve as the inverse operation to exponentiation, helping to find the exponent in an exponential expression. Two common types are natural logarithms (base e, denoted as ln) and common logarithms (base 10, denoted as log). Logarithms obey specific rules, such as the product rule (log(ab) = log(a) + log(b)) and the quotient rule (log(a/b) = log(a) - log(b)). Moreover, they exhibit a relationship where natural logarithms are equivalent to common logarithms multiplied by a constant (ln(x) = 2.303 * log(x)). Logarithms are particularly useful for solving equations involving exponential functions, allowing one to find the value of x by taking the logarithm of the equation. This topic also ties into the broader understanding of laws of indices, offering valuable tools for manipulating exponential and logarithmic expressions.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Revision of Laws of indices. Definition of logarithm (Natural and Common logarithm). ? Rules of logarithm (product, quotient, log of power). Relation between natural log and common log."
        },
        {
          "id": "1.2",
          "name": " Equations solvable by log (find x by taking log of equation)."
        }
      ]
    },
    {
      "id": 2,
      "title": "Complex Numbers",
      "content": "Complex numbers are mathematical entities that extend the real number system to include a new element, denoted as i, where i is defined as the square root of -1. This imaginative construct resolves the limitation of real numbers in solving equations like x^2 + 1 = 0. The powers of i cycle through four values: 1, i, -1, and -i. The conjugate of a complex number involves changing the sign of the imaginary part. The algebraic operations with complex numbers, such as addition, subtraction, multiplication, and division, follow straightforward rules. Geometrically, complex numbers are represented on the Argand diagram, where the real part is plotted on the x-axis and the imaginary part on the y-axis. The polar form of a complex number expresses it in terms of its magnitude and argument, while the exponential form involves the exponential function raised to the power of the complex argument, combining the concept of real exponentiation with complex numbers. These various representations are indispensable tools in solving diverse mathematical problems and have wide applications in fields like engineering, physics, and signal processing.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Introduction, Definition of complex numbers. Powers of i, conjugate of a complex number, Algebra of complex numbers Geometrical representation of complex numbers -Argand diagram."
        },
        {
          "id": "2.2",
          "name": "Polar form, exponential form of a complex number"
        }
      ]
    },
    {
      "id": 3,
      "title": "Binomial Theorem",
      "content": "The Binomial Theorem is a fundamental concept in algebra that deals with the expansion of expressions raised to a power. It provides a systematic way to expand expressions of the form (a + b)^n, where 'n' is a positive integer. This theorem encompasses various key components, including basic permutations and combinations, allowing for the determination of the coefficients of specific terms in the expanded form. The theorem also introduces concepts like the general term, which allows us to find the coefficient of any term, and the middle term in cases of even exponents. Additionally, it addresses terms that are independent of the variable 'x' and elucidates their significance. Furthermore, the Binomial Theorem has practical applications, particularly in approximation methods, offering a valuable tool for calculating approximate values of complex expressions.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Basic Permutations, Combinations and Statement of Binomial theorem for positive integral index, Binomial expansion"
        },
        {
          "id": "3.2",
          "name": "General term, middle term"
        },
        {
          "id": "3.3",
          "name": "Coefficient of x^r ,terms independent of x"
        },
        {
          "id": "3.4",
          "name": "Use of Theorem for approximate values"
        }
      ]
    },
    {
      "id": 4,
      "title": "Partial Fractions",
      "content": "Partial fractions refer to a method used in mathematics to break down a complex rational function into simpler, more manageable components. This process is particularly useful when dealing with integration problems. To resolve a fraction into partial fractions, one first classifies the fraction as either proper or improper. A proper fraction is one where the degree of the numerator is less than the degree of the denominator, whereas an improper fraction has a higher degree in the numerator. The next step involves factoring the denominator into its constituent factors, which can be of different types: linear and non-repeated factors, linear repeated factors, and non-repeated irreducible quadratics. Once the factors are identified, the original fraction is decomposed into a sum of simpler fractions, each having one of these factors in the denominator. This allows for easier manipulation and integration of the original expression.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Definition of proper, improper fraction and partial fraction. To resolve fraction into partial fractions with denominator containing factors which are Linear and non repeated factors, Lineat repeated Factors"
        },
        {
          "id": "4.2",
          "name": "Non repeated irreducible , quadratic and mixed type"
        }
      ]
    },
    {
      "id": 5,
      "title": "Basic Trignometry",
      "content": "Basic trigonometry involves understanding the trigonometric ratios of any angle, both from precomputed tables and without reliance on them. This includes comprehending the interplay between degrees and radians, as well as determining the length of an arc. Additionally, it encompasses discerning the relationships between these ratios and applying fundamental identities to solve trigonometric equations. Allied angles, which are angles that share the same trigonometric ratios, play a crucial role in simplifying calculations. Furthermore, mastering the concept of compound angles, where two or more angles are combined in an operation, is essential for more complex trigonometric applications. These elements form the foundational knowledge required for further exploration of trigonometry.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Trigonometric ratios of any angle (from table and without table). Relation between degree and radian, length of an arc."
        },
        {
          "id": "5.2",
          "name": "Radian, length of an arc. ? Relation between ratios, and examples based on fundamental identities."
        },
        {
          "id": "5.3",
          "name": "Allied angles and compound angles"
        }
      ]
    },
    {
      "id": 6,
      "title": "Vector Algebra",
      "content": "Vector algebra deals with both scalars and vectors, which are quantities with magnitude and direction. It encompasses various fundamental concepts including the geometrical representation of vectors, often expressed as arrows in space, and position vectors that describe the location of a point relative to a chosen origin. The algebraic operations on vectors include addition and subtraction, as well as scalar multiplication, which involves multiplying a vector by a scalar (a real number). Components and the resolution of vectors allow for the decomposition of vectors into their constituent parts along specified axes, while unit vectors are vectors with a magnitude of 1 that indicate direction. Vectors that lie on the same line are collinear, and those within the same plane are coplanar. Scalar products, or dot products, are operations that yield a scalar from two vectors, while vector products, or cross products, result in a vector. The scalar triple product combines three vectors, providing a scalar value. These operations find extensive applications in physics, such as calculating work done, moment of force, and determining volumes of parallelepipeds and tetrahedrons. This foundation in vector algebra forms a crucial underpinning for various fields of mathematics and physics. ",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Scalars and vectors quantities, Geometrical representation, position vectors. Algebra of vectors (addition, subtraction of vectors, scalar multiplication). Components, resolution of vectors, unit vector, collinear and coplanar vectors"
        },
        {
          "id": "6.2",
          "name": "Coplanar vectors Scalar(dot) and vector(cross) products of two vectors, scalar triple product and their properties"
        },
        {
          "id": "6.3",
          "name": "Triple product and their properties Application and physical interpretation: work done, moment of force, volume of parallelepiped / tetrahedron."
        }
      ]
    }
  ],
  "9": [
    {
      "id": 1,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Subtopic 1"
        },
        {
          "id": "1.2",
          "name": "Subtopic 2"
        }
      ]
    },
    {
      "id": 2,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Subtopic 1"
        },
        {
          "id": "2.2",
          "name": "Subtopic 2"
        }
      ]
    },
    {
      "id": 3,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Subtopic 1"
        },
        {
          "id": "3.2",
          "name": "Subtopic 2"
        }
      ]
    },
    {
      "id": 4,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Subtopic 1"
        },
        {
          "id": "4.2",
          "name": "Subtopic 2"
        }
      ]
    },
    {
      "id": 5,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Subtopic 1"
        },
        {
          "id": "5.2",
          "name": "Subtopic 2"
        }
      ]
    },
    {
      "id": 6,
      "title": "Chapter 2 (Module 2)",
      "content": "Content for Chapter 2 (Module 2)",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Subtopic 1"
        },
        {
          "id": "6.2",
          "name": "Subtopic 2"
        }
      ]
    }
  ],
  "10": [
    {
      "id": 1,
      "title": "Introduction to electronic component",
      "content": "Electronic components are fundamental elements in the construction of various electronic devices and circuits. To work effectively with electronic equipment and tools like CROs (Cathode Ray Oscilloscopes), function generators, and power supplies, it is crucial to understand their functions and applications. Components can be broadly categorized into passive and active types. Passive components, such as resistors, capacitors, and inductors, regulate the flow of electric current without amplification. Active components, on the other hand, include diodes, LEDs, seven-segment displays, and bipolar junction transistors (BJTs), which have the ability to amplify or control the flow of current. Additionally, proficiency in using a soldering iron and desoldering techniques is imperative for assembling and repairing electronic circuits. This skill ensures secure and reliable connections between components, which is essential for the proper functioning of electronic systems.",
      "subtopics": [
        {
          "id": "1.1",
          "name": "Use of electronic equipment and electronic tools- CRO, Function generator,Power Supply"
        },
        {
          "id": "1.2",
          "name": "Identification of different types of components 1) Passive component-resister, capacitor, inductors 2) Active component- Diode, LED, Seven segment display, BJT"
        },
        {
          "id": "1.3",
          "name": "Use of soldering iron and desoldering technique"
        }
      ]
    },
    {
      "id": 2,
      "title": "Introduction to computer system",
      "content": "A computer system is characterized by its distinct features, including its generation and classification. Generations of computers have evolved from early vacuum tube models to modern integrated circuits, each phase marking significant advancements in technology. Computers are classified into microcomputers, minicomputers, mainframe computers, and supercomputers, each tailored for specific computational needs. The block diagram of a computer system outlines its essential components: the input/output unit, responsible for communication with external devices; the central processing unit (CPU), comprising the arithmetic logic unit (ALU), control unit, and various registers; and the memory unit, which encompasses cache, primary, and secondary memory. Furthermore, computer hardware encompasses components like storage devices, including magnetic and optical options, as well as various input/output devices such as monitors, keyboards, pointing devices, scanners, and printers. Complementing the hardware is the software, divided into system software like operating systems and application software including word processors, spreadsheets, image processors, and accounting programs. Understanding these fundamental aspects provides a comprehensive grasp of computer systems and their integral components.",
      "subtopics": [
        {
          "id": "2.1",
          "name": "Introduction to computer system- Characteristics of computer system, Generation of computers, Classification of computers- Microcomputers, minicomputers, Mainframe computers, Super computers"
        },
        {
          "id": "2.2",
          "name": "Block diagram of computer system- Input/output unit, CPU, Memory unit"
        },
        {
          "id": "2.3",
          "name": "Basics of computer hardware and software-1) Memory(cache memory, primary memory, secondary memory) 2) Central processing unit(ALU, control unit, register) 3)I/O devices(monitor, keyboard,pointing devices, light pen, touch screen ,printers, scanner) 4) Storage devices(magnetic and optical storage devices) 5) System software(operating system, device drivers, system utilities, programming languages, linker, loader) 6) Application software(word processing, spread sheet, image processing, accounting software)"
        }
      ]
    },
    {
      "id": 3,
      "title": "Word Procesing",
      "content": "Word processing involves the creation and manipulation of text documents using specialized software known as a word processor. In this context, a word processor encompasses a range of functions crucial for document creation and formatting. This includes the selection of font types, sizes, effects, and colors, as well as the modification of text case. Additionally, users can perform operations like opening, saving, and closing documents. The editing capabilities are extensive, allowing for tasks such as inserting and deleting text, as well as selecting, undoing, and redoing actions. Functions like cut, copy, and paste are integral for moving text within a document, and drag and drop functionality aids in repositioning. Further options for formatting involve alignment and style adjustments at both the text and paragraph levels. Document layout features encompass settings for page margins, orientation, and headers and footers, while indentation options provide further control over document structure. Moreover, users can incorporate various elements like page numbers, date-time stamps, symbols, images, and page breaks. The word processor also allows for the creation and manipulation of tables, including functions like inserting or deleting rows and columns, applying borders and shading, resizing cells, formatting the table layout, and merging or splitting cells as needed. This comprehensive suite of tools empowers users to effectively and efficiently create, edit, and format text documents.",
      "subtopics": [
        {
          "id": "3.1",
          "name": "Overview of word processor- introduction to word processor, font-types, size, effects, colors, case change, opening, saving and closing word document."
        },
        {
          "id": "3.2",
          "name": "Editing text document-insert and delete text, select, undo and redo operation, cut ,copy and paste command, drag and drop to move text, format and align text, formatting paragraph, line and paragraph spacing, find and replace operation, bullets and numbers in list border, shading, page setting, spelling and grammar checking"
        },
        {
          "id": "3.3",
          "name": "Layout of document- page margin,page orientation, headers and footers, indentations"
        },
        {
          "id": "3.4",
          "name": "Inserting element and table in word document- insert page numbers, date-time, symbols, picture, page break, insert table, insert row and column, border and shading, resize table cell, format table, align text in   table, merge and split cell"
        }
      ]
    },
    {
      "id": 4,
      "title": "Presentation tool",
      "content": "A presentation tool is a software application that enables users to create visually engaging presentations. It encompasses various functionalities such as 4.1, allowing users to create new slides, change slide layouts, arrange slide sequences, and apply fonts, colors, effects, backgrounds, and themes. Additionally, users can incorporate media elements like images, audio, video, animations, and speaker notes using 4.2, and have the capability to edit and format graphical objects, group them on a slide, and apply animations to enhance visual appeal. The tool also supports the insertion and formatting of tables within slides (4.3) as well as the integration and modification of charts (4.4), providing a comprehensive platform for crafting informative and visually appealing presentations.",
      "subtopics": [
        {
          "id": "4.1",
          "name": "Creating presentation- creating new slide ,changing a slide layout, arranging slide sequence, applying font, colors, effects, background,  theme."
        },
        {
          "id": "4.2",
          "name": "Inserting media, image/audio/video/animation/speaker note ,edit and format graphical object, group objects on a slide, applying animation to graphics object, adding styles to text in presentation"
        },
        {
          "id": "4.3",
          "name": "Insert and format table in slide"
        },
        {
          "id": "4.4",
          "name": "Insert and modify chart in slide"
        }
      ]
    },
    {
      "id": 5,
      "title": "Spreadsheet",
      "content": "A spreadsheet is a powerful tool for organizing and analyzing data, and it encompasses several key functions. In the realm of creating worksheets, users can effortlessly generate, open, save, and delete worksheets, providing a flexible canvas for data manipulation. Moving on to editing capabilities, one can insert rows and columns, add or remove data, and apply various formatting options to enhance the visual appeal and clarity of the content. This includes copying and pasting commands, as well as employing the find and replace function for efficient data management. Additionally, applying formulas is a critical aspect, allowing users to perform calculations by creating, copying, and utilizing built-in functions. These formulas can incorporate conditions for specific data handling, and further extend to tasks like sorting and filtering. Users can also integrate visual aids by inserting charts, with options to modify and fine-tune their appearance. Beyond this, formatting extends to individual cells and entire worksheets, encompassing features like font selection, color schemes, alignment, borders, shading, and even the inclusion of headers, footers, and page breaks. Finally, the spreadsheet offers a suite of printing options, encompassing print area customization, margins adjustment, header and footer inclusion, and various other page setup preferences for optimal document output.",
      "subtopics": [
        {
          "id": "5.1",
          "name": "Creating worksheet- create, open, save, delete worksheet"
        },
        {
          "id": "5.2",
          "name": "Editing worksheet- insert row and column, insert/delete data, format row and column, copy and paste command, find and replace operation"
        },
        {
          "id": "5.3",
          "name": "Applying formula- creating formula, copying formula, use of in-built function, applying condition ,data sorting, data filtering"
        },
        {
          "id": "5.4",
          "name": "Inserting charts and formatting cell and worksheet- creating and editing charts and applying different chart options, use of different types of charts-bar, pie, line charts, setting cell type, font, color, alignment, borders and shading, formatting sheet using headers and footers,margin, page orientation, background, page break"
        },
        {
          "id": "5.5",
          "name": "Printing worksheets, print area, margins, header, footer and other page setup options."
        }
      ]
    },
    {
      "id": 6,
      "title": "Internet and ICT tool",
      "content": "The Internet, comprising interconnected global networks, facilitates the exchange of information through various tools and technologies. At its core, it operates on a client-server model, where web servers store and serve web pages, while web clients, typically browsers, access and display these pages. Web browsers are fundamental applications that allow users to navigate the Internet, with configurable settings to enhance user experience. One crucial aspect is search content, enabling users to locate specific information efficiently. Additionally, Internet-based communication tools like email and chat play a pivotal role in enabling real-time conversations and information sharing. Platforms such as Google Forms offer structured data collection, while Google Classroom serves as an educational platform for teachers and students to interact and collaborate. WordPress, on the other hand, is a widely-used content management system, empowering users to create and manage websites with ease. These ICT tools collectively form the backbone of modern digital communication and information dissemination.",
      "subtopics": [
        {
          "id": "6.1",
          "name": "Introduction to Internet ,web server, web client, web browser, basic settings of web browser, search content"
        },
        {
          "id": "6.2",
          "name": "Email, chat, google form, google classroom, word press"
        }
      ]
    }
  ],
};
