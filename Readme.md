# Upwork Interview

Congratulations on being the selected for this next round 🎉

The goal of this task is to guage how you will perform exactly the kinds of tasks you will be doing for this project. Your performance will be weighed with your original proposal when I make my final decision.

## What I am looking for

I have hired you for a set amount of hours to complete this task (see our Upwork conversation for the number of hours you have). Based on these hours, I am judging you based off of:

- The quality of your results in this task
- The efficiency at which you complete this task
- Your creativity and understanding of the core material.

Please work at a similar pace at which you would work on any project.

## Do I need to complete everything before submitting?

Absolutely not. In fact, I expect that many will not be able to complete everything listed out in this assignment - that's okay! I intentionally designed this interview to try to determine how much you are able to do in the given timeframe (and what the quality of that work is like), and do not have the expectation that you will finish everything.

If you run out of time, please simply submit what you have (instructions for submission are given in a later section in this document). Half-finished work is better than no work at all! 😀

## The task

Let's begin!

Your task is to design your own course on how to build a RESTful API in NodeJS. You can assume the following:

1. Your students already know the syntax/semantics of JavaScript and are familiar enough with Node that they can start programming right away.
2. You may use any additional framework or tool you are comfortable with in your code examples.
3. You may use any resources you like in your lessons (images, blog posts, textbooks, technical talks) as long as you provide a link to the source.

## What is required

To follow along, look at the example provided in the [Example](./Example) folder. When you are ready, place all of your work into the [Solution](./Solution) folder.

Your lesson must start with an Outline.md file, which includes three things:

1. Learning Goal - This is where you will write down the purpose of your course; that is, what you hope your students will learn after taking your RESTful APIs in NodeJS course.
2. Lessons - The title of each lesson within your course and a short description on what your lesson will focus on.
3. Resources - If you consulted any online resources when constructing your course or lesson plans, please include your links here.

Then, each of the lesson files should be created in a separate folder. An indiviudal lesson should have:

1. Lesson.md - The content of the lesson itself. This should be in a bullet-point format (similar to how a bullet point would look in a powerpoint slide), but you can also include images if they help explain your point. No need to worry too much about spelling / grammar, I'm just looking for your ability to explain the concepts 🙂
2. Code (folder) - A folder than includes any sample code you used in your lesson that requires more space than can fit in a single markdown snippet. Direct your students to specific files in the Code folder in your Lesson.md and use code comments in the sample code to help explain your point further.
3. Assignment.md - After the lesson is over, give your students a short assignment to apply the concepts you just taught them to help reinforce your lesson.
4. Assignment (folder) - A folder that contains the starter code for the assignment you described in Assignment.md.
5. Solution (folder) - A folder that contains the expected solution to your assignment. Of course, there may be multiple "correct" answers, but you only need to include ONE possible solution here 😀

Please see the Example for a good sense of what I am looking for.

Given that this task is fairly complex and you have a limited amount of time it is okay not to finish everything before you submit. For instance, in the example I have laid out a course outline and 3 lesson folders, but you'll notice only 1 of them is actually complete ("Imperative vs Functional Programming"), and the rest are stubs. This is to demonstrate what an incomplete submission might look like.

<strong>It is very important that you do this work on a separate git branch. Do NOT push directly to the main branch. See the "How to submit" section later in this document for more details. </strong>

## The steps

You may perform this task in whatever way you like, but if you get stuck here is the order I would recommend doing things:

1. Start with the course outline. Think about all of the things you would teach a beginner about how to design and build RESTful APISs in NodeJS and condense it to a handful of core concepts. Feel free to use examples online for your inspiration (but remember to include the links to the resources you used).
2. Once you have the course outline, create a folder for each of your lessons and add a Lesson.md file. You can add a one line desription of the lesson in these files for now just to remind yourself of what you intend the lesson to be about.
3. Start with your first lesson. Write down the key points you want to teach in bulleted format. Then add your code samples that gives a basic rundown of the concepts and reference these code samples in your lesson. Make sure your lesson is focussed on a single subject and use lots of examples to illustrate your points.
4. Then design the assignment for this lesson. What should your students be able to do by the end of this lesson? Think of a specific application of your lesson and write the solution to the assignment first. Then copy that solution into the assignment folder and remove the code you want your students to figure out for themselves, adding code comments along the way to help them out.
5. Repeat steps 3-4 for the next lesson(s). Feel free to modify your course outline along the way as the details of each lesson become more clear to you.
6. Remember to leave time at the end to submit everything you have (instructions below)!

## How to submit

You will submit your interview assignment by making a PR to the main branch using Git and Github. If you already know how to do this, great! If not I have given some instructions below:

First, you will need to create a branch in your name. E.g:

> git checkout -b My-Name-Upwork-Interview

Then, commit all of your changes to the branch. Remember to use `.gitignore` for any changes that should not be committed (these include IDE setup files, third-party packages, etc.)

> git add .

> git commit -m "Submit assignment"

> git push -u origin My-Name-Upwork-Interview

Then, in Github, navigate to this repo and click "Compare & pull request" to make a PR against the main branch.

Add a descriptive title in your PR and include the following in your description:

- A summary of what you were able to finish in this assignment.
- An estimate of how long you think it would take you to finish everything asked in this assignment (please be honest here. I'd prefer realistic estimates over exagerated estimates).
- How would you have improved your course outline, code examples, and assignments if you had more time?
- If there is anything I should know about your submission in particular (for example, maybe you submitted less than you otherwise would because you had trouble installing dependencies - I'd love to be able to take things like this into account when making a final decision).
- Any feedback you have for me on this assignment / interviewing process.

Lastly, please message me on Upwork when you have completed your assignment.

## Final thoughts

Thank you for giving me your time to do this interview. I know this task may be a little outside of what you are used to doing on upwork, but remember that I wouldn't have chosen you for this round of interview if I didn't think you could rise to the challenge.

All submissions are due at 10:00 pm PDT on Friday May 7th. I will then use the weekend to review all submissions and make my final hiring decision by Monday May 10th.

Please reach out on upwork if you have any questions about the assignment and I will do my best to answer them as soon as I can in my timezone.

Good luck!
