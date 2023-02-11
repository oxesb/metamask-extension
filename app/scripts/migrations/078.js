import { cloneDeep } from 'lodash';

const version = 78;

/**
 * Prior to token detection v2 the data property in tokensChainsCache was an array,
 * in v2 we changes that to an object. In this migration we are converting the data as array to object.
 */
export default {
  version,
  async migrate(originalVersionedData) {
    const versionedData = cloneDeep(originalVersionedData);
    versionedData.meta.version = version;
    const state = versionedData.data;
    const newState = transformState(state);
    versionedData.data = newState;
    return versionedData;
  },
};

function transformState(state) {
  if (state?.metamask?.showPortfolioTooltip !== undefined) {
    delete state.metamask.showPortfolioTooltip;
  }

  return state;
}
