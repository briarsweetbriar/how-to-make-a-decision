import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>Somehow, when we were young and they were in grad school, I thought that we would keep living like that [[#twine-cb forever]]forever.[[/twine-cb]]</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('forever', () => {
      this.get('forever').perform(script, data, window);
    });
  }),

  forever: task(function * (script, data, window) {
    yield script.scene("how/stay/friends/moved-on/forever", { window: "how/stay/friends/moved-on/forever", screen: true });
    window.window.close();
  })
});
