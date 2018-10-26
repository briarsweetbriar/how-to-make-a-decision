import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I walked around the block, just once to avoid drawing attention to myself. There was a single white truck parked in the lot across the street, and the guy inside was watching his laptop. Aside from that: no cameras, no guards. I went to the other side of the building and hopped the fence. I'd done this before.</p><p>The stairwell took me up to the tenth floor, where I wondered through half-painted corridors until I found a doorless apartment. The interior was partially built-out: a granite kitchen countertop, a tiled dining room floor next to a slab of bare concrete. I settled in [[#twine-cb bathroom]]the bathroom.[[/twine-cb]] I felt less exposed in its smallness than I would have in the master bedroom.</p><p>I woke up around 4 in the morning, construction sounds echoing through the ventilation shafts. I hurriedly got dressed, packed my bag, and slipped back out before the rest of the construction crew arrived.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('bathroom', () => {
      this.get('bathroom').perform(script, data, window);
    });
  }),

  bathroom: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/homeless/condo/bathroom", { window: "how/stay/comfortable/homeless/condo/bathroom", screen: true });
  })
});
