import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I've been mulling it over for awhile, but I keep getting lost in my thoughts. There are a lot of reasons <span class='decision-path'>[[#twine-cb stay]]to stay[[/twine-cb]]</span> and there are a lot of reasons <span class='decision-path'>[[#twine-cb leave]]to go.[[/twine-cb]]</span></p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('stay', () => {
      this.get('stay').perform(script);
    }).cb('leave', () => {
      this.get('leave').perform(script);
    });
  }),

  stay: task(function * (script) {
    yield script.scene("how/stay", { window: "how/stay", screen: true });
  }),

  leave: task(function * (script) {
    yield script.scene("how/leave", { window: "how/leave", screen: true });
  })
});
