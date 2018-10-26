import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I've moved a lot, if mostly within the city limits. Each time, I've [[#twine-cb winnowed]]winnowed[[/twine-cb]] my possessions down to what I could fit in a backpack, then I've biked to my new home. One year, I hopped from sublet to sublet nearly every month. After that, I was [[#twine-cb homeless]]homeless[[/twine-cb]] for awhile. Then sleeping out of a tent in my friends' backyard. Then crashing in a warehouse.</p><p>Right now, I'm sharing a home with some friends. The kitchen is stocked with everything I need to make a good meal, and I've been here long enough to acquire a quality mattress. I'm <span class='decision-path'>[[#twine-cb comfortable]]comfortable.[[/twine-cb]]</span></p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('winnowed', () => {
      this.get('winnowed').perform(script, data, window);
    }).cb('comfortable', () => {
      this.get('comfortable').perform(script, data, window);
    }).cb('homeless', () => {
      this.get('homeless').perform(script, data, window);
    });
  }),

  winnowed: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/winnowed", { window: "how/stay/comfortable/winnowed", screen: true });
  }),

  comfortable: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable", { window: "how/stay/comfortable/comfortable", screen: true });
    window.window.close();
  }),

  homeless: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/homeless", { window: "how/stay/comfortable/homeless", screen: true });
    window.window.close();
  }),
});
