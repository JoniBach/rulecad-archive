# The force inverter: a mechanism grown from a block

**30 October 2026 · @rulecad/topopt 0.2.8 · `packages/topopt/reference/inverter.mjs`**

The classic first test of compliant-mechanism synthesis (Sigmund 1997). A 40 × 20 mm block of PLA, 4 mm thick, is
held at its two left corners and pushed to the right at the middle of its left edge with 10 N, against a spring of
2.7 N/mm. The right edge's middle should move to the left, against a spring of its own. The optimiser is given 30%
of the block and asked for the layout that moves the output furthest.

![The force inverter](picture.png)

It makes the X: two arms from the input to the corners, two from the corners to the output, and two more across.
Pushed 5.8 mm to the right at the input, the output moves 1.7 mm to the left: an advantage of 0.29. An even block
moves its right edge the way it is pushed; the optimiser reverses it in about 25 steps and spends the rest sharpening.
228 steps on 0.5 mm cells (3,200 of them), 29 seconds.

## What's wrong with it

The grey cells show where the material really is: the arms meet at hinges a single cell wide and about 30% full.
That's what mechanism synthesis does when nothing stops it: a point hinge is the most compliant joint there is, so
the optimiser makes them, and the drawn outline (smoothed, at half density) drops them, leaving blobs. Printed as
drawn, this part is six pieces. The fixes are known: a minimum width for every member (the robust formulation, which
optimises eroded and dilated copies of the design together), or a strain limit, which punishes the hinge's strain.
That's the next step before any generated mechanism is printed.

## Settings

| | |
|---|---|
| Space | 40 × 20 mm, 4 mm thick, PLA (E 2,680 MPa) |
| Held | the two left corners, 1 mm squares |
| Input | 10 N to the right at the left edge's middle (a 1 × 2 mm patch), against 2.7 N/mm |
| Output | the right edge's middle, to the left, against 2.7 N/mm |
| Material | 30% of the space, members at least 1.5 mm (a filter of three cells) |
| Result | 1.70 mm out for 5.85 mm in; 29.7% of the space; 228 steps, settled |
