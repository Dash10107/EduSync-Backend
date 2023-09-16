// chaptersData.js

const chaptersByModule = {
    1: [
        {
            id: 1,
            title: "Introduction to Programming",
            content: "Introduction to Programming in C is the first chapter that teaches the basics of computer programming. It covers fundamental concepts like variables, data types, and how to write simple code. You'll learn how to use C to give instructions to a computer, solving problems step by step. This chapter sets the foundation for the rest of your programming journey, helping you create programs that perform tasks and solve real-world problems. It's like learning the alphabet before writing sentences in the language of computers.",
            subtopics: [
                {
                    id: "1.1",
                    name: "Introduction to programming languages.Types of programming languages: low-level, mid-level, high-level programming languages.",
                },
                {
                    id: "1.2",
                    name: "Algorithm – concept of algorithm, pseudo-code convention like – assignment statements develop algorithm to solve simple problems.Flowchart - concept of flowchart, symbols of flowchart",
                },
                
            ],
        },

        //end of chapter  1
        {
            id: 2,
            title: "Fundamentals of C",
            content: "Certainly! The fundamentals of C programming involve learning the basic building blocks of the language. These include variables, which store data, and operations like arithmetic and logical calculations. C also includes control structures like loops and conditional statements for program flow. Functions are essential for organizing code, and libraries provide pre-written functions for various tasks. Lastly, C is known for its simplicity and efficiency, making it a popular choice for system-level programming.",
            subtopics: [
                {
                    id: "2.1",
                    name: "History of C, features of C.Structure of C program.Header files,Main function.Character set,Data types in C.",
                },
                {
                    id: "2.2",
                    name: "Token, constant, variable, keywords and identifiers in C.Rules for constructing variable names,declaration of variables",
                },
                {
                    id: "2.3",
                    name: "Symbolic constant with example.Basic Input/Output:-Input and Output statements using printf ()and scanf(),Character Input/Output statements using getchar() and putchar(),formatted input and formatted output",
                },

            ],
        },
        {
            id: 3,
            title: "Operators and Expression",
            content: "Operators in C are symbols or special characters used to perform operations on variables and values. They include arithmetic operators like + (addition) and - (subtraction), comparison operators like == (equality check), and logical operators like && (logical AND). Expressions are combinations of variables, values, and operators that produce a result. For example, 'x + y' is an expression that adds the values of variables x and y. Understanding operators and expressions is fundamental to writing C programs and manipulating data efficiently.",
            subtopics: [
                {
                    id: "3.1",
                    name: "Concept of operator, operand, unary and binary operator.Arithmetic operator.Relational and logical operator",
                },
                {
                    id: "3.2",
                    name: "Assignment and equality operator.Conditional operator.Bitwise operator",
                },
                {
                    id: "3.3",
                    name: "Unary operator:++ and - -.Integer and float conversion, type conversion in expression.Hierarchy of operations",
                },
                
            ],
        },


        //end of chapter 3


        {
            id: 4,
            title: "Control Structure",
            content: "In C programming, control structures are essential for directing the flow of your code. There are three main types: conditional statements, loops, and function calls. Conditional statements, like if and switch, help you make decisions based on conditions, allowing your program to take different paths. Loops, such as for,while, and do-while, enable repetitive tasks, executing a block of code multiple times. Function calls allow you to reuse code by encapsulating it in functions that can be called whenever needed. Understanding and using these control structures efficiently is crucial for building effective and organized C programs.",
            subtopics: [
                {
                    id: "4.1",
                    name: "Decision making and branching control structure-: if statement, if else,else if,else if ladder, Nested if else,switch",
                },
                {
                    id: "4.2",
                    name: "Looping control structure-for loop,while loop,do-while loop,nesting of loop, break,continue and goto statement.Comparison of while and do-while loop",
                },
                
            ],
        },

        //end of chapter 4 

        {
            id: 5,
            title: "Array and String",
            content: " Arrays and strings are fundamental concepts in C programming. An array is a collection of elements of the same data type, stored in contiguous memory locations. You can access individual elements using their index. Strings, on the other hand, are essentially arrays of characters, terminated by a null ('\0') character. They are used to represent text and can be manipulated using various string functions like strcpy() and strlen(). Both arrays and strings are crucial for storing and processing data efficiently in C, making them essential building blocks for many programs. Understanding how to work with them is essential for any C programmer.",
            subtopics: [
                {
                    id: "5.1",
                    name: "Array & Need of array, Definition Array declaration, initialization and accessing array element.Array elements in memory, Bound checking Program for finding largest, smallest element and to perform searching and sorting operation on one dimensional array",
                },
                {
                    id: "5.2",
                    name: "Two dimensional array firstly Declaration and initialization of two dimensional array and secondly Program to store and display two dimensional array elements.",
                },
                {
                    id: "5.3",
                    name: "String Declaration and initialization of string variable. Reading string from terminal Writing string to screen String related library function strlen(), strcpy(),strcat(),strcmp().simple programs on string using library functions,to re verse string,to check whether string is palindrome",
                },
            ],
        },


        //end of chapter 5

        {
            id: 6,
            title: "User defined functions",
            content: "User-defined functions in C are custom blocks of code created by the programmer to perform specific tasks. These functions help in organizing and simplifying code by breaking it into smaller, reusable parts. To create a user-defined function, you specify its name, define the input parameters it needs, and provide the code that carries out the desired task. Once defined, you can call this function from anywhere in your program to execute its code, reducing redundancy and making your code more modular and readable. User-defined functions are essential for enhancing code efficiency, maintainability, and reusability in C programming.",
            subtopics: [
                {
                    id: "6.1",
                    name: "Introduction to function-Need of function,Definition, Advantages of function.Function handling-Function declaration, Function definition, Function call",
                },
                {
                    id: "6.2",
                    name: "Different types of functions:- Function with no argument and no return value, Function with no argument and with return value, Function with argument and0020with return value.Storage classes and scope of variable:- storage classes -auto,static,extern,register scope and visibility of variables –local and global variable.recursion concept with example",
                },
               
            ],
        },
        //end of chapter 6


        {
            id: 7,
            title: "Structures and Union ",
            content: "In C programming, structures and unions are used to group different data types together. A structure allows you to create a composite data type by defining a group of variables with unique names and various data types, which are stored in memory sequentially. This helps organize related data, making it easier to work with complex information. On the other hand, a union is similar to a structure but only stores one value at a time, sharing memory space among its members. This means that changing one member can affect the others. Structures are typically used when you need to store multiple pieces of data, while unions are useful when you want to save space and only need one value from a group of choices. Both structures and unions are essential tools for managing data efficiently in C.",
            subtopics: [
                {
                    id: "7.1",
                    name: "Introduction to structure:- Definition ,Declaring and initialization of structure ,Accessing structure elements, Nested structure",
                },
                {
                    id: "7.2",
                    name: "Union-Introduction to union, Syntax with example.recursion concept with example",
                },
            
            ],
        },


        //end of chapter 7

        {
            id: 8,
            title: "Pointers",
            content: "Pointers in C are variables that store memory addresses rather than actual data. They are essential for efficient memory management and accessing data indirectly. By using pointers, you can manipulate data in memory directly, making them a powerful tool in C programming. To declare a pointer, you specify the data type it points to, like int or char. You can access the value at the memory location it points to using the dereference operator (*). However, mishandling pointers can lead to memory-related errors like segmentation faults, so it's crucial to use them carefully. Mastering pointers is a fundamental skill for C programmers, enabling dynamic memory allocation, data structures, and more complex operations. ",
            subtopics: [
                {
                    id: "8.1",
                    name: "Introduction to pointer:-Need of pointer, Definition, Declaration and initialization of pointer.Accessing variables using pointer.Advantages of pointers",
                },
                
            ],
        },

        //end of chapter 8
        {
            id: 9,
            title: "File Input/Output",
            content: "File input/output in C allows you to read and write data to files on your computer. You can think of a file as a storage container for information. To read from a file, you open it, specify the data type you expect, and use functions like fscanf()  to retrieve data. For writing to a file, you also open it, provide the data you want to save using fprintf() , and then close the file. These operations are essential for storing and retrieving information, making them crucial in various programming tasks.",
            subtopics: [
                {
                    id: "9.1",
                    name: "file operation-open, close, read and write (using fgetc() ,fputc()).",
                },
                {
                    id: "9.2",
                    name: "file opening modes",
                },
            ],
        },

        //end of chapter 9
    ],   //end of subject 1




    2: [
        {
            id: 1,
            title: "Chapter 1 (Module 2)",
            content: "Content for Chapter 1 (Module 2)",
            subtopics: [
                {
                    id: "1.1",
                    name: "Subtopic 1",
                },
                {
                    id: "1.2",
                    name: "Subtopic 2",
                },
            ],
        },
        {
            id: 2,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "2.1",
                    name: "Subtopic 1",
                },
                {
                    id: "2.2",
                    name: "Subtopic 2",
                },
            ],
        },
    ],//end of subject 2






    3: [
        {
            id: 1,
            title: "Chapter 1 (Module 2)",
            content: "Content for Chapter 1 (Module 2)",
            subtopics: [
                {
                    id: "1.1",
                    name: "Subtopic 1",
                },
                {
                    id: "1.2",
                    name: "Subtopic 2",
                },
            ],
        },
        {
            id: 2,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "2.1",
                    name: "Subtopic 1",
                },
                {
                    id: "2.2",
                    name: "Subtopic 2",
                },
            ],
        },
    ],//end of subject 3










    4: [
        {
            id: 1,
            title: "Introduction to web application",
            content: " An introduction to web applications, a chapter in HTML, delves into the fundamental concept of creating dynamic and interactive websites. It explores how HTML, alongside other technologies like CSS and JavaScript, enables developers to build engaging web experiences. In this chapter, you'll learn how to structure web content, style it for a polished look, and incorporate scripts for interactivity. Understanding web applications is crucial for anyone aspiring to design modern websites that can respond to user input and offer rich, seamless experiences. This chapter serves as a foundational step towards mastering the art of web development. ",
            subtopics: [
                {
                    id: "1.1",
                    name: " Basic web terminology-Web site, Web server, Web client,  Web page& Web browser ",
                },
                {
                    id: "1.2",
                    name: " Web content-Static web content and dynamic web content &  Difference between static and dynamic web site ",
                },
                {
                    id: "1.3",
                    name: " Different types of web sites- Informational web site, personal web site,  e-commerce web site, Commercial web site, Entertainment web site, Social networking site, Forum, blogs & Search engine, web portal ",
                },
            ],
        },

        //end of chapter 1 
        {
            id: 2,
            title: "Introduction to HTML and basic tags of HTML",
            content: " HTML, which stands for HyperText Markup Language, is the foundation of web development. It's used to create the structure and content of web pages. HTML documents consist of various tags that define elements on a webpage. Basic HTML tags include <html> (denoting the beginning and end of an HTML document), <head> (containing metadata like the page title), and <body> (housing the visible content). You can use tags like <h1> for headings, <p> for paragraphs, and <a> for links. These fundamental tags help structure and display content on a webpage, forming the building blocks of web design. ",
            subtopics: [
                {
                    id: "2.1",
                    name: " Introduction to HTML5 DOCTYPE , Character encoding , Components of HTML5-Elements,Tags,Attributes,  General structure of HTML document ",
                },
                {
                    id: "2.2",
                    name: " Block level tags heading, paragraph, line break, horizontal rule, div, span, preformatted text, address, blockquotes,  header, footer, comment ",
                },
                {
                    id: "2.3",
                    name: " Text level tag bold, italic, underline, small, sub, sup, kbd, ins, del special character entity ",
                },
                {
                    id: "2.4",
                    name: "body tag",
                },
                {
                    id: "2.5",
                    name: " List ordered, unordered, definition and nested list ",
                },
            ],
        },

        //end of chapter 2


        {
            id: 3,
            title: "Image and links in  HTML",
            content: " In HTML, images and links are essential elements for enhancing web content. Images are used to display graphics, photos, and illustrations on web pages, making them visually appealing. You can insert images using the <img> tag, specifying the image source (URL) and optional attributes like alt text for accessibility.Links, on the other hand, allow users to navigate between web pages. They are created with the <a> tag, and you define the destination URL in the href attribute. By clicking on links, users can access different web pages, documents, or resources, creating a connected and interactive browsing experience. Images can also be linked to other pages, combining visuals and navigation. ",
            subtopics: [
                {
                    id: "3.1",
                    name: " URL and anchor tag  URL, types of URL-absolute and relative URL , Anchor tag with href, target, download, title attributes ",
                },
                {
                    id: "3.2",
                    name: " Linking document in same folder, in different folder, linking specific section in document, linking document on the web ",
                },
                {
                    id: "3.3",
                    name: " Image img tag with height, src, width, alt attributes. ",
                },
                {
                    id: "3.4",
                    name: " Image as link ",
                },
                {
                    id: "3.5",
                    name: " Image map client side and server side image map using ismap, usemap tag applying style to image and link ",
                },
            ],
        },
        //end of chapter 3

        {
            id: 4,
            title: "Tables and Forms",
            content: " In HTML, tables are used to organize and display data in rows and columns. They consist of table elements like <table>, <tr> for rows, and <td> for individual cells. Tables help structure content neatly.HTML forms are used to collect user input, such as text, checkboxes, and radio buttons. Form elements like <form>, <input>, and <button> allow users to submit data. Forms are essential for interactive web pages and data collection. ",
            subtopics: [
                {
                    id: "4.1",
                    name: " Creating table Table, TR,TH,TD and caption tag ",
                },
                {
                    id: "4.2",
                    name: " Applying style to table ",
                },
                {
                    id: "4.3",
                    name: "merging of rows and columns",
                },
                {
                    id: "4.4",
                    name: " Form<form> tag with action and method ,name attributes, difference between get and post method.",
                },
                {
                    id: "4.5",
                    name: " Form fields input, text area, button, select, option, field set ,label , legend fields. <input>tag with types- text, checkbox, radio, date, email, search, number, password ,range ,submit, reset, button<input> tag with auto complete, autofocus, max length, min ,name, placeholder, required attributes",
                },

            ],
        },
        //end of chapter  4

        {
            id: 5,
            title: "Frames",
            content: " In HTML, a frame refers to a way of dividing a web page into multiple sections or windows, each displaying a different HTML document. Frames were commonly used in the past to create layouts with separate scrollable areas. However, they are considered outdated and not recommended for modern web development. Instead, web developers now use more flexible and accessible techniques like CSS and responsive design to achieve desired page layouts, ensuring better compatibility and user experience across various devices and browsers.",
            subtopics: [
                {
                    id: "5.1",
                    name: "Introduction to frames",
                },
                {
                    id: "5.2",
                    name: " <iframe> tag with src, height, name , width, src, doc, sandbox",
                },
                {
                    id: "5.3",
                    name: "Apply styles to frames",
                },
            ],
        },
        //end of chapter 5

        {
            id: 6,
            title: "Adding audio/video to web page and web site hosting",
            content: "",
            subtopics: [
                {
                    id: "6.1",
                    name: " Adding audio/video using audio, video and embed tag with src, height, width, auto play,  auto buffer, control, loop attributes.",
                },
                {
                    id: "6.2",
                    name: " Publishing web site on Internet .Hiring web space, uploading files , accessing web site.",
                },

            ],
        },


        //end of chapter 6


    ],//end of subject 4






    5: [
        {
            id: 1,
            title: "Concepts Of Object- Oriented Programming",
            content: "Object-Oriented Programming (OOP) is a programming approach that revolves around the concept of objects. These objects represent real-world entities and encapsulate both data (attributes) and behavior (methods) related to them. In OOP, you organize your code into classes, which serve as blueprints for creating these objects. This promotes reusability and modularity, making it easier to manage and maintain large-scale projects. Additionally, OOP emphasizes concepts like inheritance, allowing one class to inherit attributes and methods from another, fostering code extensibility and flexibility. Polymorphism is another crucial aspect, enabling objects to take on multiple forms, enhancing adaptability in diverse scenarios. Overall, OOP provides a structured and efficient way to model and interact with complex systems in programming.",
            subtopics: [
                {
                    id: "1.1",
                    name: "Procedure Oriented Programming- concept ,characteristics, limitations",
                },
                {
                    id: "1.2",
                    name: "Object Oriented Programming- concept, characteristics, benefits",
                },
                {
                    id: "1.3",
                    name: "Difference between OOP and POP",
                },
                {
                    id: "1.4",
                    name: "Introduction to basic Concepts of Object-Oriented Programming-class, object, inheritance, polymorphism, data abstractions and encapsulation,message passing, dynamic binding",
                },
            ],
        },


        //end of chapter 1 
      
        {
            id: 2,
            title: "Introduction to C++",
            content: "C++ is a versatile programming language widely used for creating software applications. It builds upon the foundation of the C programming language, adding object-oriented features. This means that it organizes code into reusable objects, making it easier to manage complex tasks. C++ allows for both high-level abstractions and low-level memory manipulation, giving developers a powerful toolset. With its broad applicability, C++ finds applications in areas like game development, system software, and even resource-constrained environments. Learning C++ equips you with a valuable skillset for building a wide range of software solutions.",
            subtopics: [
                {
                    id: "2.1",
                    name: "Structure of C++ Program,iostream file, I/O Operators -: cin, cout, Cascading of I/O Operators, Comments in C++",
                },
                {
                    id: "2.2",
                    name: "Tokens ,Keyword, Identifiers & Constants in C++",
                },
                {
                    id: "2.3",
                    name: "Data types",
                },
                {
                    id: "2.4",
                    name: "Variable, Declarations Of Variables, symbolic constant",
                },
                {
                    id: "2.5",
                    name: "Dynamic Initialization Of variables",
                },
                {
                    id: "2.6",
                    name: "Concept of Reference Variables",
                },
                {
                    id: "2.7",
                    name: "Operators in C++ -: Arithmetic ,logical, relational, assignment operators Scope resolution operator Memory management operators -: new and delete",
                },
                {
                    id: "2.8",
                    name: "Manipulators :- endl, setw, width,left, right, setfill, setprecision,fixed",
                },
                {
                    id: "2.9",
                    name: "Control Structures -: Branching structure - if, if-else, switch looping structure- for ,while and do-while loop",
                },
            ],
        },


        //end of chapter 2

        {
            id: 3,
            title: "Functions in C++",
            content: "In C++, functions are blocks of code that perform specific tasks. They allow you to break down a program into smaller, manageable pieces. Functions take input values, called parameters, and can return an output, known as the return value. This makes code more organized and reusable, as you can call a function multiple times with different inputs. Functions also enhance the readability of your code, making it easier to understand and debug. Additionally, C++ supports both user-defined functions, which you create yourself, and built-in functions that are provided by the language, like those for mathematical calculations or string manipulations. Understanding functions is fundamental in writing efficient and modular C++ programs.",
            subtopics: [
                {
                    id: "3.1",
                    name: "The main () function",
                },
                {
                    id: "3.2",
                    name: "Function prototyping",
                },
                {
                    id: "3.3",
                    name: "Call by reference",
                },
                {
                    id: "3.4",
                    name: "Return by reference",
                },
                {
                    id: "3.5",
                    name: "Inline Functions",
                },
                {
                    id: "3.6",
                    name: "Function with Default arguments",
                },
                {
                    id: "3.7",
                    name: "Function Overloading",
                },
            ],
        },

        // end of chapter 3


        {
            id: 4,
            title: "Classes and Objects",
            content: "Certainly! In C++, classes and objects are fundamental concepts used for organizing and modeling data. A class acts like a blueprint or a template that defines the structure and behavior of objects. It encapsulates data (attributes) and functions (methods) that operate on that data. An object, on the other hand, is an instance of a class. It is created from the class blueprint and represents a specific entity with its own unique data values. Think of a class as a recipe for creating objects, and each object as a distinct dish made using that recipe. This allows for efficient code organization, reusability, and the ability to model real-world entities in a program.",
            subtopics: [
                {
                    id: "4.1",
                    name: "C structures and Classes - Limitation of C structures, Extension to structures",
                },
                {
                    id: "4.2",
                    name: "Specifying a class – creation of class, objects, accessing class members, Visibility modifiers- public, private, protected",
                },
                {
                    id: "4.3",
                    name: "Defining member functions - Outside the class definition, Inside the class definition",
                },
                {
                    id: "4.4",
                    name: "Making an outside function inline",
                },
                {
                    id: "4.5",
                    name: "Nesting of member function",
                },
                {
                    id: "4.6",
                    name: "Private member functions",
                },
                {
                    id: "4.7",
                    name: "Static Data Members and Member Functions",
                },
                {
                    id: "4.8",
                    name: "Arrays of Objects",
                },
                {
                    id: "4.9",
                    name: "Objects as function arguments",
                },
                {
                    id: "4.10",
                    name: "Friendly functions-characteristics of friend function and implementation",
                },
            ],
        },

        //end of chapter 4


        {
            id: 5,
            title: "Constructors And Destructors",
            content: "Certainly! In C++, constructors and destructors are special functions used in object-oriented programming. Constructors are like blueprints for creating objects from a class, and they are automatically called when an object is instantiated. They initialize the object's data members and set it up for use. Destructors, on the other hand, are called when an object goes out of scope or is explicitly deleted. They clean up any resources the object may have acquired during its lifetime, like memory or file handles. Constructors and destructors play a crucial role in managing the lifecycle of objects, ensuring they are properly set up and cleaned up as needed, which helps in writing robust and efficient code.",
            subtopics: [
                {
                    id: "5.1",
                    name: "Constructors-need of constructor, definition, syntax, characteristic of constructor",
                },
                {
                    id: "5.2",
                    name: "Default Constructor",
                },
                {
                    id: "5.3",
                    name: "Parameterized constructors",
                },
                {
                    id: "5.4",
                    name: "Multiple constructors in a class",
                },
                {
                    id: "5.5",
                    name: "Constructors with Default Arguments",
                },
                {
                    id: "5.6",
                    name: "Dynamic Initialization of Objects",
                },
                {
                    id: "5.7",
                    name: "Copy Constructor",
                },
                {
                    id: "5.8",
                    name: "Dynamic Constructor",
                },
                {
                    id: "5.9",
                    name: "Destructors",
                },
            ],
        },

        //end of chapter 5

        {
            id: 6,
            title: "Operator Overloading",
            content: "Operator overloading in C++ allows you to redefine the behavior of built-in operators (like +, -, *, /) for user-defined data types. This means you can make these operators work with your own custom classes or data structures, giving them more intuitive and natural syntax. For example, you can define how a custom class should behave when you add two objects using the + operator. This makes it easier to work with user-defined types, as you can use familiar operators to perform operations on them. Keep in mind that while overloading operators can make code more expressive, it should be used judiciously to maintain clarity and avoid confusion for other programmers.",
            subtopics: [
                {
                    id: "6.1",
                    name: "Defining operator overloading",
                },
                {
                    id: "6.2",
                    name: "Rules for operator overloading",
                },
                {
                    id: "6.3",
                    name: "Overloading Unary Operators",
                },
                {
                    id: "6.4",
                    name: "Overloading Binary Operators",
                },
            ],
        },

        //end of chapter 6 


        {
            id: 7,
            title: "Inheritance",
            content: "Inheritance in C++ is a fundamental concept that allows one class to inherit properties and behaviors from another class. This enables the creation of new classes based on existing ones, forming a hierarchy of related objects. The class that provides the properties is called the 'base' or 'parent' class, while the class inheriting those properties is known as the 'derived' or 'child' class. Through inheritance, the derived class gains access to the member variables and functions of the base class, which can be used directly or overridden to customize behavior. This promotes code reusability and helps organize code in a logical and efficient manner.",
            subtopics: [
                {
                    id: "7.1",
                    name: "Defining base class, Derived classes",
                },
                {
                    id: "7.2",
                    name: "Derivation Modes- public, private, protected",
                },
                {
                    id: "7.3",
                    name: "Single Inheritance",
                },
                {
                    id: "7.4",
                    name: "Making a private member inheritable",
                },
                {
                    id: "7.5",
                    name: "Multilevel Inheritance",
                },
                {
                    id: "7.6",
                    name: "Multiple Inheritance",
                },
                {
                    id: "7.7",
                    name: "Virtual Base Class",
                },
                {
                    id: "7.8",
                    name: "Hierarchical Inheritance",
                },
                {
                    id: "7.9",
                    name: "Hybrid Inheritance",
                },
                {
                    id: "7.10",
                    name: "Constructors in Derived Class",
                },
            ],
        },

        //end of chapter 7 


        {
            id: 8,
            title: "Pointers, Virtual Functions",
            content: "In C++, Pointers are like special variables that hold memory addresses. They allow us to directly manipulate and access data stored in memory. Virtual Functions, on the other hand, are a feature of object-oriented programming. They enable a base class to define a function that can be overridden by derived classes. This means that a derived class can provide its own implementation of a function defined in the base class. This is particularly useful for achieving polymorphism, where different objects can be treated in a uniform way, even if they belong to different classes. In simple terms, Pointers help us work with memory efficiently, while Virtual Functions allow us to create flexible and extensible code structures in C++.",
            subtopics: [
                {
                    id: "8.1",
                    name: "Introduction to Pointers-declaration and initialization of pointers",
                },
                {
                    id: "8.2",
                    name: "Pointers to Objects",
                },
                {
                    id: "8.3",
                    name: "this Pointer",
                },
                {
                    id: "8.4",
                    name: "Pointers to Derived classes",
                },
                {
                    id: "8.5",
                    name: "Virtual Functions, Rules for virtual function",
                },
                {
                    id: "8.6",
                    name: "Pure Virtual Function and abstract class",
                },
            ],
        },


        //end of chapter 8

        {
            id: 9,
            title: "Exception Handling",
            content: "Exception handling in C++ is a technique used to manage errors or exceptional situations that may occur during the execution of a program. It allows the program to gracefully respond to unexpected events, preventing abrupt terminations. This is achieved through the use of try, catch, and throw blocks. The 'try' block encloses the code where an exception might occur, while the 'catch' block specifies how to handle the exception if it arises. If an exception is thrown within the 'try' block, the program looks for a matching 'catch' block to handle it. If no suitable 'catch' block is found, the program may terminate. Exception handling promotes robust and reliable code by separating error-handling logic from the main program flow, enhancing the program's overall stability and user experience.",
            subtopics: [
                {
                    id: "9.1",
                    name: "Exception handling mechanism,",
                },
                {
                    id: "9.2",
                    name: "Try block, Catch handler, Throw statement.",
                },
            ],
        },

        //end of chapter 9

    ],
    //end of subject 5


    6: [
        {
            id: 1,
            title: "Grammar",
            content: "Communication skills encompass several vital elements. Firstly, understanding parts of speech enables us to construct sentences effectively by identifying the function of each word. Secondly, mastering tenses is crucial as it allows us to convey actions or events in different time frames accurately. Additionally, being able to change voice provides flexibility in expressing ideas, whether focusing on the doer or receiver of an action. Transforming sentences, such as changing assertive to exclamatory or affirmative to negative, adds depth and nuance to our expressions. Furthermore, grasping concepts like removing 'too', employing 'not only...but also', and using question tags refines our ability to convey meaning with precision. Lastly, articles play a subtle yet significant role in specifying and generalizing nouns, adding a layer of clarity to our communication. These components collectively form a solid foundation for effective and articulate communication. ",
            subtopics: [
                {
                    id: "1.1",
                    name: "1.1 Parts of Speech: Noun, Pronoun, Adjective, Verb, Adverb, Prepositions, Conjunctions, Interjections",
                },
                {
                    id: "1.2",
                    name: "Tenses",
                },
                {
                    id: "1.3",
                    name: "Change the voice",
                },
                {
                    id: "1.4",
                    name: "Transformation of sentences: Assertive to exclamatory and viceversa 1) Affirmative to negative and vice- versa 2) Remove 'too' 3) Not only…but alsos 4) Question Tag",
                },
                {
                    id: "1.5",
                    name: "Articles",
                },
            ],
        },


        //end of chapter 1
        {
            id: 2,
            title: "Notice and Agenda",
            content: "Certainly! Notice drafting involves the skill of creating clear and concise messages for various purposes, such as meetings, academic announcements, company updates, or housing notices. It requires the ability to convey information effectively, ensuring that the intended audience receives and comprehends the message. On the other hand, agenda drafting pertains to the process of outlining the topics and activities to be discussed or addressed during a meeting or event. This involves organizing the sequence of items, allocating time slots, and providing context for each agenda item. Both notice and agenda drafting are essential communication skills that play a vital role in disseminating information efficiently and facilitating productive gatherings.",

            subtopics: [
                {
                    id: "2.1",
                    name: "Notice Drafting (Notices for meetings, academic notices, to be displayed on notice boards, company notices, housing notices)Agenda Drafting",
                },
               
            ],
        },

        //end of chapter 2
        {
            id: 3,
            title: "Letter Writting",
            content: "In formal letters, you might write to the Principal for documents like Transfer Certificate, Duplicate Identity Card, or Bonafide Certificate. Another scenario could involve contacting the Librarian regarding unavailable or lost books. Addressing the Workshop Superintendent or Head of Department might be necessary for specific matters. Additionally, letters to authorities like the Commissioner of Police or Telephone Department, Ward Officer, or Magistrate may be required for various concerns. In editorial letters to newspaper editors, you could discuss local issues such as water problems, garbage/drainage concerns, transportation issues, or problems related to street dogs in your area.",

            subtopics: [
                {
                    id: "3.1",
                    name: "Fomal Letters",
                },
                {
                    id: "3.2",
                    name: "Editorial Letters",
                },
                
               
            ],
        },


        //end of chapter 3
    ],

    //end of subject 6



    7: [
        {
            id: 1,
            title: "Theory of Communication",
            content: "Communication is the process of sharing information, ideas, or thoughts between individuals or groups. It involves a sender, who initiates the message, a message itself, a channel through which it's conveyed, a receiver who interprets it, and a feedback loop for clarification. Feedback is crucial for ensuring understanding. The cycle of communication encompasses these stages, forming a continuous loop. In the business world, effective communication is vital for smooth operations, decision-making, and building relationships with clients and stakeholders. The principles of effective communication include clarity, conciseness, consideration of the audience, completeness, and correctness, ensuring messages are accurately conveyed and understood.",
            subtopics: [
                {
                    id: "1.1",
                    name: "Concept of Communication",
                },
                {
                    id: "1.2",
                    name: "Meaning and Definitions",
                },
                {
                    id: "1.3",
                    name: "Elements of Communication (sender, message, channel, receiver, feedback process ) Importance of feedback",
                },
                {
                    id: "1.4",
                    name: "Cycle of communication",
                },
                {
                    id: "1.5",
                    name: "Need & Importance in the Business world",
                },
                {
                    id: "1.6",
                    name: "Principles of Effective Communication",
                },
            ],
        },


        //end  of chapter 1
        {
            id: 2,
            title: "Objectives Of Communication",
            content: "Communication serves various crucial objectives. Firstly, it conveys information, ensuring that messages are clear and understood. It also plays a vital role in education and training, enabling the transfer of knowledge and skills. Additionally, communication serves as a source of motivation and morale-boosting, inspiring individuals and fostering a positive work environment. It is instrumental in giving orders and instructions, ensuring tasks are carried out efficiently and effectively. Furthermore, communication is a tool for persuasion and suggestion, influencing decisions and actions through compelling messages. In essence, communication is the cornerstone of effective interaction and achieving desired outcomes in various aspects of life.",
            subtopics: [
                {
                    id: "2.1",
                    name: "Information",
                },
                {
                    id: "2.2",
                    name: "Education & Training",
                },
                {
                    id: "2.3",
                    name: "Motivation & Raising Morale",
                },
                {
                    id: "2.4",
                    name: "Orders & Instructions",
                },
                {
                    id: "2.5",
                    name: "Persuasion & Suggestion",
                },
            ],
        },

        //end of chapter 2

        {
            id: 3,
            title: "Channels Of Communication",
            content: "Channels of communication can be broadly categorized into formal and informal channels. In formal communication, information flows in distinct directions: upward, which moves from employees to higher-ups; downward, which originates from management and disseminates to subordinates; vertical, involving communication across different levels of the organizational hierarchy; and horizontal, which occurs between individuals or units at the same level. On the other hand, informal communication takes the form of the grapevine, a network of unofficial and spontaneous exchanges that typically occur outside official channels. This grapevine can transmit information rapidly but may not always be reliable or accurate, making it important for organizations to maintain a balance between formal and informal channels to ensure effective communication.",
            subtopics: [
                {
                    id: "3.1",
                    name: "Formal",
                },
                {
                    id: "3.2",
                    name: "Informal-Grapevine",
                },
            ],
        },

        //end of chapter 3

        {
            id: 4,
            title: "",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "4.1",
                    name: "Subtopic 1",
                },
                {
                    id: "4.2",
                    name: "Subtopic 2",
                },
            ],
        },

        //end of chapter 4 

        {
            id: 5,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "5.1",
                    name: "Subtopic 1",
                },
                {
                    id: "5.2",
                    name: "Subtopic 2",
                },
            ],
        },


        //end of chapter 5 


        {
            id: 6,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "6.1",
                    name: "Subtopic 1",
                },
                {
                    id: "6.2",
                    name: "Subtopic 2",
                },
            ],
        },

        //end of chapter 6

        {
            id: 7,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "7.1",
                    name: "Subtopic 1",
                },
                {
                    id: "7.2",
                    name: "Subtopic 2",
                },
            ],
        },

        //end of chapter 7

        {
            id: 8,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "8.1",
                    name: "Subtopic 1",
                },
                {
                    id: "8.2",
                    name: "Subtopic 2",
                },
            ],
        },

        //end of chapter 8 

        {
            id: 9,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "9.1",
                    name: "Subtopic 1",
                },
                {
                    id: "9.2",
                    name: "Subtopic 2",
                },
            ],
        },


        //end of chapter 9 
        {
            id: 10,
            title: "Chapter 2 (Module 2)",
            content: "Content for Chapter 2 (Module 2)",
            subtopics: [
                {
                    id: "10.1",
                    name: "Subtopic 1",
                },
                {
                    id: "10.2",
                    name: "Subtopic 2",
                },
            ],
        },


        //end of chapter 10
    ],


    //end of subject 7
};

module.exports = chaptersByModule; 