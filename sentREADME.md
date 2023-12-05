# BIT WEB recruitment task

## Spis treści

1. [Instrukcja uruchomienia](#instrukcja-uruchomienia)
2. [Dlaczego ja?](#dlaczego-ja)
3. [Further improvements](#further-improvements)

## Instrukcja uruchomienia

*W całej instrukcji zakładam że masz zainstalowany npm.*
1. Przejdź w terminalu do folderu w którym chcesz repo do sprawdzenia.
2. Wpisz w terminalu: `git clone https://github.com/karmatys8/BIT_WEB_recruitment_task.git`
3. Wpisz w terminalu: `cd BIT_WEB_recruitment_task`
4. Wpisz w terminalu: `npm install`
5. Wpisz w terminalu: `npm start` lub kolejno `npm run build` oraz `serve -s build`

## Moje doświadczenie

1. W wolnym czasie od prawie roku piszę Front End.
2. Z Reacta korzystam od czerwca 2023.
3. Z TS korzystam od września 2023.
**Więcej informacji możesz zdobyć przeglądając moje konto**

## Dlaczego ja?

1. Komunikacja z innymi ludźmi przychodzi mi z łatwością.
2. Szybko się uczę - MUI, Routingu i i18next nauczyłem się na potrzeby tego projektu. I uważam że jak na niecałe 2 tygodnie to wyszło całkiem nieźle :)
3. Pisanie Front Endu jest dla mnie przyjemnością, swego rodzaju hobby.
4. Zależy mi na lepszym UI i UX Enrolla bo z niego korzystam. I ogólnie chciałbym wziąć udział w większym projekcie.


## Further improvements

1. I assumed that you wanted me to build a custom Table so I didn't use Data Grid. Which has built in sorting and filtering that obviously are more optimized than my code.
2. There is an Warning: Cannot update a component (`MyAppBar`) while rendering a different component (`SharedLayout`). To locate the bad setState() call inside `SharedLayout`. To be frank I don't have time to fix it. My best assumption is that when isDarkMode state updates MUI Switch updates and then SharedLayout cannot update because MyAppBar component hasn't re-rendered yet. *Website still works but it is a bad practice*
3. User preferred color scheme is not taken into account. It could be done with useMediaQuery('(prefers-color-scheme: dark)').
4. There is a light theme flashing while dark-mode is activated. It happens because dark mode logic happens after the html element is already loaded.
5. Error Page could look nicer.
6. When not available year is typed in there should be some placeholder/info.
7. Repo's architecture. For instance Year.tsx is clearly too large and src is kinda thrashed.
8. Some variables should be renamed.