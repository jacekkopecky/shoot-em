# A Robot Walkin'n'Shootin game

This is a game that was inspired by Timeline Up, which I played without spending any real money.

It's nearly a game.

Runs on [github pages](https://jacekkopecky.github.io/rwns).

## todo

- [.] add first permanent upgrades
  - [x] add cards button that moves us to the cards section
    - card button next to the track, just above upgrades
  - [x] style cards section so it's a transition to the left?
  - [.] cards section
    - [x] big part to show your cards, scrollable
    - [x] close button
    - [ ] show existing cards
    - [.] buy one card button (todo actual buying)
    - [x] buy 9 or 12 cards button (price of 8 or 10?) (actual buying not done)
  - [x] State:
    - [x] type, name and picture, also ID like type+number in case we have to rename a card
    - [x] cards can have minimum level from which they become available; isFeatureAllowed could use
          a pre-computed min level from those for gems
    - [x] cards:{[id]: {level, cardsTowardsNext}}
      - or cards:Wallet<CardType> - {[type]:number}
  - [x] Card mechanics: first one works alone, 1,2,2,3,3,3,4,4,4,4,5x5 etc
- [ ] more cards
  - [ ] see in `src/cards/types.ts`
  - [ ] any such stuff from dim should go into initial state
  - [ ] Probabilities: select what rarity level of card we get (common, rare etc.) then random pick
        from those? 
    - [ ] We could have counters since last of a rarity level so e.g. a rare comes at least every N
          cards?
- [ ] better cards UI
  - [ ] a card that needs to flip can be a card and a card back in a single 3d-rotated package
  - [ ] add card pictures
  - [ ] add card descriptions under a question mark?
- [ ] 2-stage localStorage key change to just `rwns-*` and not jacekkopecky or shoot-em
- [ ] tracks
  - using level (per type of run?)
  - waves? reset gates? multi-stage runs?
  - ideas:
    - a few scattered end blocks in the middle of first few levels, which can be killed but also can
      be walked around
    - many little obstacles, try to get through and gather awards (like dungeon)
    - boxy blocks and everything on a grid, like a mine?
      - with a constrained firing rate starting just at one block shot down per block's distance
        walked
      - so at first we kinda have to choose a straight line and can only change when there's a gap
      - upgrades: every now and then throw a bomb or a drill upgrade in front of you?
        - they might fire immediately or after a second so you can choose where they go
    - kinda normal with multiplication and strength upgrades and boxes in the end (like normal
      timeline)
    - kinda normal with small strength upgrades and plenty enemies to mow down (and maybe an end
      boss) with an award only at the end (like "battle" for jewels)
    - slow-down with big bosses (slowing at the end of my minimum range?)
    - enemies that shoot back?
    - Levels where you have to collect all keys to pass through end gate
    - zones where players don't reposition themselves if there are gaps (e.g. so they fit through)
    - challenge modes, or quests (appear extra or in quests):
      - gather all (or a given number of) treasure without any upgrades (basic one player)
        - could be:
          - find all treasure in forest or maze
          - hit your choice of diamonds with every bullet you have (multiple hits necessary)
          - simply don't waste a bullet
        - can play with upgrades but only to try it, making the prize a bit lower
        - allows the player to pass or the quest times out and moves to the next one - in case it's
          randomly too hard
        - endless, starting from current level difficulty and slowly getting harder?
          - maybe from forest, through savanna, to desert with occasional dead trees and smaller
            boulders, and back?
          - track tiles could get replaced rather than moved, with start and end zone (earthy,
            grassy, rocky, sandy) where the bricks smoothly change color probabilities so it starts
            one color set and ends another
          - enemies could be animals of some sort?
    - some level types can restrict types of available upgrades, e.g. mine should not permit more
      players
  - gradation
    - various types of runs should only get stronger if I pass them? at different rates?
    - [ ] special types should be behing special buttons?
    - lower probability of a run type if I lose in it?
  - daily tickets for special wave types?
  - [ ] state should have a current seed for track generation?
- [.] currencies analysis
  - coins: normal upgrades in a run
    - every now and then, these could be reset to 0, just in case it's too easy to collect them?
    - we don't have the end of a timeline (after several eras)
  - gems: what for? cards with permanent upgrades?
  - what do we get for quests?
    - points towards levels? different points per quest?
    - what do we get for levels? extra energy, gems, some other special currency…?
  - what do we get in a mine?
    - in Timeline Up, it's coal and iron, for delayed general upgrades, could do something similar?
    - could be points for learning skills
  - some other special currency: buy robot upgrades, e.g. military ranks
    - these could be buyable as many times as I can add new robots, each gives me one upgraded robot
    - I could choose to buy the second sergeant sooner, or the only corporal for more money if I
      don't often upgrade to more robots
    - officer ranks could have a limit where the lowest rank must be X levels below or else you
      can't buy the next officer rank
      - if you get an upgrade where you have a new robot, you'd then have to get all the lower ranks
        for that robot before you can upgrade the best officer
- [ ] make end blocks give rewards? (only when you get that card)
  - an end block with a jewel could have that jewel encrusted inside, random-rotated in x&z?
- [ ] achievements
  - gather 100 coins
  - clear out a level
  - finish tutorial levels (3) (unlocks first upgrade - fire rate?, and unlocks achievements
    showing)
  - [ ] list of achievements, showing progress?
    - achievements should at some point be sorted by ETA, not by fraction of achievement, so that
      long-taking achievements that are 2/3 done aren't hogging top ranks
- [ ] in-run upgrades? fire rate, damage, extra players?
  - as gates? (move gate creation and then killing to run/object/object.ts so run/objects.ts doesn't
    call createGate directly?)
  - when we hit a gate it can slide into the ground
  - bonus & malus on player count and strengths, variable shoot-to-increase?, end/reset gates?
  - other in-run upgrades:
    - a gun upgrade for only a limited number of my creatures - e.g. upgrades 1, 2 or 3 of them
      only, for that run only
  - [ ] gates that only change Marvin's colour, quests like break 20 end blocks with red robot
    - the gates could be random per play because they have little effect on the level outcome
- [ ] skills (it should take time to "learn" skills? should need a special currency? from quests?)
  - buying in bulk
    - 9 cards at once (not implemneted)
    - then cheaper for 42 gems if one is for 5
    - then maybe cheaper still?
  - "finding treasure" - more gems per level?
  - extra damage against specific objects/opponents?
  - small chance of surviving hitting a tree
  - extra damage in certain special types of runs?
  - extra damage by marvins of a certain colour?
  - critical damage by marvins of a certain colour against blocks of that colour?
  - always start with a marvin of a given colour?
    - this could be re-learned to a different colour
- [ ] I can calculate how long it would take someone to reach high levels depending on supply of
      gems 
- [ ] update README and index to say it's a game now? make it public?
- [ ] any other randomness in runs in the same level? what should be random?
  - maybe amount of coins in bags?
  - which end blocks have what rewards?
- [ ] remove code that deals with sprites? or replace remaining emoji with my svgs?
  - it seems to be used for explosions and flying coins only now so much of it can go
- [ ] reposition players when one dies, if gaps appear in a row? or in front of them?
  - so that players smoothly move into their position
- [ ] random:
  - [ ] for randomness during a run, do we want predictable but independent prngs?
    - awards spawning placement when flying from track to wallet
    - maybe rotation of a dead tree?
    - impl: each of those could create a seed by appending a suffix to the original seed for the run
- [ ] should camera reposition itself on main screen and in run? probably yes, extra clear when just
      starting, the player is too high on the screen without buttons, but also too high during the
      game
  - if camera ever moves, we may need to change fog, too, and camera far limit
- [ ] add multi-stage objects (like a pile of jewels)?
  - [ ] use jewels for treasure? maybe if you shoot the biggest you get one jewel and it becomes a
        smaller one? or a pile?
  - well, a pile could just be a bunch of jewels closely behind each other
- [ ] when items are gained (like a better gun), make it fly towards player?
- [ ] add objects that shoot at us?
- [ ] add objects/gates that move left/right?
  - e.g. an animal that runs across the forest, with bonus when killed
- [ ] add objects that, when close enough, start actively moving towards you?
  - this needs to carefully handle the Z sorting of objectsGroup
- [ ] quests?
  - with timeout - daily, weekly?, monthly
  - add a give-up possibility to remove clutter, or re-roll?
  - quest re-roll buttons could only work once a day, and use a diamond or cost some other price?
  - quest types:
    - break 20 end blocks
    - break 20 end blocks with red/green/blue robot
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
- [ ] add specific bigger occasional awards like the key in ice? what did it actually do?
- [ ] let the world know about the game
  - reddit three.js? reddit games?
  - when all artwork is mine
  - when there are some upgrades
  - when there are at least two different types of runs
- [ ] in state have a version so if we upgrade, we can save it and the user can play an older
      version (no longer updated) - important from v2
- [ ] make it an installable app with icons etc.
  - https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
- [ ] center level and played on screen?
- [ ] check if LatheGeometry makes two triangles even if the point is on the axis, fix it
- [ ] add a settings screen
  - don't show settings in first level
  - "reset"
  - "go back to previous level"
  - "reset back to a certain stage" that you've already achieved:
    - after tutorials
    - when you get gems?
  - "show tutorials again"
  - after second level, show the new settings button to the user
  - in state, there could be a "tutorials seen" array, and an "enabled" function (instead of
    isUpgradeAllowed?)
- [ ] seasons? winter, spring, summer, autumn
  - day and night?
    - with glowing things!!!
    - with street lamps!!!
      - but it might be expensive FPS-wise, with shadows; maybe it could work with short lamp
        fall-off
  - inside a tunnel?
- [ ] can we add some kind rolling landscape on the sides of the road? With lambert shading,
      low-poly random waves could work; tiles would need to share vertex coordinates and normals
      though
  - normals straight up by the road; towards or away from the road on the sides, but also
    forwards/backwards as if the tile was a valley or a hill
    - maybe the surface could actually be flat?
- [ ] add energy countdown and automatic refresh, maybe as part of "touch to start"
- [ ] Could a Marvin that took a hit flash a bit somehow?
- [ ] could Marvins sit down when out of energy?
- [ ] allow use of back button for navigation at least through sections, and from a run?
- [ ] daily gift? (use a spinning wheel with a conic gradient)
  - some coins, a card or three, energy or two, any other currencies, extra ticket for special
    plays, extra roll (ensured only once)

---

## done by 2026-05-11

- [x] check Marvin's shadow, maybe switch hands?
- [x] put in-run wallet at the top, aligned with the exit button
- [x] maybe fix a shadow artifact of blocks passing just to the right under the camera
- [x] add non-zero min width on hit bars
- [x] introduce gems so we can start buying permanent upgrades
  - some hidden among the trees
  - some embedded in the blocks
    - useForAward could have a string, then getByName() would be used to get the one to use
  - gems could be collected once per level, but with stable generation so those not collected stay
    where they were
    - should there be a gap or a tree where we collected a gem, if the gem originally replaced a
      tree? let's make it a tree
    - needs to show how many are left
    - this gives both a bit of a reward for repeating, but also a reason to progress when all are
      collected
  - [x] replace some trees with gems, except where already collected
  - [x] clear collected gems on next level
  - [x] add gems to some blocks, make them collect correctly by reusing the 3d object and adding
        them to collected
  - [x] show number of collected gems on end screen
  - [x] show number of total gems on end screen
  - [x] don't show number of gems on end screen if there weren't any

## done by 2026-05-09

- [x] end screen: ~~show level just finished~~, change buttons
  - replay alone should be OK
  - replay/ok should be just stay/progress? replay/next level
- [x] Update main screen on page becoming visible, fullscreen change
- [x] Touch to start should say out of energy - that could also be the energy indicator
  - [x] Touch without energy should just update energy display

## done by 2026-05-08

- [x] add daily energy, disabled in dev build
  - only enable after the first few levels

## done by 2026-05-04

- [x] try to get objects not to overlap too much, like trees that are too close
- [x] level 4+ increasing difficulty until it's impossible
- [x] make buttons react visibly to clicks
- [x] bug: marvin doesn't receive shadow

## done by 2026-05-03

- [x] rename to RWNS (Robot Walkin'n'Shootin)
- [x] get notes into here from google keep
  - [x] Why are gems losing hp when I walk over them?
- [.] tracks
  - much longer than now
  - [x] we'll want some kind of dim.runLength, or a different one per run type
    - maybe choose a random or round-robin-ish level _type_ (e.g. forest, maze/mine, battle, tower)
      which dictates a number of sections of different type which then add up to a length?
  1. just trees, one hit point each
     - first level without end blocks?
     - custom message: don't run into trees
  2. longer, trees and 10 bags with up to 3 coins (avg 2)
     - custom message: find and collect coins
  3. same as above with end blocks
     - custom message: some things take more than one bullet
     - [x] custom message with balanced text wrapping
     - [x] hide in-run wallet until there's something in it
     - [x] hide main wallet until there's something in it
  - [x] where there are rewards, make sure they are relatively evenly spaced in Z, and that some are
        near the ends so we don't end up with a long ending without rewards

## done by 2026-04-30

- [x] add a "retry" button on end of level, rename "ok" to "next"
  - retry decreases level again if it was increased by a win
  - it has to be increased immediately on win because otherwise a reload on the "well done" screen
    would lose that progress

## done by 2026-04-29

- [x] add objects with a visible damage countdown (hit bar / health bar)
- [x] place explosion in front of the object that was hit, because some bullets hit the end gate too
      late and the explosion is missing

## done by 2026-04-27

- [x] add end blocks so ending a level isn't so easy, but at first doable with full upgrades
  - [x] either octahedrons, or some kind of boulders

## done by 2026-04-24

- [x] only reset upgrades from main screen when a run is successfully finished?
  - so they should be called currentLevelUpgrade rather than nextRunUpgrade?
  - they should be much more expensive so you can only max out after a number of tries
  - [x] which upgrades are allowed should be in state, computed from level or other props (quests,
        achievements etc.)
- [x] change explosion so it's a flat SVG standing upright, not a sprite,
  - [x] then make gate extent max y 0.01 or somesuch, not 2?

## done by 2026-04-23

- [x] bug: reset all data doesn't recreate the track?

## done by 2026-04-22

- with the help of AI
  - [x] todo add 'mousemove' like touchmove in touch handler?

## done by 2026-04-19

- [x] some kind of run ending, and distinguishing between finishing and dying
- [x] add 3d models
  - [x] make 2d picture for money instead of the money emoji
  - [x] money bag

## done by 2026-04-16

- [x] bullets tetrahedron
  - [x] rotating
  - [x] BUG: why do hitPoints on objects sometimes become NaN?
    - it was because I changed the bulletsGroup.children while iterating over it
    - fix: iterate over an array copy

## done by 2026-04-13

- [x] give it a service worker so it's cached

## done by 2026-04-12

- [x] diamond?
  - [x] rotate
  - [x] shrink into the middle when no award
  - [x] make the award fly from the right place, use the model itself?
  - [x] make a picture of it for use elsewhere?
  - diamonds are now too low and the bullets hit strangely
- [x] refactor walk animations to be updated by animations.ts?

## done by 2026-04-10

- [/] refactor touch handler so that remembering last is done outside, in players, with dynamic
  bounds
  - [x] instead change touch handler to relative
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
