// write test fore selectors

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleData, getArticleDetailsLoading } from './articleDetails';
import { t } from 'i18next';

describe('articleDetails', () => {
  test('should return articleDetails', () => {
    const data = {
      id: '1',
      title: 'title'
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };
    expect(getArticleData(state as StateSchema)).toEqual(data);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleData(state as StateSchema)).toEqual(undefined);
  });

  // isLoginLoading
  test('should return lsLoading ', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false);
  });
});
