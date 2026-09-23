# Memory Game

This is a simple memory matching game written with Vite, TypeScript, React, React Router, Tailwind, and Motion.

It's inspired by the old [Memory Game Classic](https://apps.microsoft.com/detail/9mwxbxd7nq0m?hl=en-US&gl=ZA) I played as a kid, but with a few twists.

## Why write this game in React? (and not Lua, Godot, Unity etc)

I want to use tools I have experience with, and in theory complicated rendering engines and helpers are not needed for this scope.
The browser is a good enough rendering engine - card flips and simple UI motion can lean on CSS transforms/compositing.

## Milestones

Potential, non final milestones are denoted with `*`.
This is a work in progress.

- [ ] New game. 3x4 grid. No time limit
- [ ] Dynamic grid (4x4, 5x6 etc)
- [ ] Time limit
- [ ] Scoring system
- [ ] User account management `*`
- [ ] Leaderboards `*`
- [ ] Custom themes (background, cards) `*`
- [ ] Variable game modes
  - Classic
  - Time Attack scoped to grid size
  - Collapsing grid
  - Versus `*`

## Scripts

I use `pnpm` as my package manager of choice.

First install node modules with:
```bash
pnpm install
```

Then to start the dev server:
```bash
pnpm run dev
```

To build, run:
```bash
pnpm run build
```