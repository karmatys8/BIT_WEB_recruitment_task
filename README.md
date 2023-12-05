# BIT WEB recruitment task

## Contents

1. [About the task](#about-the-task)
2. [Result](#result)
3. [What I have learned](#what-i-have-learned)
4. [Bugs/Issues](#bugsissues)
5. [Further improvements](#further-improvements)

## About the task

I had 2 weeks to complete [this task](BitWebTask.pdf).

Also one of the recruiters mentioned to me in the DM that the project doesn't have to be exactly as specified in the task. He also said that the more advanced the project the better.

In short I had to:

* Fetch data about Nobel Prizes from APi.
* At the home page there should be a year dropdown/select.
* Under it there should be a button that is disabled until a year has been chosen.
* On button click user should be routed to /rewards/:year
* On /rewards/:year there should be a table with year, category, date in DD.MM.YYYY format and prize amount.

Additional tasks were:

* On the home page add a language selector and allow the user to pick from English/Norwegian/Swedish. Changes should be shown in the table on /rewards/:year.
* Table sorting and filtering.
* UI. MUI was recommended.

I also wrote and sent [markdown file](sentREADME.md) that was required.

## How to install

*Make sure that you have npm installed.*
1. Go to folder in which you want to download this project.
2. Write in terminal: `git clone https://github.com/karmatys8/BIT_WEB_recruitment_task.git`
3. Write in terminal: `cd BIT_WEB_recruitment_task`
4. Write in terminal: `npm install`
5. Write in terminal: `npm start` ***or both*** `npm run build` ***and*** `serve -s build`

After those steps the app will be available [here](http://localhost:3000).

## Result

I wasn't accepted.

Reason:
'As many as 18 candidates applied for the project, so unfortunately "very good work" wasn't enough.' - quote by recruitment team

## What I have learned

1. Material UI
2. React router dom
3. React i18next
4. Better understanding of types in TS

## Bugs/Issues

1. There is a Warning: Cannot update a component (`MyAppBar`) while rendering a different component (`SharedLayout`). To locate the bad setState() call inside `SharedLayout`. To be frank I didn't have time to fix it. My best assumption is that when isDarkMode state updates MUI Switch updates and then SharedLayout cannot update because MyAppBar component hasn't re-rendered yet. *Website still works but it is a bad practice.*
2. There is a light theme flashing while dark-mode is activated. It happens because dark mode logic happens after the html element is already loaded.

## Further improvements

1. I assumed that I was supposed to build a custom Table so I didn't use Data Grid. Which has built in sorting and filtering which obviously are more optimized than my code.
2. User preferred color scheme is not taken into account. It could be done with useMediaQuery('(prefers-color-scheme: dark)').
3. Error Page could look nicer.
4. When not available year is typed in there should be some placeholder/info.
5. Repo's architecture. For instance Year.tsx is clearly too large and src is kinda thrashed.
6. Some variables should be renamed.
7. Title, icon etc. are from template and should be customized.