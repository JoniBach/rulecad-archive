# Flat launcher action: a mechanism printed on its side, checked through its whole cycle

**1 November 2026 · @rulecad/flexures lamina · `examples/bench/projects/launcher/objects/flat`**

The first disc launcher was a set of cartridges pinned into a frame, and it printed as a total failure. Its moving
parts fused to the trays they stood on, the sliding parts bound, and the pins fell out. It was also unlike every printed
blaster that works. The BYU and Mark Rober one-piece blaster, the Unity disc shooter, the spring guns and the Q-tip
shooters are flat drawings printed on their side, with every spring, latch and trigger in that plane.

This is the launcher's action redrawn that way, as one print, and the checks rulecad needed to trust such a design.

![The action's cycle: cocked, caught, released and back](sequence.svg)

In the animation the frame is grey, the parts that move are blue, and the springs, drawn bent, are orange.

## The action

- **The spring:** two leaves standing up the grip, joined at the top by the pusher. That is a parallel guide: the
  pusher moves straight back, and both leaves store the energy.
- **The pusher:** a bar along the top, a tab out of the back to cock it, a tooth underneath.
- **The trigger is its own sear:** a lever hanging on a leaf hinge, its arm reaching forward to a hook. Cocking drags
  the tooth over the hook's ramp and pushes the trigger aside. Drawn a little past, the hook springs up, and the
  pusher settles back onto its catch.
- **A catch with bite:** the catch leans back 15°, so the spring's push presses the hook in. Pulling the trigger
  presses the pusher back a little as the hook comes down.
- **Hard stops:** the back wall stops the pusher, and the grip's front wall stops the trigger, each before its
  flexure's strain limit.

| | Size | At work |
|---|---|---|
| Spring | two leaves 87.8 × 2.1 mm, 14 mm wide | 8.3 N and 50 mJ at a 12 mm stroke; 0.98% strain, stopped at 13.1 mm before its limit of 15.3 mm |
| Trigger hinge | a leaf 21.5 × 0.84 mm | lets the pusher go once moved 2.6 mm; a full pull is 3.3 mm, stopped at 3.9 mm before its limit of 4.6 mm |
| Catch | 2 mm deep, leaning back 15° | holds at any friction over 0.01 |

The flexures are PETG. Its strength over its stiffness is 1.9% strain, against PLA's 1.5%: the first launcher sized
its PLA spring at 2%, past where PLA yields.

## What rulecad does now

- **Displacement first.** The spring is sized from its travel, as the BYU blaster paper (PLOS ONE, 2026) argues. The
  stroke and the strain limit set its length and thickness, and the force comes last, from its width. Here the width
  is the print's height.
- **Prints free.** Everything must clear what it isn't joined to by the printer's gap, or it fuses. A flexure must
  touch its two bodies in one place each, and run into them, not just meet them along an edge.
- **The whole cycle.** Each step from rest to cocked, pulled, fired and back is walked a quarter of a millimetre at a
  time. A latch is pushed aside by what drives it, as far as it must.
- **Jams and catches.** A face too steep to push aside jams the driver. A catch must hold even when the plastic is
  slippery, at a friction of 0.1. A ramp must still pass when it is sticky, at 0.5.
- **Hard stops.** Each flexure must meet something before its strain limit.

Each check was tested by breaking the design on purpose: a steep ramp, a short trigger pull, a hook that can't
reach, a missing stop, a catch leaning the wrong way, and a block 0.1 mm from a leaf. Each fails with its reason.
The 2D geometry moved to Manifold's Clipper2: JSCAD's 2D booleans returned garbage on that last case and let it pass.

## Still to do

- The printer's gap for parts printed in place is an estimate, 0.3 mm. The fit test plate measures it.
- The disc's channel, the magazine and a grip shaped for the hand. The frame here is a plain box round the mechanism.
- A print.

Model: [the flat action](https://jonibach.github.io/rulecad-archive/m/launcher-flat/)
