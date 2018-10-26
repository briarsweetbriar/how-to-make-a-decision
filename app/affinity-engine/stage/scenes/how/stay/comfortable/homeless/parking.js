import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>It was walled off by a cinderblock fence, topped with two lines of barbed wire. I climbed a nearby tree, and found that the barbed wire was held in place by a simple nut and bolt. Although I didn't have a tool on me, I was able to MacGyver the bottom nut with a couple of rocks. I left the top line of barbed wire in place so it wouldn't be too obvious that I had tampered with it, and then I slipped under it and into the safety of the parking lot.</p><p>It was on a hillside, and I slept on the downslope so that passing cars wouldn't see me through the chainlink gate. Some mornings, I'd wake up to the pitter-patter of rain on corrugated tin, and I'd just lay there and wait, the water rolling down in rivulets around me.</p><p>This was my home for a long time. Until some kids [[#twine-cb kids]]spotted me[[/twine-cb]] on my way out.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('kids', () => {
      this.get('kids').perform(script, data, window);
    });
  }),

  kids: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/homeless/parking/kids", { window: "how/stay/comfortable/homeless/parking/kids", screen: true });
  })
});
