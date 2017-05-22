import { connect } from 'react-redux';

import ParseEndpoint from '../ParseEndpoint';
import { fetchCollectionFactory } from '../ActionFactory';
import CollectionProvider from './CollectionProvider';
import * as types from '../constants/ActionTypes';

const mapStateToProps = (state, ownProps) => {
  const collectionUrl = ParseEndpoint(ownProps.endpoint, ownProps.match.params);
  const collections = state.horsemanCollections || {};

  return {
    collectionUrl,
    collection: collections[collectionUrl] || { loading: true, data: [] },
  };
};

const mapDispatchToProps = dispatch => ({
  getCollection: uri => dispatch(fetchCollectionFactory(types.ADD_ARRAY_COLLECTION)(uri)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionProvider);
