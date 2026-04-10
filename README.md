# A Shoot'em game

This was inspired by Timeline Up, but without any spending of real money.

## todo

- [.] add 3d models
  - [ ] diamond? rotating? with point light in camera?
  - [ ] money? bag or heap?
  - [ ] bullets? tetrahedron? rotating?
- [ ] reposition players when one dies, if gaps appear in a row? or in front of them?
  - so that players smoothly move into their position
- [ ] refactor touch handler so that remembering last is done outside, in players, with dynamic
      bounds
- [ ] refactor walk animations to be updated by animations.ts?
- [ ] diamonds are now too low and the bullets hit strangely
- [ ] todo add 'mousemove' like touchmove in touch handler?
- [ ] some kind of run ending, and distinguishing between finishing and dying
  - only reset transient upgrades when a run is successfully finished?
  - so they should be called currentLevelUpgrade rather than nextRunUpgrade?
- [ ] add daily energy, disabled in dev build
- [ ] add stable track generation
  - using level (per type of run?)
  - [ ] try to get objects not to overlap too much, like trees that are too close
  - waves? reset gates? multi-run stages? (like eras and timelines)
    - many little obstacles, try to get through and gather awards (like dungeon)
    - boxy blocks and everything on a grid, like a mine?
      - with a constrained firing rate starting just at one block shot down per block's distance
        walked
      - so at first we kinda have to choose a straight line and can only change when there's a gap
      - upgrades: every now and then throw a bomb or a drill in front of you
    - kinda normal with multiplication and strength upgrades and boxes in the end (like normal
      timeline)
    - kinda normal with small strength upgrades and plenty enemies to mow down (and maybe an end
      boss) with an award only at the end (like "battle" for jewels)
    - slow-down with big bosses (slowing at the end of my minimum range?)
    - enemies that shoot back?
    - Levels where you have to collect all keys to pass through end gate
    - zones where players don't reposition themselves if there are gaps (e.g. so they fit through)
  - gradation
    - various types of runs should only get stronger if I pass them? at different rates?
    - [ ] special types should be behing special buttons?
    - lower probability of a run type if I lose in it?
  - daily tickets for special wave types?
  - [ ] state should have a current seed for track generation?
- [ ] random:
  - [ ] for randomness during a run, do we want predictable but independent prngs?
    - awards spawning placement when flying from track to wallet
    - maybe rotation of a dead tree?
    - impl: each of those could create a seed by appending a suffix to the original seed for the run
- [ ] should camera reposition itself on main screen and in run? probably yes, extra clear when just
      starting, the player is too high on the screen without buttons, but also too high during the
      game
  - if camera ever moves, we may need to change fog, too, and camera far limit
- [ ] add permanent upgrades
  - cards, skills etc.
    - general: player number, fire rate, damage
    - specific:
      - end block award
      - end block strength
      - tree strength
      - price of damage upgrade
      - price of rate upgrade
      - max damage upgrade
      - max rate upgrade
  - it should take time to get "learn" skills?
- [ ] add multi-stage objects (like a pile of jewels)
  - [ ] use jewels for treasure? maybe if you shoot the biggest you get one jewel and it becomes a
        smaller one? or a pile?
  - well, a pile could just be a bunch of jewels closely behind each other
- [ ] add objects with a visible damage countdown
- [ ] when items are gained (like a better gun), make it fly towards player?
- [ ] add objects that shoot at us?
- [ ] add gates?
  - bonus & malus on player count and strengths, variable shoot-to-increase?, end/reset gates?
  - other in-run upgrades:
    - a gun upgrade for only a limited number of my creatures - e.g. upgrades 1, 2 or 3 of them
      only, for that run only
- [ ] add objects/gates that move left/right?
  - e.g. an animal that runs across the forest, with bonus when killed
- [ ] add objects that, when close enough, start actively moving towards you?
  - this needs to carefully handle the Z sorting of objectsGroup
- [ ] quests?
  - with timeout - daily, weekly?, monthly
  - add a give-up possibility to remove clutter
- others?
  - [ ] use LoadManager from https://threejs.org/manual/#en/textures for progress bars?
  - [ ] use SpriteMixer? https://github.com/felixmariotto/three-SpriteMixer/
    - probably can be done with AnimationMixer and discrete tracks?
- [ ] error handling - unhandled exceptions and promises
- [ ] add objects beside the road in the fog
- [ ] add slow-down areas so we can have big bosses
  - [ ] first add possibility of markings on the track?
  - when in a slow-down area, objects are updated by a different delta
  - [ ] slow-down/speed-up should be gradual
  - [ ] should the camera reposition itself a bit?
    - should camera just be positioned according to speed? or should it be a part of the area?
  - [ ] should players get closer together so they all hit the boss?
- [ ] add particles showing damage?
- [ ] should some upgrades expire? should they be more/less expensive after expiry?
- [ ] add specific bigger occasional awards like the key in ice?
- [ ] publish on github pages
  - when all artwork is mine
  - when there are some upgrades
  - when there are at least two different types of runs
- [ ] in state have a version so if we upgrade, we can save it and the user can play an older
      version (no longer updated) - important from v2

---

## done by 2026-04-10

- [x] add 3d models
  - [x] coniferous tree
  - [x] broad-leaf tree
  - [x] dying conifer
  - [x] dying broad-leaf
  - [x] player
    - [x] fix left-right mismatch with legs
    - [x] make bobgroup bob, torso and gun turn
  - [x] track
  - [x] add shadows
- [x] add possibility of multiple players in group
  - [x] stagger shooting for player groups? or shoot in waves?
  - [/] as transient upgrade? as permanent upgrade?

## done by 2026-04-04

- [x] move camera with player movement

## done before 2026-04-03

- [x] make marvin walk during game,
  - [x] test that the leg speed is correct
- [x] add a brick pattern on the road
- [x] check extent scaling to 0.8 is still appropriate
- [x] set camera.far so we don't see stuff in fog
- [x] show how many played games

## done by 2026-03-23

- [x] hide or disable exit button when finishing

## done by 2026-03-22

- [x] refactor object dying so types and players/bullets/objects need not depend on sprites
  - [x] move animations into three/
  - [x] move models into three/
- [x] refactor types and common files to simplify imports

## done by 2026-03-21

- [x] refactor collisions:
  - every object is either cylindrical or axis-aligned boxy; everything is really 2D
  - players and bullets check overlap with objects
  - players are cylindrical, bullets boxy (Box2, extend to include computations with circles?)
  - objects can be cylindrical or boxy, too
  - [x] every object has a bounds - extent2d - a Box2 or a Circle, and maybe minz/maxz?
    - [x] make a class for Circle with .isCircle (TS doesn't know that Box2 has .isBox2)
    - [x] make a function that checks collisions, with all four options
      - this function MUST TAKE INTO CONSIDERATION the x/z movement of the object's group
  - [x] when adding objects, sort them by maxZ before adding to their group
    - this needs to support the following:
      - is the object far enough so it's behind camera? (so we stop removing further objects)
        - this is inaccurate but that's OK, a smaller object can be removed later
      - is the object close enough to be shot? (stop considering further objects)
      - is the object close enough to touch a player? (stop considering further objects)
    - it's possible because we're adding objects in waves that don't overlap
  - [x] change collision logic to use the function above, and various minz/maxz
- [x] refactor types: move various types to files in ./types/, or rethink where types live anyway

## done by 2026-03-18

- various refactoring and modeling a coniferous tree
- [x] does sprite scale x -1 flip the image?

## done by 2026-03-15

- [x] add transient upgrades somehow
  - for next run only
  - general: fire rate, damage
- [x] add main-screen elements:
  - [x] currencies
  - [x] upgrade buttons
  - [x] in updateMainScreen, update the screen from state - wallet, possible upgrades etc.
- [x] add localStorage state
- [x] have enemies that make sense:
  - we could have trees that are in the way and need shooting down
  - gems and coins around them

## done by 2026-03-14

- [x] when currency is gained, make it fly towards the wallet?
  - [x] show how much we have

## done by 2026-03-12

- [x] some kinds of income
- [x] add player collision
  - add playerThickness - actually just use half width
  - make bullets start that far in front of the player
  - add collision detection between player (with thickness) and objects, react accordingly
- [x] add road decorations so you can see the road moving
- [x] add bullets
  - [x] in their own group, starting from player (neg group Z) at fixed time intervals
    - move the group every animation update
    - [x] change bullet range to minGroupZ: every bullet has minZ (computed from range and initial
          position)
    - remove bullets that have reached their minZ
  - [x] finding hits
    - have both bullets and objects sorted in Z axis
    - bullets have lengths (going forwards to -Z) so bullet ends (nearer player) are sorted
    - for each bullet find first object that's at the bullet's Z or smaller, starting from last
      bullet's first object
    - using indexes, go through all ojects that are at the bullet's Z minus length or larger
    - the first that matches in X is hit, break to next bullet
      - on hit, kill objects, remove bullet
    - [x] make bullets have hit points
      - add health to objects, kill only when out of health

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
