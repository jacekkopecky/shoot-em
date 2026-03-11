# A Shoot'em game

This was inspired by Timeline Up, but without any spending of real money.

## todo

- [ ] add bullets
  - [ ] in their own group, starting from player (neg group Z) at fixed time intervals
    - move the group every animation update
    - every bullet has minZ (computed from range and initial position)
    - remove bullets that have reached their minZ
    - [ ] when I have more players and they aren't in line, make sure that a bullet is added to the
          array in reverse Z order
  - [ ] finding hits
    - have both bullets and objects sorted in Z axis
    - bullets have lengths (going forwards to -Z) so bullet ends (nearer player) are sorted
    - bullets have hit points
    - for each bullet find first object that's at the bullet's Z or smaller, starting from last
      bullet's first object
    - using indexes, go through all ojects that are at the bullet's Z minus length or larger
    - the first that matches in X is hit, break to next bullet
      - on hit, decrease object health by bullet hit points, remove bullet
- [ ] some kinds of income
- [ ] add main-screen elements: currencies, upgrade buttons
  - [ ] in showMainScreen, update the screen from state - wallet, possible upgrades etc.
- [ ] state should have a current seed for track generation?
- [ ] use jewels for treasure? maybe if you shoot the biggest you get one jewel and it becomes a
      smaller one?
- [ ] add daily energy?
- [ ] add gates?
  - bonus, malus, variable shoot-to-increase?, end gates?
- [ ] quests?
  - with timeout - daily, weekly?, monthly
  - add a give-up possibility to remove clutter
- others?
  - [ ] use LoadManager from https://threejs.org/manual/#en/textures for progress bars?
  - [ ] use SpriteMixer? https://github.com/felixmariotto/three-SpriteMixer/
    - probably can be done with AnimationMixer and discrete tracks?

---

## done by 2026-03-11

- [x] check browser performance with a canvas? or use three.js?
  - three.js seems to be happy with a couple thousand objects
  - [x] rebuild what I have so far in three.js
    - [x] planar mesh for the track
    - [x] appropriate fog
    - [x] sprite for player
    - [x] sprites for objects, in a group that can be moved in animation
    - [x] make sure I have a good understanding of my coordinates
      - I'm not making the player yet right?
      - 0,0,0 could be starting point for player
      - camera could be looking towards 0,0,100 or somesuch?
      - x,0,y (y positive) could be starting point of things
    - [x] smileys
    - [x] moving the player
    - can do a few thousand objects smoothly
  - [x] make objects die when too close
    - [x] have an animation manager
  - [x] finish run when no enemies? on back button?
  - [/] use pushState when starting a run, popState when ending it,
  - [/] and the 'popstate' event to finish (but don't popState then)
    - cannot do the above because on android the back button stops fullscreen
  - [/] add a toast? (probably no because it would only be useful for the back button)

## done by 2026-03-10

- [x] try going fullscreen on the phone
- [x] try reacting to touch
- [x] disable user-select everywhere
- [x] split out splash-screen.ts and game-main.ts
- [x] split out log.ts
  - [ ] only log in dev mode somehow?
- [x] try using browser 3d
  - [x] draw a static game
  - [x] make a track element that will be shown tilted away
  - [x] make the camera 3d
  - [x] put an onclick on the track that switches touch on/off (add a toggle in touch handler)
  - [x] same onclick will make the track switch between tilted away and vertical but a bit further
        in Z axis
    - [x] it could always be that much further in Z axis anyway
  - [x] use emoji for everything?
  - [x] put things on the track, tilt them back towards me
  - [x] put a few haze elements at some distance
- [x] check browser 3d performance when the elements are moving towards us
  - with DOM 3d transforms and small-ish images, we can have about 120 objects for 60fps on my phone
    - type of object doesn't seem to matter: svg, bitmap 30px wide, text, emoji
    - this is with 80vh of 10 haze planes
  - same as above but moving the whole #objects element, 300 objects at 60fps
  - tried with transformY instead of transform - no diff
  - tried with animation - no diff
