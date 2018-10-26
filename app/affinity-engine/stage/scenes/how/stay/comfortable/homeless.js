import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I had a friend who'd lived on the street for awhile. I bought him a coffee, and he told me how to survive. It was through that conversation that I learned about the Chipotle rooftop where I spent most my nights. (Nobody bothered me up there.)</p><p>When the spring rains started, I needed to find actual shelter though. The first night I stayed in a [[#twine-cb condo]]half-built condo.[[/twine-cb]] After that, I'd bike out to an [[#twine-cb parking]]abandoned airport parking lot[[/twine-cb]] in East Austin. It had covered parking, which was enough to keep me dry.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('condo', () => {
      this.get('condo').perform(script, data, window);
    }).cb('parking', () => {
      this.get('parking').perform(script, data, window);
    });
  }),

  condo: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/homeless/condo", { window: "how/stay/comfortable/homeless/condo", screen: true });
  }),

  parking: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/homeless/parking", { window: "how/stay/comfortable/homeless/parking", screen: true });
  })
});
