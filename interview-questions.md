# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. They are both scripting languages (read top down left right by computer)
2. Both are dynamically typed (don't have to declare variable type)
3. Both can implement OOP principles, though in ruby it isn't much of an option

Differences

1. Everything in ruby is a class or instance of one (obj)
2. Most ruby methods aren't mutators (won't permanently change the data, has to be saved to a variable)
3. Return in ruby is implicit (always last line)

Researched answer:

Differences

1. The general syntax of both
2. JS is client-side whereas ruby is server-side
3. JS is more scaleable than Ruby
4. JS is asynchronous (executing tasks while waiting for other operations to complete) and ruby is synchronous

Similarities

1. High function utilization
2. Both are interpreted languages (run real time rather than compiled)
3. Ruby was influenced by many of the same languages that influenced the creation of js

4. What does it mean to implement a TDD workflow?
   **had to refer back to notes to remember what TDD stands for**
   Your answer: Test driven development means approaching problem solving almost counter-intuitively. The tester must first work backwards by constructing a test meant to make a function not yet created pass/fail accordingly. Then and only then may they build out the actual solution.

Researched answer: Test driven development says you write the test first and then you implement code changes until your code passes the test you already wrote. The workflow is often referred to as red-green-refactor.

3. What is a block in Ruby?

Your answer: A block in ruby is everything between a do and an end. Blocks in coding (to my knowledge) signify scope.

Researched answer: Ruby blocks are anonymous functions and are enclosed in a do-end statement. Ruby blocks don't create a new scope, but they inherit the scope in which they are defined.

4. STRETCH: What is a version manager?
   **I have notes on this**
   Answer: In ruby, the version manager is RVM(ruby version manager?) and it allows the user to run multiple versions of ruby. Now for the why...
   The internet says this is particularly useful when working on multiple projects that may require different versions of ruby or when code needs to be tested across different ruby versions.

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. HTTP: Hypertext transfer protocol is a set of rules for how computers communicate over the internet. It allows users to browse web pages, send and receive data, and interact with websites.

2. Model validations: Model validations are little checks that ensure the information trying to be saved is correct and meets certain rules. This helps keep data accurate and the application working smoothly.

3. Params: Params are a way to receive and process data from users in an HTTP request, allowing for dynamic and interactive experiences.
