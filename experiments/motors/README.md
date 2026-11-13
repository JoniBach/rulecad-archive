# Motors from rules: mounted, driven, and checked before they're bought

**9 November 2026 · @rulecad/motors 0.1.2, cad 0.7.40 · pull requests [166](https://github.com/JoniBach/rulecad/pull/166), [167](https://github.com/JoniBach/rulecad/pull/167) and [168](https://github.com/JoniBach/rulecad/pull/168).**

Gears gave the kit a way to carry a turn from one place to another. Motors give it somewhere for the turn to come from, and the question a machine actually asks: will this motor move this load, and will it stay put when the power goes off?

Nothing here has been printed yet. Every figure below is predicted, and a table of predicted against measured will go here once it has.

![The robot shoulder: a NEMA 17 under a 38:1 compound planetary](picture.png)

## What rulecad gained for it

- **Seven motors as open data** in `@rulecad/rules`: NEMA 17 and 14 steppers, the 28BYJ-48, an N20 gear motor, SG90 and MG90S servos, and a 2204 gimbal motor. Each figure says how far to trust it and where it comes from, and hobby motors that vary between makers are marked `community` or `estimate`.
- **A shared vocabulary**, `cad rules check` to hold every rule set to it, and `cad rules draw` for a dimension drawing to compare with the datasheet by eye.
- **`@rulecad/motors`**: the solid, the mount a part subtracts, a D-bore that's only flat where the shaft is, and `performance()`: the torque and speed at the output, through a ratio and an efficiency, and what the answer rests on.
- **A motor as an assembly item**: it drives a joint, and whatever meshes with that joint moves with it. In the viewer a stepper's slider moves in its own steps.
- **Loads, and checks against them**: a torque, a force or a mass carried at an anchor, whose torque follows the pose. Torque, speed, holding with the power on and off, the case against the plastic's softening point, the plate at the screws, and a shaft read from the bore as drawn.
- **`compoundPlanetary`**: two rings a few teeth apart, 30 to 200:1 in one stage.

![The NEMA 17's rule set, drawn from its figures for comparing with the datasheet](nema17.svg)

![The shoulder's NEMA 17 through 38:1: torque against speed, with its working point and the load](curve.svg)

## The models

| Model | What the check says |
|---|---|
| [Motorised focus slider](../../m/motors-focus-slider/) | A 28BYJ-48 on the pinion: 4.7 N at the slide against the 1 N it pushes, 6.4 mm/s, held by the gearbox's own friction with the power off |
| [Robot shoulder](../../m/motors-robot-shoulder/) | A NEMA 17 through 38:1: 7.4 N m at the output, ten times what 500 g at 150 mm needs, a turn in 7.6 s at 300 rpm of motor, held with the power off by gears under 50% efficient |

## At work

Added on 13 November 2026, in rulecad pull requests [208](https://github.com/JoniBach/rulecad/pull/208) and [211](https://github.com/JoniBach/rulecad/pull/211). Also added: the [motorised spool winder](../../m/2026-11-13-winder-driven/), an N20 on the sun of the hand winder's planetary, with the spool on the carrier.

`cad animate` turns the drive, cut across the shafts through the gears' teeth. The shoulder has two cuts. The first shows the sun and the planets inside the ring that's held. The second shows the planets inside the output ring, which turns 57° while the motor turns six times.

![The robot shoulder's compound planetary, cut through both rings and turning](shoulder-drive.svg)

![The motorised winder's planetary: the planets roll round the held ring and carry the reel](winder-drive.svg)

`cad preview --check` labels the torque where it starts and where it arrives, with the margin and whether the joint holds unpowered.

![The shoulder's check view: 0.417 N m at the motor's shaft, 7.44 N m at the output, 10.1 times the load, held unpowered](shoulder-check.png)

![The winder's check view: 0.45 N m at the reel, 2.25 times the load, and no figure yet for holding unpowered](winder-check.png)

`cad preview` also draws each motor's curve and the torque through its train.

![The winder's N20 through 4:1: torque against speed, the working point and the load](winder-curve.svg)

![The winder's torque, stage by stage, against what the load needs](winder-train.svg)

## What went wrong

- **Profile shift couldn't make a split ring.** The plan was one set of planets on two rings with the odd one cut with a shift. Moving a ring three teeth at these sizes needs a shift of nearly two modules, far past what a tooth takes. Stepped planets, whose two steps differ by as many teeth as the rings do, keep one centre distance with no shift at all, and every tooth count a multiple of the planets keeps them in phase.
- **The first press fit split every hub.** A 0.05 mm press on a 5 mm shaft is 2% strain, past what PLA takes, and the hoop-stress check said so even on a wall 8 mm thick. It's 0.02 mm now.
- **A motor's shaft rotated into the bore.** A D-bore drawn at the pose it was assembled in overlaps a shaft that hasn't turned to meet it, so the check reads the flat from the bore instead of requiring the two to line up.

## Not done yet

How far a whole part bends under the motor is checked now ([pull request 209](https://github.com/JoniBach/rulecad/pull/209)). The print-in-place version of the joint isn't drawn yet, and nothing has been measured.
