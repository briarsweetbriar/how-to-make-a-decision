import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p><span class='decision-path'>[[#twine-cb friends]]Friends[[/twine-cb]]</span> are a big reason to stay. As is my <span class='decision-path'>[[#twine-cb city]]love[[/twine-cb]]</span> for this city. Also, moving is like <span class='decision-path'>[[#twine-cb comfortable]]shedding skin,[[/twine-cb]]</span> and I'm not sure if I can handle being that raw again.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('friends', () => {
      this.get('friends').perform(script);
    }).cb('city', () => {
      this.get('city').perform(script);
    }).cb('comfortable', () => {
      this.get('comfortable').perform(script);
    });
  }),

  friends: task(function * (script) {
    yield script.scene("how/stay/friends", { window: "how/stay/friends", screen: true });
  }),

  city: task(function * (script) {
    yield script.scene("how/stay/city", { window: "how/stay/city", screen: true });
  }),

  comfortable: task(function * (script) {
    yield script.scene("how/stay/comfortable", { window: "how/stay/comfortable", screen: true });
  })
});
