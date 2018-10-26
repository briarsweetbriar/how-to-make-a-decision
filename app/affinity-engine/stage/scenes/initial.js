import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

const ChoiceContainer = Ember.Object.extend({
  children: Ember.computed(() => Ember.Object.create()),
  choices: Ember.computed(() => Ember.Object.create()),

  choose(key, value) {
    const keyParts = key.split('.');
    const firstKey = keyParts.shift();

    if (keyParts.length > 0) {
      const remainingParts = keyParts.join('.');
      const container = this.get(`children.${firstKey}`) || this.set(`children.${firstKey}`, ChoiceContainer.create());
      container.choose(remainingParts, value);
    } else {
      this.set(`choices.${firstKey}`, value);
    }
  },

  tallyChoices(key) {
    const choices = this.get('choices');
    const children = !key ? this.get('children') : this.get(`children.${key}`) || ChoiceContainer.create();

    const childSum = Object.keys(children).reduce((sum, key) => {
      return sum + children.get(key).tallyChoices();
    }, 0);

    return Object.keys(choices).reduce((sum, key) => {
      return sum + choices.get(key);
    }, childSum);
  }
})

export default Scene.extend({
  start: task(function * (script, data) {
    data.set('choices', ChoiceContainer.create());

    script.text("<p>Recently, I've been thinking about leaving. The thing is, <span class='decision-path'>[[#twine-cb how]]how[[/twine-cb]]</span> do you make a <span class='decision-path'>[[#twine-cb decision]]decision[[/twine-cb]]</span> like that?</p>").cb('how', () => {
      this.get('how').perform(script);
    }).cb('decision', () => {
      this.get('decision').perform(script);
    });
  }),

  how: task(function * (script) {
    yield script.scene("how", { window: "how", screen: true });
  }),

  decision: task(function * (script) {
    yield script.scene("decision", { window: "decision", screen: true });
  })
});
