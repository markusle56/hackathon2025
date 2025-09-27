# [NexusS](https://nexuss2025.vercel.app/)
## Project Overview
NexusS was built in under **34 hours** for the [BIG Hackathon](https://big.devpost.com/), hosted by the [Computer Science Club (CS Club), University of Adelaide](https://csclub.org.au/), and the [UniSA Programming Community (UPC), University of South Australia](https://usasa.sa.edu.au/clubs/join/upc/) under the theme **“merger.”**
The idea is simple: NexusS is a web app that helps students *merge* their independent study sessions by connecting them with others nearby.

With NexusS, students can:
- **Discover nearby study sessions** based on the courses they’re interested in and drop by to join.
- **Host a session** by marking their location, inviting others to join them.

This way, NexusS helps uni students find study buddies and make new friends.

## Navigating the UI

<img width="960" height="448" alt="Overview" src="https://github.com/user-attachments/assets/b5bc3ccc-74a9-420a-9776-d21da70958b1" />

1. See your location (red marker) and nearby study sessions on the map (ducks).
2. Click on any duck to see the description, capacity, time, location, image, and tags of the study session.
3. You can create your own study session using a form as well. Try it out on our [demo](https://nexuss2025.vercel.app/).
4. We also give you some helpful suggestions for nearby study sessions you can join.
5. Check out our FAQ if you ever feel lost.

## Technologies
### Frontend:
- Next.js: React framework for building web apps
- TypeScript: type safety
- Shadcn UI: component styling
- Tailwind CSS: utility-first styling
### Backend:
- MongoDB: database to store sessions and user data
- Supabase: store images on the cloud
- Vercel: deployment
### Other tools:
- MapLibre: maps and locations display
- Zod: input validation for the study session form

## Features
- Browse nearby study sessions based on course or interest
- Share your current study session location to invite others
- Works well on mobile devices too!

## Installation

```
npm install
npm run dev
```


Then start the application at http://localhost:3000

## Challenges
One team member had to leave early due to health issues but still managed to contribute remotely! :D

## Future Improvements
Improve performance to handle lots of users and sessions at once without slowing down.

## Project Team
| Member              | GitHub Handle                         |
|---------------------|---------------------------------------|
| Anh Khoa Le         | [markusle56](github.com/markusle56)   |
| Ngoc Han Ngo        | [ngongochan](github.com/ngongochan)   |
| Shaurya Jain        | [Omniologist](github.com/Omniologist) |
| Tran Duy Bao Nguyen | [TSSniper349](github.com/TSSniper349)  |

## Live Demo
You can check out the demo [here](https://nexuss2025.vercel.app/).

## Fun Facts
- The name NexusS came from the Nexus building, where we spent most of our time during the hackathon.
- The word “nexus” itself means a central link or a connection!
