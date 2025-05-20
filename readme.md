# CS3 Q4 Project Update Plan

For this update, we plan to integrate persistent data using JSON in our website to save and store user data so that the user doesn't have to re-enter data everytime they open the website. We will add a webpage for a system for the user to sign up and log in to their account.

Additionally, the To-Do List page will be fully integrated with this login system so each user can manage their tasks privately.

### Type of Data: User account login and profile details
- Purpose: Allows the user to control their personal details, preferences, and engagement
- JSON Structure:
  
  ```
  {
  "account": {
    "username": "string",
    "password": "string",
    "pfp": "image link",
    "batch": "string"
  }
  }
  
  
### Type of Data: To-Do List Tasks
- Purpose: Allows the user to save the tasks in their to-do list
- JSON Structure:
```
{
  "userId": "string",
  "todos": [
    {
      "todoId": "string",
      "task": "string",
      "dueDate": "string",
      "priority": "string",
      "isCompleted": "boolean"
    }
  ]
}
```

### Wireframes
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/2.png?v=1747647391733 "To-Do List Tasks")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/10.png?v=1747647456420 "Login/Sign up")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/11.png?v=1747647462683 "Profile")

# CS3 Q2 Project Proposal

## Title
> Iskolar Lifestyle: The Official PSHC-MC Freshie Hub

## Authors
> Sr04 Angel Belependio

> Sr07 Audrey Catsuela

## Description

> The privilege of studying at Philippine Science High School - Main Campus (PSHS-MC) is an exciting yet challenging experience for its 240 new freshies. To help ease this transition, the PSHS-MC community has launched "Iskolar Lifestyle: The Official PSHS-MC Freshie Hub," a website designed to provide the most unique and memorable experience the freshies ought to appreciate and cherish for the rest of their Pisay journey. It serves as a central portal that works as every f's gateway to the entire PSHS-MC community.

> In particular, the website aims to highlight the following: (1) to convey a warm welcome from the PSHS-MC Community; (2) to establish access to the school year's academic calendar; (3) to familiarize the freshies with the different school facilities; to introduce the school's various clubs and organizations; (4) to identify tambayan areas where freshies can stay; (5) to feature the freshies’ subject teachers; (6) to promote the significance of the Big Brother Sister Circle (BBSC); and (7) to entertain them through fun mini-games, TRIVIAgham and Connect-4. 

## Features

#### I. [Home Page] Welcome to Pisay!
- The homepage introduces the user to the various features of the website–what it offers, its purpose, and our message to the 240 freshies of the PSHS-MC community.
- Designed to serve as a guide for the freshies, the website warmly welcomes the user and introduces them to Pisay. An image of PSHS-MC serves as the header.
- Below it is basic information about the school below, including its founding date, mission, vision, core values, etc.


#### II. Academic Calendar
- This interior page features a table displaying the academic calendar for the S.Y. (S.Y. 2024-2025 will be used for this project).
- It has all the estimated dates for important events such as ALAB Week, HumFest, YMSAT, periodical examination weeks, etc.).
- Its layout and style is that of a regular calendar , a table header for the name of the day, and the date number.
- This helps students stay organized and provides them with an estimated schedule of events in Pisay.

#### III. Pisay Clubs
- This interior page features multiple index card-like panels, each names of the various Pisay clubs.
- Each panel has the club’s name and what it corresponds to in parenthesis [ex: AKSIS (Social Action)].
- Below each club name is general information about the club, like its origin, founder, its connection with its name, the activities and opportunities it offers, reasons to join the club, and more.
- This makes it easier for a user to pick a club based of their interests.

#### IV. Tambay Pisay
- This page focuses on the various "tambayan" areas in Pisay [ex: Grandstand, Kalachuchi Lane, BLob, FLob, etc.].
- It has an image of each location, as well as panels to showcase each of them.
- It contain its name, an image, and information [ex: benefits like aircon]
- This helps students find a certain area they want to go to and introduces different spots for leisure in PSHS-MC.

#### V. BBSCs
- This page displays the name and information about the BBSCs per Grade 7 section (B2028 BBSCs of S.Y. 2024-2025 will be used for this project).


#### VI. Mini Games
- This page contains two panels with two minigames where one can earn points.
- TRIVIAgham - mini quiz about Pisay (trivia questions, questions about its history, etc.)
- Connect-4 - this would be a 2-player multiplayer one device game where students would take turns to place a chip in a table where it falls down to the possible bottom cell in the column. First player to have four(4) chips vertically, horizontally, or in a diagonal wins! (Has chip limit, chips are segregated by blue and red for each player.
- Will be made using Javascript

## JavaScript Description:
> Javascript is used in the academic calendar. The academic calendar makes use of buttons to switch from page to page to change the month. The calendar also has a system for adding own requirements, events, and schedules on certain date/s. By inputting the reminder/note and clicking a button, the cell in which the date where a note wants to be added changes where the certain reminder is now attached.

> JS is also clearly seen in the minigames. For TRIVIAgham, the code analyses and checks whether the selected multiple choice answer is correct. It also calculates the user’s final score. For Connect-4, the code gets the input from the user selecting which column to drop the chip in and displays the chip in the bottomest row possible in that column (because of gravity). Each user has an equal number of chips (number of cells divided by 2). To determine who goes first, the code will alert the random player (either red or blue) to start, then the other color will be next to place a chip, then the next ones alternating turns. When no user wins when all cells are filled with chips, then the score is a tie. The code analyzes the board (table) if one has made a line of 4 chips horizontally, vertically, or diagonally. When a person gets 4 in a line first, they win the game–adding points to their total.

> JS is also used when compiling the scores from both minigames to view at the minigame page.


## Wireframes
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/1.jpg?v=1730880277524 "Home Page")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/2.jpg?v=1730880296872 "Academic Calendar")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/3.jpg?v=1730880300292 "Tambay Pisay")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/4.jpg?v=1730880412280 "Clubs")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/5.jpg?v=1730880416184 "Faculty")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/6.jpg?v=1730880421384 "BBSC")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/7.jpg?v=1730880425690 "Mini games")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/8.jpg?v=1730880429070 "TRIVIAgham")
![Alt text](https://cdn.glitch.global/02652b7d-1f49-4cb2-83be-f5bf03380b55/9.jpg?v=1730880431965 "Connect-4")