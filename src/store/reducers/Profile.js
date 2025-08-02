import { profileTypes, updateprofileActionsTypes, MultifileAddTypes, ImageDeleteActionsTypes } from '../actions'


export const ProfilelistInitialState = {
  list: null
}

export const ProfilelistStoreKeys = 'ProfilelistStore'

export const ProfilelistReducers = (state = ProfilelistInitialState, action) => {
  switch (action.type) {
    case profileTypes.GET_PROFILE_LIST:
      return { ...state, loading: true }
    case profileTypes.SAVE_PROFILE_LIST_RESPONSE:
      return { ...state, getAllProfile: action.data, loading: false }
    case profileTypes.CLEAR_PROFILE_LIST:
      return { ...state, getAllProfile: null }
    default:
      return state
  }
}

export const updateProfileInitialState = {
  data: null
}

export const updateProfileStoreKey = 'updateProfileStore'

export const updateProfileReducer = (state = updateProfileInitialState, action) => {
  switch (action.type) {
    case updateprofileActionsTypes.UPDATE_PROFILE:
      return { ...state, loading: true }
    case updateprofileActionsTypes.SAVE_UPDATE_PROFILE_RESPONSE:
      return {
        ...state,
        saveupdateProfileResponse: action.data,
        loading: false
      }
    case updateprofileActionsTypes.CLEAR_UPDATE_PROFILE:
      return { ...state, saveupdateProfileResponse: null }
    default:
      return state
  }
}

export const MultifileAddInitialState = {
  data: null
}

export const MultifileAddStoreKey = 'MultifileAddStore'

export const MultifileAddReducer = (state = MultifileAddInitialState, action) => {
  switch (action.type) {
    case MultifileAddTypes.GET_MULTIFILE_PROFILE_DETAILS:
      return { ...state, loading: true }
    case MultifileAddTypes.PROFILE_MULTIFILE_DETAILS_RESPONSE:
      return { ...state, PropertyAdd: action.data, loading: false }
    case MultifileAddTypes.CLEAR_MULTIFILE_PROFILE_DETAILS:
      return { ...state, PropertyAdd: null }
    default:
      return state
  }
}

export const ImageDeleteStoreKey = 'ImageDeleteStore'

export const ImageDeleteReducer = (state = {}, action) => {
  const res = action && action.data
  switch (action.type) {
    case ImageDeleteActionsTypes.REQUEST:
      return { ...state, loadingImagedelete: true }
    case ImageDeleteActionsTypes.RESPONSE:
      return {
        ...state,
        Imagedelete: res,
        statusImagedelete: res.status,
        messageImagedelete: res.message,
        loadingImagedelete: false
      }
    case ImageDeleteActionsTypes.CLEAR:
      return {
        ...state,
        Imagedelete: null,
        statusImagedelete: '',
        messageImagedelete: ''
      }
    default:
      return state
  }
}