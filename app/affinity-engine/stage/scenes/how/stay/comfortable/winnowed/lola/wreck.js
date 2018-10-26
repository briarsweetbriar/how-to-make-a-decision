import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I was perfectly still, the kind of rigid still that squirrels get when they spot a dog. It wasn't until Lola opened the door and I saw the blood pooling on my shirt that I started to cry. She assured me that it was okay, though. I wasn't bleeding; it was her blood.</p><p>It was dripping from her face, and I don't think she realized it was there until that moment. Somehow she remained calm, even as I stared at her and continued to scream.</p><p>Later, my mom would tell me that Lola wore hard-lensed contacts, and the force of the collision broke the one in her right eye. The shards slid around to the back of her socket and severed the cord. They were able to save some of her vision, but after that, she could only see light and shadow through that eye.</p><p>She stopped taking care of us after that. We [[#twine]]stopped seeing her.[[/twine]] She wasn't family.</p>");

    window.window.close();
  })
});
