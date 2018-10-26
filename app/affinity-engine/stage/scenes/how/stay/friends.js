import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>Over the years, I've known a lot of people here, though many of them have [[#twine-cb away]]moved away[[/twine-cb]] or just [[#twine-cb on]]moved on.[[/twine-cb]]</p><p>But [[#twine-cb others]]others[[/twine-cb]] are still in my life.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('away', () => {
      this.get('away').perform(script, data, window);
    }).cb('on', () => {
      this.get('on').perform(script, data, window);
    }).cb('others', () => {
      this.get('others').perform(script, data, window);
    });
  }),

  away: task(function * (script, data, window) {
    yield script.scene("how/stay/friends/moved-away", { window: "how/stay/friends/moved-away", screen: true });
  }),

  on: task(function * (script, data, window) {
    yield script.scene("how/stay/friends/moved-on", { window: "how/stay/friends/moved-on", screen: true });
  }),

  others: task(function * (script, data, window) {
    yield script.scene("how/stay/friends/others", { window: "how/stay/friends/others", screen: true });
  }),
});
