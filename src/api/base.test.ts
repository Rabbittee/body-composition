import { User } from './base';
import { initializeTestEnvironment } from '@firebase/rules-unit-testing';

describe('user api', () => {
  test('post user', async () => {
    let testEnv = await initializeTestEnvironment({
      projectId: 'body-c2e88',
    });
    await testEnv.withSecurityRulesDisabled(async () => {
      User.postUser({
        name: 'John Doe',
        age: 30,
      });
    });
  });
});
