# Git Together study plan and lessons

Oct 1, 2026 · @Farshad Momtaz

## Overview

This course teaches you how Git thinks. You never type a command. You never read code. You click, watch your files move, and learn why each move matters.

The course has 12 short lessons. Each lesson has 3 to 5 steps and takes about 5 minutes. You finish a step by doing the task it gives you, and then Next unlocks.

Who it's for. Absolute beginners. Writers, designers, students, managers, and anyone who works with files and other people. If you have ever saved a file called final version 2 REAL, this course is for you.

What you can do at the end.

- Explain what a repository, a snapshot, a branch, and origin are in your own words.
- Save your work in Git and go back to any earlier version.
- Share work through GitHub and bring in other people's changes.
- Try ideas on a branch and merge them back.
- Fix a conflict when two people change the same line.
- Suggest a change to someone else's project with a pull request.

How we teach.

1. Plain words first, the Git word second. You "take a snapshot" before you hear the word commit. The metaphor switch in the design handles this well.
2. One new idea per step. A step never asks you to learn two things.
3. Show, then name. You see the effect of an action in the workspace before the text explains it.
4. Same project all the way through. The recipe book grows with you, so nothing resets between lessons.
5. A teammate makes it real. Sam joins in lesson 6. Collaboration makes no sense until someone else changes things.
6. Staging comes later. Lesson 2 saves everything at once. Lesson 3 opens up the staging area and explains why it exists.

## How a step works

Every step follows the same loop. Read two lines, do one thing, see what happened, move on. Each step teaches one idea in plain words, short enough to read in 15 seconds. The technical side sits in a More details box that stays closed unless you open it.

1. The left panel shows the step title, two or three short paragraphs, and a Your task box. You can switch to Watch for a short video of the same step.
2. You do the task in the workspace on the right. Tasks are buttons and simple actions like Edit, Stage, Commit, Push, Pull, New branch, Switch, and Merge.
3. The workspace checks your work. Each step has one done condition, like "pancakes.md is in local history". When it's true, the task box turns green and shows a short done message.
4. Next unlocks. Back always works. You can't skip ahead past a step you haven't finished.

Every step has the same five parts. The first four match the fields in your design (title, body, task, doneMsg). More details is new.

| Part | Limit | Example |
| --- | --- | --- |
| Title | 5 words | Stage a change |
| Body | 1 or 2 short paragraphs, 40 words total | Staging picks what goes into the next snapshot. Staged files wait {at1}. |
| Task | 1 sentence that starts with Press or Click | Press Stage to stage pancakes.md. |
| Done message | 1 or 2 sentences | pancakes.md is now {at1}. |
| More details | Closed by default, 60 words or less | In Git's own words this is git add. |

More details is where the real Git words, the real commands, and the why live. People who skip it still finish the course.

The workspace has four places, the same as in your design.

| Place | Plain name | What lives there |
| --- | --- | --- |
| Working files | Your desk | The files you edit right now |
| Staging area | Next snapshot | Changes you picked for the next save |
| Local history | Your snapshots | Every snapshot you saved on your computer |
| Origin | GitHub | The shared copy other people use |

Three more panels appear only when a lesson needs them.

- Sam's snapshots, from lesson 6. No extra panel. Sam's snapshots just appear on origin with Sam's name on them.
- Branch lines, from lesson 7. Local history turns from a list into lines, one line per branch.
- Pull requests, from lesson 10. A tab inside origin that lists open requests with comments.

Wrong moves don't break anything. If you press a button the task didn't ask for, the workspace shows what happened and a Try again hint. A Reset step button puts the workspace back to how the step started.

## The recipe book and Sam

You work on one project the whole way through. It's a small family recipe book.

| File | Starts as | Used for |
| --- | --- | --- |
| pancakes.md | 1 egg, 1 cup flour, 1 cup milk | Your first edits and your first conflict |
| groceries.txt | A short shopping list | Changes you want to leave out of a snapshot |
| cookies.md | Added in lesson 2 | Your first new file |
| notes.txt | Private notes to yourself | Ignored files in lesson 12 |
| soup.md | Added by Sam in lesson 6 | Changes that come from someone else |

Your design names the shopping list file with a dash. I renamed it groceries.txt so file names stay short and plain.

Sam is your teammate. They show up in lesson 6. You never see Sam work. Their snapshots just appear on origin. You react to what they push. In lesson 9 Sam changes the same line in pancakes.md that you changed. That's the conflict lesson.

One more person shows up in lesson 11. Alex runs a big public cookbook on GitHub. You copy Alex's project and send them a recipe.

## Study plan

12 lessons in four parts. Part 1 works alone on your computer. Part 2 adds GitHub and Sam. Part 3 adds branches. Part 4 covers working with people outside your team.

Your design lists 8 lessons. This plan keeps all 8 in the same order and adds 4 more. Lesson 3 (staging) and lesson 4 (going back) are new in Part 1. Lessons 10 and 12 are new at the end.

| # | Lesson | You learn | Git words | Steps |
| --- | --- | --- | --- | --- |
|  | **Part 1. Just you** |  |  |  |
| 1 | What is a repository | Git tracks one folder so you stop making copies | repository | 3 |
| 2 | Taking snapshots | Save a moment in time with a message | commit, history | 4 |
| 3 | Choosing what to save | Pick only some changes for the next snapshot | staging area, stage, unstage | 4 |
| 4 | Going back in time | Look at old snapshots and undo mistakes | discard, revert | 4 |
|  | **Part 2. You and GitHub** |  |  |  |
| 5 | Sending to origin | Put your snapshots on GitHub | origin, push | 3 |
| 6 | Getting updates | Bring Sam's changes to your computer | pull, behind | 4 |
|  | **Part 3. Trying ideas safely** |  |  |  |
| 7 | Branches | Try an idea without touching the main recipe book | branch, main, switch | 5 |
| 8 | Merging | Bring a finished idea back into main | merge | 4 |
| 9 | When changes collide | Decide when you and Sam change the same line | conflict | 4 |
|  | **Part 4. Working with others** |  |  |  |
| 10 | Asking before merging | Propose a change and get it reviewed | pull request, review | 4 |
| 11 | Copying a project | Add to a project you don't own | fork, clone | 4 |
| 12 | Good habits | Keep private files out and mark versions | ignore, tag, release | 4 |

That's 47 steps and about an hour in total. Each part ends with a 3 question quiz. Your design already floats the quiz idea.

## Lessons

Each lesson lists its steps, the task you do, and the done condition the workspace checks. The words for each step live in Step text.

### Lesson 1. What is a repository

You start with a normal folder and no Git. It holds pancakes.md, pancakes final.md, pancakes final v2.md, and groceries.txt. You end with a repository and one snapshot.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | The messy folder | Delete every pancake file except the newest one | Only pancakes.md and groceries.txt are left |
| 2 | Start tracking | Press Start tracking | The folder becomes a repository and local history shows snapshot 1 |
| 3 | Git is watching | Press Edit on groceries.txt to add milk | groceries.txt shows Changed |

The big idea. Git keeps one copy of each file and remembers every old version for you. Step 1 should feel annoying on purpose.

### Lesson 2. Taking snapshots

The staging area stays hidden in this lesson. Commit saves every change at once.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Change a file | Press Edit to add blueberries to pancakes.md | pancakes.md shows Changed |
| 2 | Take a snapshot | Press Commit and type a message | Snapshot 2 is in local history and pancakes.md shows Unchanged |
| 3 | Add a new file | Press New file and name it cookies.md | cookies.md shows New |
| 4 | Write a good message | Press Commit and pick the clearest of three messages | Snapshot 3 says Add cookie recipe |

The big idea. A snapshot saves every tracked file at one moment. The message tells future you what changed and why.

### Lesson 3. Choosing what to save

This lesson matches your current lesson 2 design. You start with three changes. pancakes.md has syrup added, groceries.txt is half done, and notes.txt is new.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Stage a change | Press Stage on pancakes.md | pancakes.md is in the staging area |
| 2 | Stage a new file | Press Stage on notes.txt | notes.txt is in the staging area |
| 3 | Take it back out | Press Unstage on notes.txt | notes.txt is back in working files, still New |
| 4 | Take a snapshot | Press Commit | Snapshot 4 holds pancakes.md only, and groceries.txt still shows Changed |

The big idea. You don't have to save everything at once. Finished work goes in the snapshot. Half done work waits.

### Lesson 4. Going back in time

You start with a bad snapshot already in history. Someone saved "Add 10 cups of salt" to cookies.md.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Visit the past | Click snapshot 2 and press View | Working files show the old version |
| 2 | Come back to now | Press Back to now | Working files show the latest snapshot |
| 3 | Throw away an edit | Edit groceries.txt, then press Discard | groceries.txt matches the last snapshot |
| 4 | Undo a snapshot | Click the salt snapshot and press Revert | A new snapshot removes the salt, and the salt snapshot stays in history |

The big idea. Git never erases history. Undo adds a new snapshot that reverses the old one.

### Lesson 5. Sending to origin

Origin appears for the first time. It starts as an empty project on GitHub.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Meet origin | Press Connect to GitHub | Origin is linked and empty |
| 2 | Push | Press Push | Origin history matches local history |
| 3 | Push again | Edit cookies.md, commit, then push | Origin has your new snapshot |

The big idea. Your snapshots stay local until you push. Origin is the shared copy.

### Lesson 6. Getting updates

Sam joins. Sam's snapshots appear on origin between steps.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Sam adds a recipe | Click Sam's new snapshot on origin | You clicked it, and local shows 1 behind |
| 2 | Pull | Press Pull | soup.md is in your working files |
| 3 | Push gets refused | Commit a change and press Push | Git refuses because Sam pushed again |
| 4 | Pull, then push | Press Pull, then Push | Origin has your snapshot and Sam's |

The big idea. Nothing on origin reaches you until you ask for it. Pull before you push.

### Lesson 7. Branches

Local history turns from a list into lines. You want to try a vegan pancake recipe without changing the real one.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Make a branch | Press New branch and name it vegan | A vegan branch starts from your latest snapshot |
| 2 | Switch to it | Press Switch to vegan | Your current branch is vegan |
| 3 | Work on the branch | Swap the egg for a banana in pancakes.md and commit | The new snapshot is on vegan only |
| 4 | Switch back | Press Switch to main | pancakes.md has the egg again |
| 5 | Share the branch | Push vegan | Origin shows a vegan branch next to main |

The big idea. A branch is a separate line of snapshots. Main stays safe while you try things.

### Lesson 8. Merging

The vegan recipe works. Time to bring it into main.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Main moved on | Pull main to get Sam's typo fix | Main has a snapshot that vegan doesn't have |
| 2 | Merge | On main, press Merge and pick vegan | A merge snapshot joins the two lines, and pancakes.md has the banana and the typo fix |
| 3 | Clean up | Press Delete branch on vegan | The branch name is gone, but its snapshots stay in main |
| 4 | Share it | Push main | Origin main has the merge snapshot |

The big idea. Merging combines two lines of work. Git does it on its own when the changes don't touch the same lines.

### Lesson 9. When changes collide

You set pancakes.md to 2 eggs. Sam sets it to 3 eggs and pushes first.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Same line, two answers | Commit your 2 eggs change | Your snapshot is in local history |
| 2 | Pull | Press Pull | Git stops and marks pancakes.md as Conflict |
| 3 | Pick an answer | Open pancakes.md and keep 2 eggs, 3 eggs, or write your own | The conflict marks are gone |
| 4 | Finish up | Commit, then push | Origin has your fixed version |

The big idea. Git can't guess which line is right. You decide.

### Lesson 10. Asking before merging

Origin gets a Pull requests tab. Sam reviews your change before it goes into main.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Work on a branch | Make a syrup branch, add maple syrup to pancakes.md, commit, push | Origin has a syrup branch |
| 2 | Open a pull request | Press New pull request and pick syrup into main | A pull request is open on origin |
| 3 | Answer the review | Sam asks for 2 spoons instead of 1. Edit, commit, push | The pull request shows your new snapshot |
| 4 | Merge it | Sam approves. Press Merge pull request | Origin main has the syrup change |

The big idea. A pull request asks "can this go into main?" and gives people a place to talk first.

### Lesson 11. Copying a project

Alex runs a big public cookbook on GitHub. You don't have permission to push to it.

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | You can't push here | Press Push on Alex's cookbook | GitHub refuses |
| 2 | Fork it | Press Fork | You have your own copy of the cookbook on GitHub |
| 3 | Add your recipe | Clone your fork, add pancakes.md, commit, push | Your fork has your recipe |
| 4 | Send it to Alex | Open a pull request from your fork to Alex's cookbook | Alex merges it |

The big idea. A fork is your own copy of someone else's project. A pull request sends your change back to them.

### Lesson 12. Good habits

| # | Step | Your task | Done when |
| --- | --- | --- | --- |
| 1 | Keep notes private | Press Ignore on notes.txt | notes.txt goes grey and can't be staged |
| 2 | Mark a version | Press New tag on your latest snapshot and name it Summer edition | The tag shows in history |
| 3 | Publish it | Push the tag | Origin shows a Summer edition release |
| 4 | Recap | Match each Git word to its plain meaning | All 8 pairs match |

The big idea. Small habits keep a shared project clean.

## Open questions

- [ ] Staging. Your design teaches staging in lesson 2. This plan moves it to lesson 3, as you picked. Do you want to rework the design's lesson numbering?
- [ ] Metaphors. Four metaphor sets mean four versions of every line of text. I'd pick one for launch, either plain or desk, and add the rest later.
- [ ] Video. One short video per lesson or one per step? One per lesson is cheaper, and I recommend it.
- [ ] Typing. Commit messages and branch names are typed or picked from a list? Picking is faster and easier to check.
- [ ] Lesson 1. It starts with a plain folder and no Git. The workspace needs a state with no history panel. Does that fit your layout?
- [ ] Lesson 11. Alex's cookbook needs a second origin panel. That's the only lesson with two.
- [ ] Names. Sam and Alex work for you?
