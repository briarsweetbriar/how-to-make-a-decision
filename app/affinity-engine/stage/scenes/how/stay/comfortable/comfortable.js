import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>A couple of months ago, this [[#twine-cb crush]]crush of mine[[/twine-cb]] told me that her routines are like waterways: wearing pathways down in her mind until they run as deep as canyons. Every now and then, she climbs back out and remembers how vast the possibilities are. It worries her, because she keeps going back in. And its getting harder to find her way out.</p><p>I told her, maybe that's what life is. We get caught up in our routines, and the only choice that really matters is which routines we let define us. At the time, it seemed like a [[#twine-cb wise]]wise[[/twine-cb]] thing to say. But since that conversation, I haven't heard from her, and I find myself fixating on that moment. On that false wisdom.</p><p>This routine I've carved out for myself, this comfort that I have: is it the <span class='decision-path'>[[#twine-cb free]]belly of a canyon?[[/twine-cb]]</span></p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('crush', () => {
      this.get('crush').perform(script, data, window);
    }).cb('wise', () => {
      this.get('wise').perform(script, data, window);
    }).cb('free', () => {
      this.get('free').perform(script, data, window);
    });
  }),

  crush: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush", { window: "how/stay/comfortable/comfortable/crush", screen: true });
  }),

  wise: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/wise", { window: "how/stay/comfortable/comfortable/wise", screen: true });
  }),

  free: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/free", { window: "how/stay/comfortable/comfortable/free", screen: true });
    window.window.close();
  })
});
