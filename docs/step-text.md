# Step text

These are the words for the left panel, step by step. Each step uses your design's fields, plus the new More details box. Tokens like {at0} get swapped by the metaphor switch, the same way your design does it.

We polish one lesson at a time, starting with lesson 1. Lessons 2 to 8 below are rough drafts. Lessons 9 to 12 come later.

| Token | Plain metaphor reads |
| --- | --- |
| {at0} | in your working files |
| {at1} | in the staging area |
| {at2} | in your local history |
| {at3} | on origin |
| {T3} | Origin |

Your design has Edit, Stage, Unstage, Commit, and Push. These lessons also need Start tracking, Delete, New file, Discard, View, Back to now, Revert, Connect to GitHub, Pull, New branch, Switch, Merge, Delete branch, New pull request, Merge pull request, Fork, Clone, Ignore, and New tag.

## Lesson 1. What is a repository

**Lesson card** 4 min. Why your folders fill up with copies, and how Git stops it.

**Starts with** A plain folder and no Git. The workspace shows one panel, called Your folder. Local history, staging, and origin stay hidden.

| File | Last edited |
| --- | --- |
| pancakes final.md | Monday |
| pancakes final v2.md | Wednesday |
| pancakes.md | Friday |
| groceries.txt | Friday |

### 1.1 The messy folder

You've probably done this. You change a file, get nervous, and save a copy just in case. A week later you have three versions and you're not sure which one is current.

This recipe book has that problem. Find the newest pancake recipe by its date.

**Task** Press Delete on the two older pancake files.

**Done** Notice the file called final wasn't the newest. Names lie. Git fixes this by keeping one file and remembering every version of it for you.

**Check** pancakes final.md and pancakes final v2.md are gone, and pancakes.md is still there.

**Wrong move** If you delete pancakes.md, show this. "That was the newest one. In a normal folder, deleted means gone for good. Press Reset step and try again."

> **More details** Copies feel safe, but they don't tell you what changed or why. Git stores every version inside the project with a note about each change, so you never keep copies by hand again.

### 1.2 Start tracking

You want the safety of those copies without the mess. That's what a repository gives you.

A repository is a folder where Git keeps every version of every file. When you start one, Git saves your files as they are right now. That's your first snapshot.

**Task** Press Start tracking.

**Done** From now on, you can always get back to this exact moment, no matter what you change later.

**Check** The repository exists and local history holds Snapshot 1.

**Workspace** Your folder becomes working files. Local history slides in next to it with one snapshot, called Start of the recipe book.

> **More details** Real Git does this in two moves. git init turns the folder into a repository by adding a hidden .git folder, and your first commit saves the snapshot. Here we did both at once. You'll often hear repository shortened to repo.

### 1.3 Git notices changes

You don't have to remember which files you touched. Git compares each file to the last snapshot and spots the differences for you.

Try it. Add something to the shopping list.

**Task** Press Edit to add milk to groceries.txt.

**Done** Git marked groceries.txt as Changed, but it didn't save anything. Saving is always your call. That's the next lesson.

**Check** groceries.txt shows Changed.

> **More details** The command git status lists every file that's different from the last snapshot. Files Git has never saved show up as New. Git calls those untracked.

### End of lesson

You started with three copies of one recipe and no idea which was right. Now you have one copy of each file and a snapshot you can always go back to.

**Up next** Lesson 2. Taking snapshots. You'll save that milk, and as many changes after it as you like.

## Lesson 2. Taking snapshots

### 2.1 Change a file

A snapshot saves how every file looks at one moment. You can go back to it any time.

First, you need something to save.

**Task** Press Edit to add blueberries to pancakes.md.

**Done** pancakes.md is marked Changed, next to groceries.txt.

> **More details** Git tracks changes line by line. It sees one new line in pancakes.md. When you look back later, Git shows you that exact line.

### 2.2 Take a snapshot

Git calls a snapshot a commit. Every commit gets a short message that says what changed.

After you commit, your files match the snapshot. So they go back to Unchanged.

**Task** Press Commit and type a message, like Add blueberries.

**Done** Snapshot 2 is {at2}. Both files are Unchanged again.

> **More details** A commit stores the changed files, your message, your name, and the time. It also gets an ID, a long mix of letters and numbers. The command is git commit.

### 2.3 Add a new file

New files work the same way. Git spots them and marks them New until they're in a snapshot.

**Task** Press New file and name it cookies.md.

**Done** cookies.md is marked New. Git sees it but has never saved it.

> **More details** Git calls these untracked files. Real Git won't put them in a commit until you add them. For now, Commit adds them for you. Lesson 3 shows how that works.

### 2.4 Write a good message

Months from now, you'll read these messages to find a change. "stuff" won't help you. "Add cookie recipe" will.

A good message says what changed in a few words.

**Task** Press Commit and pick the clearest message.

**Done** Snapshot 3 says Add cookie recipe. Your history reads like a list of what happened.

> **More details** Teams usually start a message with a verb, like Add, Fix, or Remove. Keep the first line short, around 50 letters. Add more lines below it to explain why.

## Lesson 3. Choosing what to save

### 3.1 Stage a change

You have three changes. pancakes.md is finished. groceries.txt is half done. notes.txt is new. You only want to save pancakes.md.

So you stage it. Staging picks what goes into the next snapshot. Staged files wait {at1}.

**Task** Press Stage to stage pancakes.md.

**Done** pancakes.md is now {at1}. It will be part of your next snapshot.

> **More details** Git calls this git add. The staging area is also called the index. It lets you make clean snapshots, one idea each. Until now, Commit staged everything for you.

### 3.2 Stage a new file

notes.txt is a page Git has never seen, so it's marked New. You stage new files the same way.

**Task** Press Stage to stage notes.txt.

**Done** Both files are {at1} now.

> **More details** Staging a new file is how Git starts tracking it. After it's in a snapshot, Git watches it like every other file.

### 3.3 Take it back out

Changed your mind? notes.txt holds private notes. They don't belong in the recipe book.

Unstage takes a file out of the next snapshot. Your edits stay safe {at0}.

**Task** Press Unstage to unstage notes.txt.

**Done** notes.txt is back {at0}, still New. Only pancakes.md is staged.

> **More details** Unstage never deletes your work. It only changes what goes in the next snapshot. The command is git restore with the staged option. Lesson 12 shows how to make Git ignore a file for good.

### 3.4 Take a snapshot

Now commit. Only what's {at1} goes in. Everything else stays where it is.

**Task** Press Commit to take a snapshot.

**Done** Snapshot 4 is {at2}. groceries.txt and notes.txt didn't move.

> **More details** This is why staging exists. You can work on five things at once and still save them as five clean snapshots.

## Lesson 4. Going back in time

### 4.1 Visit the past

Every snapshot is a moment you can go back to. Looking at one changes nothing.

**Task** Click snapshot 2 and press View.

**Done** Your files show the recipe book as it was in snapshot 2. No cookies yet.

> **More details** The command is git checkout with a snapshot ID. Git calls this detached HEAD. It sounds scary, but it only means you're looking at an old snapshot.

### 4.2 Come back to now

You're still in the past. Time to come back.

**Task** Press Back to now.

**Done** Your files show the latest snapshot again.

> **More details** HEAD is Git's name for where you are right now. Coming back moves HEAD to the newest snapshot.

### 4.3 Throw away an edit

groceries.txt still has a half done edit. You don't need it anymore.

Discard puts a file back to how it looked in the last snapshot.

**Task** Press Discard on groceries.txt.

**Done** groceries.txt matches the last snapshot. The edit is gone.

> **More details** Discard can't be undone. The edit was never in a snapshot, so Git has no copy of it. The command is git restore.

### 4.4 Undo a snapshot

Someone saved 10 cups of salt into cookies.md. That snapshot is already in history.

Revert makes a new snapshot that undoes the bad one. The bad one stays, so you can always see what happened.

**Task** Click the salt snapshot and press Revert.

**Done** A new snapshot removes the salt. The salt snapshot is still in history.

> **More details** The command is git revert. Git also has git reset, which can erase snapshots. Avoid it on shared work, because other people may already have those snapshots.

## Lesson 5. Sending to origin

### 5.1 Meet origin

So far, every snapshot is local. Only you have them.

Origin is a copy of the project on GitHub. It's the shared copy everyone works from. You connect it once.

**Task** Press Connect to GitHub.

**Done** {T3} is connected. It's empty for now.

> **More details** Git calls any copy somewhere else a remote. The main one is named origin by habit. The command is git remote add.

### 5.2 Push

Pushing sends your snapshots {at3}. Only snapshots go. Edits you haven't committed stay put.

**Task** Press Push.

**Done** {T3} has every snapshot you have.

> **More details** The command is git push. Push sends commits, never loose edits or staged files. That's why origin has no staging area.

### 5.3 Push again

Pushing isn't a one time thing. Every new snapshot waits until you push it.

**Task** Press Edit on cookies.md, press Commit, then press Push.

**Done** {T3} has your new snapshot too.

> **More details** Before you push, local history shows 1 ahead. Ahead means you have snapshots origin doesn't. Push and it goes back to 0.

## Lesson 6. Getting updates

### 6.1 Sam adds a recipe

Sam is helping with the recipe book. They just pushed a soup recipe {at3}.

It's not in your files. Git never brings in other people's work until you ask.

**Task** Click Sam's new snapshot {at3}.

**Done** That's Sam's soup recipe. You're 1 behind {T3}.

> **More details** Behind means origin has snapshots you don't. Git checks for them with git fetch, which downloads them without touching your files.

### 6.2 Pull

Pull brings new snapshots from {T3} and updates your files.

**Task** Press Pull.

**Done** soup.md is {at0}. You're up to date.

> **More details** Pull is two moves in one. git fetch downloads the snapshots. Then git merge adds them to your work.

### 6.3 Push gets refused

You fixed a typo and committed it. But Sam pushed again while you worked.

**Task** Press Push.

**Done** {T3} said no. It has a snapshot you don't have yet.

> **More details** Git refuses on purpose. If it took your push, Sam's newest snapshot would be lost.

### 6.4 Pull, then push

The fix is easy. Pull first, then push.

**Task** Press Pull, then press Push.

**Done** {T3} has your snapshot and Sam's. Good habit. Pull before you push.

> **More details** When both of you have new snapshots, pull joins them with a merge snapshot. Lesson 8 covers merging.

## Lesson 7. Branches

### 7.1 Make a branch

You want to try vegan pancakes. But Sam cooks from the main recipe every morning. You don't want to break it.

A branch is a separate line of snapshots. You try things there. Main stays safe.

**Task** Press New branch and name it vegan.

**Done** The vegan branch starts at your latest snapshot.

> **More details** main is just the first branch. Older projects call it master. The command is git branch.

### 7.2 Switch to it

Making a branch doesn't put you on it. You switch to it.

**Task** Press Switch and pick vegan.

**Done** You're on vegan now. New snapshots land here.

> **More details** The command is git switch. The branch you're on is the one HEAD points to.

### 7.3 Work on the branch

Change the recipe and save it. The snapshot goes on vegan only.

**Task** Press Edit to swap the egg for a banana in pancakes.md, then press Commit.

**Done** The new snapshot is on vegan. main didn't change.

> **More details** A branch is a label that moves forward with every commit. vegan moved. main stayed where it was.

### 7.4 Switch back

Watch pancakes.md when you switch.

**Task** Press Switch and pick main.

**Done** The egg is back. Your files always match the branch you're on.

> **More details** Git swaps your files when you switch. Commit or discard your edits first, or Git won't let you switch.

### 7.5 Share the branch

Branches can go {at3} too. That way others see your idea.

**Task** Switch to vegan and press Push.

**Done** {T3} shows vegan next to main.

> **More details** The first push of a new branch creates it on origin. After that, push and pull work like they do on main.

## Lesson 8. Merging

### 8.1 Main moved on

Sam fixed a typo on main while you worked on vegan. Get it first.

**Task** Switch to main and press Pull.

**Done** main has Sam's fix. vegan doesn't.

> **More details** Branches drift apart over time. That's normal. Merging brings them back together.

### 8.2 Merge

The vegan recipe works. Merging brings vegan's snapshots into main. Git combines both sets of changes.

**Task** Press Merge and pick vegan.

**Done** A merge snapshot joins the two lines. pancakes.md has the banana and Sam's fix.

> **More details** The command is git merge. You always merge into the branch you're on. A merge snapshot has two parents, one from each line.

### 8.3 Clean up

The vegan branch did its job. Delete the name to keep things tidy. Its snapshots stay in main.

**Task** Press Delete branch on vegan.

**Done** vegan is gone from the list. Its snapshots are still in main's history.

> **More details** Git won't delete a branch you haven't merged unless you force it. That protects your work.

### 8.4 Share it

main changed locally. {T3} doesn't know yet.

**Task** Press Push.

**Done** {T3} main has the vegan recipe.
